import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import AppleIcon from "../public/apple-touch-icon.png";
import Icon32 from "../public/favicon-32x32.png";
import Icon16 from "../public/favicon-16x16.png";
import Manifest from "../public/site.webmanifest";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import mainCssUrl from "./styles/main.css";
import colors from "tailwindcss/colors";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: mainCssUrl },
    {
      rel: "icon",
      sizes: "180x180",
      href: AppleIcon,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: Icon32,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: Icon16,
    },
    { rel: "manifest", href: Manifest },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "האיש",
  viewport: "width=device-width,initial-scale=1",
  "theme-color": "#ffffeb",
});

export default function App() {
  return (
    <html lang="en" className="bg-beige">
      <head title="Ha Ish">
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
