import { SimpleGrid } from "@mantine/core";
import { camelCase } from "lodash";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Map from "./Map";

const Links = () => {
  const { t } = useTranslation("profile");

  return (
    <SimpleGrid
      cols={4}
      breakpoints={[{ maxWidth: 600, cols: 1 }]}
      className="relative"
    >
      <Map />
      {[].map(
        (group: {
          id: number;
          title: string;
          links: { id: number; url: string; name: string }[];
        }) => (
          <div key={group.id} className="tracking-wider">
            <h3 className="font-bold pb-4 text-cyan-500">
              {t(`link.${camelCase(group.title)}`)}
            </h3>
            <ul>
              {group.links.map((link) => (
                <li key={link.id} className="py-1 hover:underline">
                  <Link href={link.url}>
                    <a target="_blank" className="hover:underline">
                      {t(`link.${camelCase(link.name)}`)}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </SimpleGrid>
  );
};

export default Links;
