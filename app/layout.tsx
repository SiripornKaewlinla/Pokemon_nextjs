import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <h1>CIS</h1>
          <Link href="/">Home</Link>{" - "}
          <Link href="/student">Student</Link>{" - "}
          <Link href="/pokemon">Pokemon</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
