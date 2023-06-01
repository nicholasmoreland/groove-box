"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { NavBar } from "./components/navbar/navbar";
import { auth } from "./lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const { theme } = useTheme();
  const [user] = useAuthState(auth);

  return (
    <div className={theme === "dark" ? "dark" : undefined}>
      <main className="bg-white dark:bg-gray-900 min-h-screen">
        <NavBar />
      </main>
    </div>
  );
}
