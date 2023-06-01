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

        {user?.emailVerified ? undefined : (
          <div className="mt-4 mx-4">
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative lg:mx-16">
              <strong className="font-bold">Alert! </strong>
              <span className="block sm:inline">
                Check email to verify your account. Features will be limited
                until you verify your account.
              </span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
