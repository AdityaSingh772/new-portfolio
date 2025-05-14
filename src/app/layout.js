import { Inter } from "next/font/google";
import styles from  "./globals.css";
import Header from "./components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aditya Singh",
  description: "Aditya Singh, backend developer focused on scalable microservices and seamless Web3 integration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
        <Header></Header>
        {children}
        </div>
      </body>
    </html>
  );
}
