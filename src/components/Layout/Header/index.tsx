import { Button } from "@mantine/core";
import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoIcon from "../Logo/LogoIcon";
import LogoText from "../Logo/LogoText";

const Header = () => {
  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const isDark = false;

  return (
    <header className=" bg-[#ffffff10] backdrop-blur-sm md:backdrop-blur-none flex justify-between px-3 py-5 md:py-8 z-[100] md:bg-transparent text-white h-fit text-[12px] md:text-[15px]">
      <div className="flex items-center rounded-lg">
        <Link href="/">
          <a className="flex justify-start items-center hover:opacity-70">
            <LogoIcon className="w-9 mx-2" />
            <LogoText />
          </a>
        </Link>
        <Link href={router.asPath} locale={lang === "en" ? "ar" : "en"}>
          <a className="md:text-pink-400 text-white mx-2 flex justify-center items-center text-[15px] border rounded-md p-1 h-fit">
            {t(lang === "en" ? "ar" : "en")}
          </a>
        </Link>
      </div>

      <div className="links flex justify-end items-center flex-1">
        <div className="pages flex flex-1 justify-end items-center">
          {["Home", "About", "Pricing", "Find Jobs"].map((link) => (
            <Link href={`/${camelCase(link)}`} key={link}>
              <a className="hover:bg-white hover:bg-opacity-10 px-3 py-1 rounded-md">
                {t(camelCase(link))}
              </a>
            </Link>
          ))}
        </div>
        <div className="external-links flex justify-end items-center px-8">
          <Link href="/signin">
            <a className="mx-2 border border-white py-2 px-3 text-white hover:bg-white hover:text-pink-400">
              {t("signin")}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
