import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Christian Johnson, Software Engineer",
	description: "Christian Johnson's Software Engineering Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
    	<body className={inter.className}>{children}</body>
		</html>
  	);
}
