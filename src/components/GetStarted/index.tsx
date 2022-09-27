import { camelCase, startCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import { Search } from "tabler-icons-react";
import Header from "../Layout/Header";
import Man from "./Man";
import Waves from "./Waves";
import { motion } from "framer-motion";

const GetStarted = ({ className }: { className?: string }) => {
  const { t } = useTranslation("common");

  return (
    <div
      className={`flex justify-center flex-col min-h-screen overflow-hidden relative ${className}`}
    >
      <Header />
      <motion.div
        initial={{ x: "100px", opacity: 0 }}
        animate={{
          x: "0",
          opacity: 1,
        }}
        className="absolute top-[-100px] right-[-100px] w-[700px] "
      >
        <Waves
          style={{
            transform: "skew(20deg, -10deg)",
          }}
        />
      </motion.div>
      <div className="body flex-1 flex z-[1] mx-5">
        <div className="info-section flex-1 flex flex-col max-w-[500px]">
          <div
            className="title font-bold pt-10 font-[Montserrat-Bold]"
            style={{ wordBreak: "break-word" }}
          >
            <h1 className="text-[32px]">
              {startCase(t(camelCase("Start Your")))}{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #F372B6, #b064f5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {startCase(t(camelCase("Career")))}{" "}
              </span>
              {startCase(t(camelCase("Journey Now With Jobify")))}
            </h1>
          </div>

          <div className="search flex bg-white rounded-xl shadow-lg p-2 my-10">
            <input
              type="text"
              placeholder={`${t("example")}: ${startCase(
                t("brands.starbucks")
              )}, ${startCase(t("brands.burgerKing"))}, etc.`}
              className="outline-none flex-1 px-1 py-2 font-[Nunito]"
            />
            <div
              className="icon rounded-full p-2 cursor-pointer mx-2 text-white"
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
                  "Jobify is a platform that helps you find jobs quickly offered by well known parties"
                )
              )}{" "}
            </p>
          </div>
        </div>
        <div className="image-section flex-1 relative">
          <motion.div
            className="w-[500px] absolute right-0"
            initial={{ x: "700px" }}
            animate={{ x: "0", transition: { duration: 0.8, type: "spring" } }}
          >
            <Man className="scale-x-[-1] " />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
