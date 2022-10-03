import React, { createContext, useState } from "react";
import { supabase } from "./supabaseClient";
// Thiết lập trạng thái cho ứng dụng
export const TutorContext = createContext();
export default function TutorsContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [searchCategory, setSearchCategory] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [hotTutors, setHotTutors] = useState([]);

  const imageconvert = (img) => {
    return `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/searchcategory/${img}`;
  };
  const getSearchCategory = async () => {
    setLoading(true);
    try {
      const user = supabase.auth.user();
      const { data, error } = await supabase.from("searchcategory").select("*");
      // .eq("userId", user?.id) // xet xem userId co cung voi user?id hay khong
      // .eq("done", false)
      // .order("id", { ascending: false });

      if (data) setSearchCategory(data);
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };
  const getTutors = async () => {
    setLoading(true);
    try {
      const user = supabase.auth.user();

      const { data, error } = await supabase
        .from("users")
        .select("*,tutors!inner(*)")
        .eq("isTutor", "true")
        .order("TutorId", { ascending: false, foreignTable: "tutors" });
      if (data) {
        setTutors(data);
        const sorted = [];
        // Sort HotTutors
        Object.keys(data)
          .sort((a, b) => {
            return data[b].tutors[0].likeNumber - data[a].tutors[0].likeNumber;
          })
          .forEach((key) => {
            sorted.push(data[key]);
          });
        setHotTutors(sorted);
      }
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TutorContext.Provider
      value={{
        loading,
        searchCategory,
        getSearchCategory,
        getTutors,
        tutors,
        imageconvert,
        // HotTutors,
        hotTutors,
      }}
    >
      {children}
    </TutorContext.Provider>
  );
}
