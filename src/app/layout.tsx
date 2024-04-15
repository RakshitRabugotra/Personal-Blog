import "./globals.css";
import "./fonts.css";

// Internal Dependencies
import Navbar from "@/components/Navbar";

// Content Dependencies
import {
  TITLE as title,
  DESCRIPTION as description,
  DEFAULT_URL as defaultUrl,
} from "@constants";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title,
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-zinc-200 font-montserrat">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
