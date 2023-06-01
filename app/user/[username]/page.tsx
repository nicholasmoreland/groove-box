"use client";

import { useTheme } from "next-themes";
import { usePathname, useSearchParams } from "next/navigation";
import { NavBar } from "../../components/navbar/navbar";

export default function Users() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const user = pathname.split("/")[2];

  console.log(pathname);
  console.log(user);

  return (
    <div className={theme === "dark" ? "dark" : undefined}>
      <main className="bg-white dark:bg-gray-900 min-h-screen">
        <NavBar />

        <h1>User: {user}</h1>
      </main>
    </div>
  );
}
