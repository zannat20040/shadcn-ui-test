
export default function ErrorMessage({ message, style }) {
  return (
    <span className={`${style} text-red-700 dark:text-red-400 text-xs capitalize`}>
      {"  "}
      {message}
    </span>
  );
}
