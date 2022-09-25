import useTranslation from "next-translate/useTranslation";

const Polygon = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex justify-between items-center w-full ${className}`}>
      Polygon
    </div>
  );
};

export default Polygon;
