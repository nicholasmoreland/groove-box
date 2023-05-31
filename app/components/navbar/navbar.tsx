"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsSun } from "react-icons/bs";
import { IoReorderThreeOutline, IoCloseOutline } from "react-icons/io5";

import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      await signOut(auth);

      console.log("User signed out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={
        (theme == "dark" ? "dark" : "") +
        "max-w-8xl mx-auto sticky top-0 w-full backdrop-blur flex-none py-2 border-b border-slate-900/10 px-2 lg:border-0 lg:mx-0 transition-colors duration-500 z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
      }
    >
      <div className="flex items-center">
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-2"
        >
          <Link
            href="/"
            className="relative flex items-center py-1 px-1 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900"
          >
            <div className="flex flex-col px-2 text-sm leading-6 font-medium text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900">
              <h1>{user ? user.displayName : "Home"}</h1>
            </div>
          </Link>
        </motion.div>

        <div className="ml-auto">
          <div className="block lg:hidden relative items-center mr-2 ">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="font-medium px-2 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
              {isOpen ? (
                <IoCloseOutline className="fill-current h-6 w-6" />
              ) : (
                <IoReorderThreeOutline className="fill-current h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 rounded-lg shadow-xl p-2 w-48 lg:flex items-center sm:mr-2 backdrop-blur border-slate-900/10 transition-colors duration-500 bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
            <ul className="flex flex-col">
              <motion.li whileTap={{ scale: 0.95 }}>
                <Link href="/signup">
                  <p className="font-medium px-3 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900">
                    Sign up
                  </p>
                </Link>
              </motion.li>
              <motion.li whileTap={{ scale: 0.95 }}>
                <Link href="/signin">
                  <p className="font-medium px-3 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900">
                    Sign in
                  </p>
                </Link>
              </motion.li>
              <motion.li
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  theme == "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                <p className="font-medium px-3 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900">
                  Toggle
                </p>
              </motion.li>
            </ul>
          </div>
        )}

        <div className="relative hidden lg:flex items-center ml-auto">
          <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
            <ul className="flex">
              {user ? (
                <motion.li whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/"
                    onClick={handleSignOut}
                    className="font-medium px-3 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900"
                  >
                    Sign out
                  </Link>
                </motion.li>
              ) : (
                <>
                  <motion.li whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/signup"
                      className="font-medium px-3 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900"
                    >
                      Sign up
                    </Link>
                  </motion.li>
                  <motion.li whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/signin"
                      className="font-medium px-3 py-2 rounded-lg text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900"
                    >
                      Sign in
                    </Link>
                  </motion.li>
                </>
              )}
            </ul>
          </nav>

          <div className="flex items-center border-l border-slate-200 ml-2 px-4 py-1 dark:border-slate-800">
            {theme == "dark" ? (
              <BsSun
                onClick={() =>
                  theme == "dark" ? setTheme("light") : setTheme("dark")
                }
                className="cursor-pointer text-xl block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              />
            ) : (
              <BsSunFill
                onClick={() =>
                  theme == "dark" ? setTheme("light") : setTheme("dark")
                }
                className="cursor-pointer text-xl block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
