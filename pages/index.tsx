import type { NextPage } from "next";
import GetStarted from "../src/components/GetStarted";
import Layout from "../src/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <GetStarted />
    </Layout>
  );
};

export default Home;
