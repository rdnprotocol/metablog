"use client";

import { Navbar } from "@/components/Navbar";
import { Landing } from "@/components/Landing";
import Image from "next/image";
import { useEffect, useState } from "react";

// Article ruu huselt ilgeeh func
export const getArticles = async () => {
  //Get huselt fetch ashiglan awch bna
  const res = await fetch("https://dev.to/api/articles");
  //res deer irsen object array aa json bolgoh
  const articles = await res.json();

  return articles;
};

export default function Home() {
  //
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const data = await getArticles();
    setArticles(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Landing articles={articles} />
    </>
  );
}
