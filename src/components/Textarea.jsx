import { useField } from "formik";

const Textarea = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={className}>
      <label className="block text-lg">{label}</label>
      <textarea
        cols="45"
        rows="3"
        {...field}
        {...props}
        className={`block bg-gray-50 border border-gray-100 rounded-md w-full mt-0.5 px-2.5 py-1.5 transition duration-400 focus:outline-none focus:ring-2 ${
          meta.touched && meta.error
            ? "focus:ring-red-200"
            : "focus:ring-gray-200"
        }`}
      ></textarea>
      {meta.touched && meta.error ? (
        <div className={`text-sm text-red-400 mt-0.5`}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Textarea;
