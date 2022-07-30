import { useState } from "react";
import { Transition } from "@headlessui/react";
import QuestionForm from "./QuestionForm";

const Question = ({ question, questions, setQuestions }) => {
  const [answerIsShown, setAnswerIsShown] = useState(false);
  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const handleDelete = id => {
    setQuestions(questions.filter(question => question.id !== id));
  };

  return (
    <>
      <Transition
        show={!isBeingEdited}
        enter="transform transition duration-200"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transform transition duration-200 ease-in-out"
        leaveFrom="opacity-100 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div className="flex flex-col text-gray-600 w-80">
          <div className="bg-white rounded-t-md p-5">
            <div className="text-2xl">{question.expression}</div>
            <div
              onClick={() => setAnswerIsShown(!answerIsShown)}
              className="cursor-pointer underline"
            >
              Show/Hide
            </div>
            <Transition
              show={answerIsShown}
              enter="transform transition duration-200"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-200 ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-95 "
            >
              <div>{question.answer}</div>
            </Transition>
          </div>
          <div className="flex flex-row-reverse bg-gray-50 rounded-b-md px-5 py-3">
            <button
              onClick={() => setIsBeingEdited(true)}
              className="border-2 border-[#F5997A] rounded-md text-sm text-[#F5997A] font-bold uppercase px-5 py-2 transition duration-500 focus:outline-none focus:ring-[3px] focus:ring-[#F5997A] focus:ring-opacity-50 hover:bg-[#F5997A] hover:text-white"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(question.id)}
              className="border-2 border-[#D64550] rounded-md text-sm text-[#D64550] font-bold uppercase mr-1.5 px-5 py-2 transition duration-500 focus:outline-none focus:ring-[3px] focus:ring-[#D64550] focus:ring-opacity-50 hover:bg-[#D64550] hover:text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </Transition>
      <Transition
        show={isBeingEdited}
        enter="transform transition duration-200"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transform transition duration-200 ease-in-out"
        leaveFrom="opacity-100 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <QuestionForm
          action={"edit"}
          question={question}
          questions={questions}
          setQuestions={setQuestions}
          isOpen={isBeingEdited}
          setIsOpen={setIsBeingEdited}
        />
      </Transition>
    </>
  );
};

export default Question;
