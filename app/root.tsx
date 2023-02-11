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
import MetaCard from "../public/meta.png";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import mainCssUrl from "./styles/main.css";
import { Header } from "~/components/header";

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
  "theme-color": "#ffffeb",
  title: "האיש שאוהב את ארצו",
  description: "בלוג של ישראלי שאוהב את ארץ ומנסה לשפר אותה",
  "og:title": "האיש שאוהב את ארצו",
  "og:description": "בלוג של ישראלי שאוהב את ארץ ומנסה לשפר אותה",
  "og:image": MetaCard,
  "twitter:card": "summary_large_image",
  "twitter:title": "האיש שאוהב את ארצו",
  "twitter:description": "בלוג של ישראלי שאוהב את ארץ ומנסה לשפר אותה",
  "twitter:image": MetaCard,
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="he" className="bg-beige">
      <head title="האיש שאוהב את ארצו">
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
