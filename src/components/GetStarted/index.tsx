import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import { Search } from "tabler-icons-react";
import Header from "../Layout/Header";
import Man from "./Man";
import Waves from "./Waves";

const GetStarted = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex justify-center flex-col min-h-screen overflow-hidden relative ${className}`}
    >
      <Header />
      <Waves
        className="absolute top-[-100px] right-[-100px] w-[700px] "
        style={{
          transform: "skew(20deg, -10deg)",
        }}
      />
      <div className="body flex-1 flex z-[1] mx-5">
        <div className="info-section flex-1 flex flex-col max-w-[500px]">
          <div
            className="title font-bold pt-10"
            style={{ wordBreak: "break-word" }}
          >
            <h1 className="text-[32px]">
              {t(camelCase("Start Your"))}{" "}
              <span>{t(camelCase("Career"))} </span>
              {t(camelCase("Journey Now With Jobify"))}
            </h1>
          </div>

          <div className="search flex bg-white rounded-xl shadow-lg p-2 my-10">
            <input
              type="text"
              placeholder="example: Starbucks, Burger King, etc"
              className="outline-none flex-1 px-1 py-2 font-[Nunito]"
            />
            <div
              className="icon rounded-full p-1.5 cursor-pointer mx-2 text-white"
              style={{
                background: "linear-gradient(90deg, #ffd400, #fb7401)",
              }}
            >
              <Search className="w-[20px] h-[20px]" />
            </div>
          </div>

          <div
            className="description mt-5 max-w-[300px] text-start text-slate-500"
            style={{ wordBreak: "break-word" }}
          >
            <p className="text-[13px]">
              {t(
                camelCase(
                  "Jobify is a platform that helps you find jobs quickly offered by well known bodies"
                )
              )}{" "}
            </p>
          </div>
        </div>
        <div className="image-section flex-1 relative">
          <Man className="scale-x-[-1] w-[500px] absolute right-0" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
