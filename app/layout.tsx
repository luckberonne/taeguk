import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
  }: {
	children: React.ReactNode;
  }) {
	return (
	  <html lang="es" suppressHydrationWarning>
		<head />
		<body className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
		  <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
			<div className="relative flex flex-col h-screen">
			  <Navbar />
			  <main className="container mx-auto min-w-full flex-grow">
				{children}
			  </main>
			  <footer className="w-full flex items-center justify-center py-3">
				<a href="https://lucas-beronne.vercel.app/" className="text-primary">
				  <span className="text-default-600">Powered by </span>
				  <span className="text-primary">Lucas Beronne</span>
				</a>
			  </footer>
			</div>
		  </Providers>
		</body>
	  </html>
	);
  }
  