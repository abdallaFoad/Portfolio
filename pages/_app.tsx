import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {ThemeProvider} from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div  className="grid grid-cols-12 gap-6 px-5 md:px-20 lg:px-24 my-14 " >
        <div className="col-span-12 lg:col-span-3 md:col-span-4 bg-white dark:bg-dark-500 rounded-2xl p-2 text-center shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-9 md:col-span-8 overflow-hidden  bg-white rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}
