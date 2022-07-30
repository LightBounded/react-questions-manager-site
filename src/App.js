import { useState } from "react";
import QuestionForm from "./components/QuestionForm";
import Questions from "./components/Questions";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-max max-w-max mx-auto gap-4 p-4">
      <div className="text-3xl uppercase font-semibold">
        Questions & Answers
      </div>
      <Questions questions={questions} setQuestions={setQuestions} />
      <QuestionForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        questions={questions}
        setQuestions={setQuestions}
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-2 border-[#777AA6] rounded-md text-sm text-[#777AA6] font-bold uppercase px-5 py-2 transition duration-500 focus:outline-none focus:ring-[3px] focus:ring-[#777AA6] focus:ring-opacity-50 hover:bg-[#777AA6] hover:text-white"
      >
        Add Question
      </button>
    </div>
  );
}

export default App;
