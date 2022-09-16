import type { NextPage } from "next";
import Head from "next/head";
import BackedBy from "../../sections/BackedBy";
import EarlyAccess from "../../sections/EarlyAccess";
import Features from "../../sections/Features";
import Hero from "../../sections/Hero";
import RoadMap from "../../sections/RoadMap";
import Team from "../../sections/Team";
import Tires from "../../sections/Tires";
import BaseLayout from "../Layouts/BaseLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hentis</title>
      </Head>
      <BaseLayout>
        <Hero />
        <Features />
        <Tires />
        <RoadMap />
        <Team />
        <BackedBy />
        <EarlyAccess />
      </BaseLayout>
    </>
  );
};

export default Home;
