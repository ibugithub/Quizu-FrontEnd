import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "@/components/Navbar/navbar";
import StoreProvider from "./StoreProvider";
import { Footer } from "@/components/Footer/footer";
export const metadata: Metadata = {
  title: "quizu",
  description: "Created for the challenges lover",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Navbar />
          <ToastContainer />
          <div className="mt-[72px] ">{children}</div>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
