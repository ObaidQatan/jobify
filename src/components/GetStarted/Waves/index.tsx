import useTranslation from "next-translate/useTranslation";
import Elipse from "./Elipse";
import Man from "../Man";
import Polygon from "./Polygon";
import Star from "./Star";

const Waves = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div className={`${className}`}>
      <Polygon />
      <Polygon />
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <Elipse key={i} />
      ))}
    </div>
  );
};

export default Waves;
