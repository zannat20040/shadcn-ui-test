
export default function FormHeader({
  title,
  subtitle,
  titleStyle,
  subtitleStyle,
}) {
  return (
    <>
      <span className={`${titleStyle} text-center text-xl font-bold text-blue-900 dark:text-white inline-block w-full`}>{title}</span>
      <span className={`${subtitleStyle} text-center mt-1 mb-6 inline-block`}>{subtitle}</span>
    </>
  );
}
