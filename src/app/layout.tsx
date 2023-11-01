"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/layout/footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SnackbarProvider } from "notistack";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`${inter.className}`}>
        <Provider store={store}>
          <SnackbarProvider
            maxSnack={2}
            data-testid="toastid"
            autoHideDuration={3000}
            anchorOrigin={{ horizontal: "center", vertical: "top" }}
          >
            <Header />
            <div className="min-h-[calc(100vh-422px)]">{children}</div>
            <Footer />
          </SnackbarProvider>
        </Provider>
      </body>
    </html>
  );
}
