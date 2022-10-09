import React, { createContext, useState } from "react";
import { supabase } from "../supabaseClient";
export const TutorsDetailContext = createContext();
export default function TutorsDetailContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState("")
  const imageconvert = (img) => {
    return `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/coverimages/${img}`;
  };
  const getDetails = async (userId) => {
    setLoading(true);
    try {
      const user = supabase.auth.user();

      const { data, error } = await supabase
        .from("users")
        .select("*,tutors!inner(*)")
        .eq("userId", userId)
      if (data) {
        setDetail(data);
      }
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <TutorsDetailContext.Provider
      value={{
        loading,
        imageconvert,
        getDetails,
        detail
      }}
    >
      {children}
    </TutorsDetailContext.Provider>
  );
}
