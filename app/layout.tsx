import Head from "next/head";
import { Montserrat } from "next/font/google";
import "./global.css";

const radio = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>isaiah - Personal Portfolio</title>
        <meta name="description" content="isaiah's personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${radio.className} min-h-screen pl-0 pr-0 pt-12 pb-2 mx-10 flex justify-center sm:mx-24`}
      >
        {children}
      </body>
    </>
  );
}
