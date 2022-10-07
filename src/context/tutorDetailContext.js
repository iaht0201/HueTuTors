import React, { createContext, useState } from "react";
import { supabase } from "../supabaseClient";
export const TutorsDetailContext = createContext();
export default function TutorsDetailContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const imageconvert = (img) => {
    return `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/searchcategory/${img}`;
  };

  return (
    <TutorsDetailContext.Provider
      value={{
        loading,
        imageconvert,
      }}
    >
      {children}
    </TutorsDetailContext.Provider>
  );
}
