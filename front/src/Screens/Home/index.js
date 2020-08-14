import React from "react";
import { HomeWrapper } from "./Style";
import Firstblock from "./Partials/Firstblock";
import Secondblock from "./Partials/Secondblock";
import ThirdBlock from "./Partials/ThirdBlock";

function Home() {
  return (
    <HomeWrapper>
      <Firstblock />
      <Secondblock />
      <ThirdBlock />
    </HomeWrapper>
  );
}

export default Home;
