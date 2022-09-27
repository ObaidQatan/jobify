import useTranslation from "next-translate/useTranslation";

const Man = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div className={className ? className : ""}>
      <img src="/img/bike.svg" alt="man" />
    </div>
  );
};

export default Man;
