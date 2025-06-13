export default function FormLabel({ style, label, required }) {
  return (
    <label
      className={`mb-2  font-medium text-sm capitalize text-start  ${style}`}
    >
      {" "}
      {label} {required && <span className="text-red-700 font-medium"> *</span>}
    </label>
  );
}
