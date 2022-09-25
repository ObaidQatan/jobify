import type { NextPage } from "next";
import GetStarted from "../src/components/GetStarted";
import Recommended from "../src/components/Recommended";
import Layout from "../src/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <GetStarted />
      <Recommended />
    </Layout>
  );
};

export default Home;
