export default function FormInputField({ register, fieldname, props, style }) {
  return (
    <input
      {...register(fieldname, props)}
      className={`${style} border border-gray-300 dark:border-gray-700  rounded-md py-2 text-sm w-full px-3`}
    />
  );
}
