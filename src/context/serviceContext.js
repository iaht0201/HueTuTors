import React, { createContext, useState } from "react";
import { supabase } from "../supabaseClient";
export const ServiceContext = createContext();
export default function SerViceContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const imageconvert = (img) => {
    return `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/searchcategory/${img}`;
  };

  return (
    <ServiceContext.Provider
      value={{
        loading,
        imageconvert,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}
