import { Outfit, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "500", "600", "700"],
});
