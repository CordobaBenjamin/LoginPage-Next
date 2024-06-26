import { Metadata } from "next";
import SecondStep from "./formRoot";
import { Inter } from "next/font/google";
import "../../global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login Account",
  description: "Generated by create next app",
};

const SecondIndexLayout = ({ children }: { children: React.ReactNode }) => {
  return <SecondStep />;
};

export default SecondIndexLayout;
