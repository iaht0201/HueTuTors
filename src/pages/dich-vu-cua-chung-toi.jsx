import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header1 from "../Components/Header1";
import SerViceContextProvider from "../context/serviceContext";

export default function ServiceTutor() {
  let { id } = useParams();
  useEffect(() => {
    console.log(`/something/${id}`);
  }, []);
  return (
    <SerViceContextProvider>
      <Header1 />
      <div> {id}</div>
    </SerViceContextProvider>
  );
}
