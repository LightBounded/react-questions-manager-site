import { Formik, Form, Field } from "formik";
import Textarea from "./Textarea";
import * as Yup from "yup";
import { Transition } from "@headlessui/react";

const validationSchema = Yup.object({
  expression: Yup.string().required("Question cannot be empty."),
  answer: Yup.string().required("Answer cannot be empty."),
});

const QuestionForm = ({
  action,
  isOpen,
  setIsOpen,
  question,
  questions,
  setQuestions,
}) => {
  return (
    <Transition
      show={isOpen}
      enter="transform transition duration-200"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform transition duration-200 ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <Formik
        initialValues={{
          expression: question ? question.expression : "",
          answer: question ? question.answer : "",
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          switch (action) {
            case "edit":
              setQuestions(
                questions.map(element =>
                  element.id === question.id
                    ? {
                        expression: values.expression,
                        answer: values.answer,
                        id: question.id,
                      }
                    : element
                )
              );
              break;
            default:
              setQuestions([
                ...questions,
                {
                  expression: values.expression,
                  answer: values.answer,
                  id: Math.floor(Math.random() * 1000) + 9000,
                },
              ]);
              break;
          }

          setIsOpen(false);
        }}
      >
        <Form noValidate className="rounded-md text-gray-600 w-80">
          <div className="bg-white rounded-t-md p-5">
            <Field
              name="expression"
              label="Question"
              as={Textarea}
              className="mb-4"
            />
            <Field
              name="answer"
              label="Answer"
              as={Textarea}
              className="mb-2"
            />
          </div>
          <div className="flex flex-row-reverse bg-gray-50 rounded-b-md px-5 py-3">
            <button
              type="submit"
              className="border-2 border-[#92DCE5] rounded-md text-sm text-[#92DCE5] font-bold uppercase px-5 py-2 transition duration-500 focus:outline-none focus:ring-[3px] focus:ring-[#92DCE5] focus:ring-opacity-50 hover:bg-[#92DCE5] hover:text-white"
            >
              {action === "edit" ? "Save" : "Add"}
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              type="button"
              className="border-2 border-transparent rounded-md text-sm text-gray-500 font-bold uppercase mr-1.5 px-5 py-2 transition duration-500 focus:outline-none focus:ring-[3px] focus:ring-gray-200"
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </Transition>
  );
};

export default QuestionForm;
