'use client'
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { BaseUrl } from "../utils/baseUrl";
import { NoteInterface } from "../interface";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

export const Notes = () => {
  const url = `${BaseUrl}/api/mcq/show_notes/`;
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const result = await axios.get(url);
        console.log('the result is ', result);
        setNotes(result.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error while fetching quiz at yearMemQuiz.tsx", err);
      }
    };
    fetchQuiz();
  }, [url]);

  const handlePrevNote = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? notes.length - 1 : prevIndex - 1));
  };

  const handleNextNote = () => {
    setCurrentIndex((prevIndex) => (prevIndex === notes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-gray-100"></div>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-screen"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl w-full p-6 rounded-lg shadow-lg bg-gray-800"
          >
            <div className="flex flex-row justify-between items-center mb-4">
              <MdArrowLeft
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={handlePrevNote}
              />
              <div className="flex-grow text-center text-gray-100">
                Note {currentIndex + 1} of {notes.length}
              </div>
              <MdArrowRight
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={handleNextNote}
              />
            </div>
            <motion.div
              key={notes[currentIndex].id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-4 rounded-lg shadow-md"
            >
              <div className="text-gray-100">{notes[currentIndex].text}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};