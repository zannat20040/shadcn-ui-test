export default function FormTextAreaField({
  register,
  fieldname,
  props,
  style,
}) {
  return (
    <textarea
      {...register(fieldname, props)}
      className={`${style} dark:border-gray-700  border border-gray-300 rounded-md py-2 text-sm w-full px-3`}
    />
  );
}
