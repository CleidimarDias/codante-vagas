// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Codante Vagas",
//   description: "O Codante vagas conecta candidatos a empregos reais.",
// };

export default function JobLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" w-full border-t bg-gray-50">
            <div className="mx-auto max-w-5xl py-10">
                {children}
            </div>
        </div>
    );
}
