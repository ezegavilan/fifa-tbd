import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import styles from "~/styles/style.css";
import tailwind from "~/styles/tailwind.css";

export const meta = () => ({
    charset: "utf-8",
    title: "FIFA TBD | WIP",
    viewport: "width=device-width,initial-scale=1",
});

export const links = () => {
    return [
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com"
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Archivo&family=Archivo+Black&display=swap"
        },
        {
            rel: "stylesheet",
            href: styles
        },
        {
            rel: "stylesheet",
            href: tailwind
        }
    ];
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
            <Outlet/>
            <ScrollRestoration/>
            <Scripts/>
            <LiveReload/>
            <script src="https://kit.fontawesome.com/ddde1f044a.js" crossOrigin="anonymous"></script>
        </body>
        </html>
    );
}
