import "./styles/globals.scss";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { type ReactNode } from "react";

import { Providers } from "./providers";
import Container from "./components/Container";

const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Wagmi",
  description: "Generated by create-wagmi",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={spartan.className}>
        <Providers>
          <Container>{props.children}</Container>
        </Providers>
      </body>
    </html>
  );
}
