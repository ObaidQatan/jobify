import { Button } from "@mantine/core";
import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import LogoIcon from "../Logo/LogoIcon";
import LogoText from "../Logo/LogoText";

const Header = () => {
  const { t } = useTranslation("common");
  const isDark = false;

  return (
    <header className="flex justify-between px-3 py-8 z-[100] bg-transparent text-white h-fit">
      <Link href="/">
        <a className="flex justify-start items-center hover:opacity-70">
          <LogoIcon className="w-9 mx-2" />
          <LogoText className="w-[200px]" />
        </a>
      </Link>

      <div className="links flex justify-end items-center flex-1">
        <div className="pages flex flex-1 justify-end items-center">
          {["Home", "About", "Pricing", "Find Jobs"].map((link) => (
            <Link href={`/${camelCase(link)}`} key={link}>
              <a className="hover:bg-white hover:bg-opacity-10 mx-2 px-3 py-1 rounded-md">
                {t(camelCase(link))}
              </a>
            </Link>
          ))}
        </div>
        <div className="external-links flex justify-end items-center px-8">
          <Link href="/signin">
            <a className="hover:underline mx-2">{t("signin")}</a>
          </Link>
          <Link href="/freetrial">
            <a className="mx-2 border border-white py-2 px-3 text-white hover:bg-white hover:text-pink-400">
              {t(camelCase("Start Free Trial"))}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
