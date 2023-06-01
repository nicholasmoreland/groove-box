"use client";

import { useTheme } from "next-themes";
import { NavBar } from "../components/navbar/navbar";
import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const { theme } = useTheme();
  const [user] = useAuthState(auth);

  return (
    <div className={theme == "dark" ? "dark" : ""}>
      <main className="bg-white dark:bg-gray-900">
        <NavBar />

        <section className="min-h-screen min-w-full">
          <div className="flex flex-row space-x-6 items-center justify-center pt-20">
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              Badge
            </span>
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              Badge
            </span>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
              Badge
            </span>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Badge
            </span>
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Badge
            </span>
            <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
              Badge
            </span>
            <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
              Badge
            </span>
            <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
              Badge
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
