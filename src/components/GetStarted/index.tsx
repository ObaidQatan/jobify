import useTranslation from "next-translate/useTranslation";

const GetStarted = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex justify-between items-center w-full ${className}`}>
      GetStarted
    </div>
  );
};
