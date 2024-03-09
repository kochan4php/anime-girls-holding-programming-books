import type { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Nunito } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const openGraph: OpenGraph = {
    title: "Anime Girl Holding Programming Book",
    description: "Download your waifu pics that holding programming book",
    url: "https://anime-girl-holding-programming-book.netlify.app",
    siteName: "Anime Girl Holding Programming Book",
    images: [{ url: "/menggoda.jpg", alt: "Alt nya kalo preview gambarnya ga ada hehe" }],
    locale: "en_US",
    type: "website",
};

export const metadata: Metadata = {
    title: "Anime Girl Holding Programming Book",
    description: "Anime girl holding programming book",
    metadataBase: new URL("https://anime-girl-holding-programming-book.netlify.app"),
    openGraph,
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${nunito.className} !overflow-x-hidden bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900 min-h-screen flex flex-col justify-between`}
                suppressHydrationWarning
            >
                <div>
                    <NextTopLoader showSpinner={true} />
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </div>
            </body>
        </html>
    );
}
