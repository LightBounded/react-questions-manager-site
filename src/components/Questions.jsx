import Question from "./Question";

const Questions = ({ questions, setQuestions }) => {
  if (questions.length === 0) return null;
  return (
    <div className="flex flex-col gap-4">
      {questions.map(question => (
        <Question
          key={question.id}
          question={question}
          questions={questions}
          setQuestions={setQuestions}
        />
      ))}
    </div>
  );
};

export default Questions;
