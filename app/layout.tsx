import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume.in",
  description:
    "Create a professional resume easily with this powerful resume builder. No sign up required. Resume.in is the best resume builder for job seekers.",
  keywords:
    "resume, resume builder, resume parser, resume.in, resume.in builder, resume.in parser Sanket Bagad",
  publisher: "Sanket Bagad",
  applicationName: "Resume.in",
  creator: "Sanket Bagad",
  generator: "Resume.in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInUrl="/sign-in"
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
      signUpUrl="/sign-up"
    >
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster position="bottom-right" />
        </body>
      </html>
    </ClerkProvider>
  );
}
