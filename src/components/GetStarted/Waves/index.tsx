import useTranslation from "next-translate/useTranslation";
import Elipse from "./Elipse";
import Man from "../Man";
import Polygon from "./Polygon";
import Star from "./Star";

const Waves = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${className}`} style={style ? style : {}}>
      <Polygon className=" top-0 right-0" />
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
