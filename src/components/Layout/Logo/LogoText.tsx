import useTranslation from "next-translate/useTranslation";
import { memo } from "react";

const LogoText = ({ className }: { className?: string }) => {
  const { t } = useTranslation("common");

  return (
    <h3 className="md:text-pink-400 text-white font-bold text-[15px] md:text-[20px] align-baseline">
      {t("appName")}
    </h3>
  );
};

export default memo(LogoText);
