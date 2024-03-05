import Head from "next/head";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "./global.css";

const radio = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>isaiah - Personal Portfolio</title>
        <meta name="description" content="isaiah's personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body
          className={`${radio.className} min-h-screen pl-0 pr-0 pt-12 pb-2 mx-10 flex justify-center sm:mx-24`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
