import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "První stránka s NEXT JS",
  description: "Generated by create next app",
};

//everything inside this layout is on EVERY page because it is a layout parent of every website
//for every page you can have different layout but this is the main
//
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

//in default all components in App folder are react sever side components, because it is faster
//if you want to change it to client side coomponent you need to add to the top of your page "use client"
//if you use hooks you need to have client side component with "use client"
//any of the react hooks need to be client side component useEffect, useState,

//server component runs on server, client component runs in the users browser
//the html renders on the server and then send to the client -> improve in performance
//it is safe, rendered only on server

//client components - used for browser interactivity
//server-side pre-rendering with client components thats why we can see message if we use client side component in the server
//but than they are rendering on the browser
//https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
