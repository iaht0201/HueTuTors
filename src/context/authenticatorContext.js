import React, { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { supabase } from "../supabaseClient";
import "react-toastify/dist/ReactToastify.css";
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
      else {
        toast("Vui lòng kiểm tra email!");
      }
    } catch (error) {
      toast(`${error.error_description || error.message}`);
    } finally {
      setLoading(false);
    }
  };
  const logOutAccount = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast("Đã đăng xuất");
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
        logInAccount,
        logOutAccount
      }}
    >
      {children}
      <ToastContainer />
    </AuthenticatorContext.Provider>
  );
}
