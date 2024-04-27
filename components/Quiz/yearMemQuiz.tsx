'use client'
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BaseUrl } from "../utils/baseUrl";
import { Questions } from "../interface";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { motion } from "framer-motion";

export const Quiz = () => {
  const url = `${BaseUrl}/api/mcq/show_questions/`;
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<{ [questionId: number]: [number, boolean] | null }>({});
  const [submitted, setSubmitted] = useState(false);
  const [corrAnswer, setCorrAnswer] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const result = await axios.get(url);
        console.log('the result is ', result);
        setQuestions(result.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error while fetching quiz at yearMemQuiz.tsx", err);
      }
    };

    fetchQuiz();
  }, [url]);

  const HandleAnswerClick = (questionId: number, answerId: number, isCorrect: boolean) => {
    setSelectedAnswer((prevAnswerId) => ({
      ...prevAnswerId,
      [questionId]: [answerId, isCorrect]
    }));
  };

  const countCorrAnswers = () => {
    let corrAnswer = 0;
    for (let key in selectedAnswer) {
      if (selectedAnswer[key]?.[1]) {
        corrAnswer++;
      }
    }
    setCorrAnswer(corrAnswer);
  };

  const HandleSubmit = () => {
    setSubmitted(true);
    countCorrAnswers();
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const HandleStart = () => {
    setSubmitted(false);
    setCorrAnswer(0);
    setSelectedAnswer({});
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <div ref={containerRef} className="relative">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-gray-100"></div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center "
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl w-full p-6 rounded-lg shadow-lg"
          >
            <div className="flex justify-end mb-4">
              <div className="p-3 text-gray-100">Results: {corrAnswer} out of {questions.length}</div>
            </div>
            <div className="flex flex-col gap-10">
              {questions.map((question) => (
                <motion.div
                  key={question.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 p-8 rounded-lg shadow-md"
                >
                  <div className="mb-4 font-semibold text-gray-100">{question.text}</div>
                  <div className="flex flex-col gap-3">
                    {question.answers.sort(() => Math.random() - 0.5).map((answer) => (
                      <div key={answer.id} className="flex items-center">
                        <span
                          onClick={() => HandleAnswerClick(question.id, answer.id, answer.is_correct)}
                          className="cursor-pointer"
                        >
                          {selectedAnswer[question.id]?.[0] === answer.id ? (
                            <MdCheckBox className="text-green-500" />
                          ) : (
                            <MdCheckBoxOutlineBlank className="text-gray-100" />
                          )}
                        </span>
                        <div
                          className={`p-3 rounded-lg ml-2 text-gray-100 ${
                            submitted
                              ? answer.is_correct
                                ? 'bg-green-500 text-white'
                                : selectedAnswer[question.id]?.[0] === answer.id
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-700'
                              : 'bg-gray-700'
                          }`}
                        >
                          {answer.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {submitted ? (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                onClick={HandleStart}
              >
                Start Again
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
                onClick={HandleSubmit}
              >
                Submit
              </button>
            </motion.div>
          )}
          <div className="fixed bottom-14 right-4 flex flex-col gap-2">
            <MdArrowUpward
              className="text-gray-100 hover:text-gray-700 cursor-pointer"
              onClick={scrollToTop}
            />
            <MdArrowDownward
              className="text-gray-100 hover:text-gray-700 cursor-pointer"
              onClick={scrollToBottom}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};