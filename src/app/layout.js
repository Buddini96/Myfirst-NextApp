import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export const metadata = {
  title: "Create My Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <div className="wrapper">
          <div className="row">
            <h1>Global Headers</h1>
          </div> */}

          {children}
          {/* <div className="row">
            <h1>Global Footers</h1>
          </div>
        </div> */}
      </body>
    </html>
  );
}
