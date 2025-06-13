
export default function FormHeader({
  title,
  subtitle,
  titleStyle,
  subtitleStyle,
}) {
  return (
    <div className=" px-10">
      <span className={`${titleStyle} text-xl font-bold text-blue-900 dark:text-white inline-block`}>{title}</span>
      <span className={`${subtitleStyle} mt-1 mb-6 inline-block`}>{subtitle}</span>
    </div>
  );
}
