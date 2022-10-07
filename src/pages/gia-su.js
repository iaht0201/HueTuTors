import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header1 from "../Components/Header1";
import TutorDetail from "../Components/TutorsDetails";
import TutorsDetailContextProvider from "../context/tutorDetailContext";

export default function TutorsDetail() {
  let { userId } = useParams();
  useEffect(() => {
    console.log(`/something/${userId}`);
  }, []);

  return (
    <TutorsDetailContextProvider>
      <Header1 />
      <div>
        <TutorDetail />
        UserId : {userId}
      </div>
    </TutorsDetailContextProvider>
  );
}
