import useTranslation from "next-translate/useTranslation";
import { Search } from "tabler-icons-react";
import Man from "./Man";
import Waves from "./Waves";

const GetStarted = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex justify-between items-center w-full ${className}`}>
      <Waves />
      <div className="info-section flex flex-col">
        <h1 className="title"></h1>

        <div className="search flex">
          <input type="text" />
          <Search />
        </div>

        <div className="description"></div>
      </div>
      <Man />
    </div>
  );
};

export default GetStarted;
