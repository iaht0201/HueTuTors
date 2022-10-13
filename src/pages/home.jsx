import React from "react";
import Connect from "../Components/Connect";
import Feature from "../Components/Feature";
import Guide from "../Components/Guide";

import Header1 from "../Components/Header1";
import Hero from "../Components/Hero";
import WhyHueTuTor from "../Components/Why";
import TutorsContextProvider from "../context/tutorsContext";

export default function Home() {
  return (
    <TutorsContextProvider>
      <Header1 />
      <Hero />
      <div className="mt-[40px] mb-[70px] ">
        <Guide />
      </div>
      <Connect />
      {/* <Feature /> */}
      {/* <WhyHueTuTor /> */}{" "}
    </TutorsContextProvider>
  );
}
