import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Anime Girl Holding Programming Book",
    description: "Anime girl holding programming book",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={nunito.className}>{children}</body>
        </html>
    );
}
