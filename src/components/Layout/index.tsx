import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import { ReactNode } from "react";
import useDetectSmallScreen from "../../hooks/useDetectSmallScreen";
import Footer from "./Footer";
import Main from "./Main";
import PageWrapper from "./PageWrapper";
import SideBar from "./SideBar";

const Layout = ({
  children,
  className,
}: {
  children: ReactNode[] | ReactNode;
  className?: string;
}) => {
  const { t } = useTranslation("common");
  const isDark = false;
  const isMobile = useDetectSmallScreen();

  return (
    <PageWrapper>
      {isMobile && <SideBar />}

      <Main className={className}>{children}</Main>

      {/* <Footer className="text-black py-5 px-20 text-[14px]">
        <div className="rights text-center">
          <p className="text-[14px]">
            © 2021 {t("appName")}. {t(camelCase("All rights reserved"))}
          </p>
        </div>
        <div className="links flex">
        </div>
      </Footer> */}
    </PageWrapper>
  );
};

export default Layout;
