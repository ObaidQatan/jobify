import { SimpleGrid } from "@mantine/core";
import { camelCase, startCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { linksGroups } from "../links";

const LinksContent = () => {
  const { t } = useTranslation("common");

  return (
    <SimpleGrid cols={4} breakpoints={[{ maxWidth: 600, cols: 1 }]}>
      {linksGroups.map((group) => (
        <div key={group.id} className="tracking-wider">
          <h3 className="font-bold pb-4 text-pink-500">
            {startCase(t(camelCase(group.title)))}
          </h3>
          <ul>
            {group.links.map((link) => (
              <li key={link.id} className="py-1 hover:underline">
                <Link href={link.url}>
                  <a target="_blank" className="hover:underline">
                    {startCase(t(camelCase(link.name)))}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SimpleGrid>
  );
};

export default LinksContent;
