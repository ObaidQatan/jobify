import useTranslation from "next-translate/useTranslation";

const Star = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex justify-between items-center w-full ${className}`}
    ></div>
  );
};

export default Star;
