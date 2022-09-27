import type { NextPage } from "next";
import GetStarted from "../src/components/GetStarted";
import Recommended from "../src/components/Recommended";
import Links from "../src/components/Links";
import Layout from "../src/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="flex-col">
      <GetStarted />
      <Recommended />
      <Links />
    </Layout>
  );
};

export default Home;
