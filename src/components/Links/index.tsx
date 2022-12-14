import { SimpleGrid } from "@mantine/core";
import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import LinksContent from "../Layout/Footer/links/Links.content";
import Map from "./Map";

const Links = () => {
  const { t } = useTranslation("profile");

  return (
    <div className="p-5 border-t">
      {/* <Map /> */}
      <LinksContent />
    </div>
  );
};

export default Links;
