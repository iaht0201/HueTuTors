import React, { createContext, useState } from "react";
import { supabase } from "../supabaseClient";
export const AuthenticatorContext = createContext();
export default function AuthenticatorContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState("");
  const imageconvert = (img) => {
    return `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/coverimages/${img}`;
  };
  const logInAccount = async (email) => {
    try {
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for your magic login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthenticatorContext.Provider
      value={{
        loading,
        imageconvert,
      }}
    >
      {children}
    </AuthenticatorContext.Provider>
  );
}
