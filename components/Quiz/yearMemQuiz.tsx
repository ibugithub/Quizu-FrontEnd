'use client'
import React, { useState } from "react";
import axios from "axios"
import { useEffect } from "react"
import { BaseUrl } from "../utils/baseUrl";
import { Questions } from "../interface";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export const Quiz = () => {
  const url = `${BaseUrl}/api/mcq/show_questions/`
  const [questions, setQuestions] = useState<Questions[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<{ [questionId: number]: [number, boolean] | null }>({})
  const [submitted, setSubmitted] = useState(false)
  const [corrAnswer, setCorrAnswer] = useState(0)

  console.log('the selectedAnswer is ', selectedAnswer)
  useEffect(() => {
    const fetchQuiz = async () => {

      try {
        const result = await axios.get(url)
        console.log('the result is ', result)
        setQuestions(result.data)

      } catch (err) {
        console.error("Error while fetching quiz at yearMemQuiz.tsx", err)
      }
    }

    fetchQuiz();
  }, []);

  const HandleAnswerClick = (questionId: number, answerId: number, isCorrect: boolean) => {
    setSelectedAnswer((prevAnswerId) => ({
      ...prevAnswerId,
      [questionId]: [answerId, isCorrect]
    }))
  };

  const countCorrAnswers = () => {
    let corrAnswer = 0;
    for (let key in selectedAnswer) {
      if(selectedAnswer[key]?.[1])
        {
          corrAnswer++;
        }
    }
    setCorrAnswer(corrAnswer)
  }

  const HandleSubmit = () => {
    setSubmitted(true);
    countCorrAnswers()
  }
  return (
    <>
      <div className="flex justify-end">
        <div className="p-3 text-green-600">Results : {corrAnswer} out of 3</div>
      </div>

      <div className="flex justify-center">
        <div className=" flex flex-col items-start gap-10">
          {questions.map((question) => (
            <div key={question.id}>
              <div>{question.text}</div>
              <div className="flex flex-col gap-3 mt-5">
                {question.answers.map((answer) => (

                  <div key={answer.id} className="flex ">
                    <div className="flex gap-2 justify-center items-center">
                      <span onClick={() => HandleAnswerClick(question.id, answer.id, answer.is_correct)}>
                        {selectedAnswer[question.id]?.[0] === answer.id ? (
                          <MdCheckBox />
                        ) : (
                          <MdCheckBoxOutlineBlank />
                        )}
                      </span>
                      {selectedAnswer[question.id]?.[0] === answer.id && submitted ? (
                        <div className={`p-3 ${answer.is_correct ? 'bg-green-500' : 'bg-red-500'}`}>{answer.text}</div>
                      ) : (
                        <div className="p-3">{answer.text}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-10 ">
        <button className="bg-green-500 py-3 px-7 text-white " onClick={HandleSubmit}>submit</button>
      </div>

    </>
  )
}