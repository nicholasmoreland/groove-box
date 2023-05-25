"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import { NavBar } from "./components/navbar/navbar";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={theme == "dark" ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900">
        <NavBar />

        <section className="min-h-screen"></section>
      </main>
    </div>
  );
}
