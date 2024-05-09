import { EduorProvider } from "@/context/EduorContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "@/public/css/style.css";
import { ToastContainer } from "react-toastify";

import { Readex_Pro } from "next/font/google";

const readExPro = Readex_Pro({style:"normal",display:"auto",weight:"variable",subsets:["latin"],variable:"--headingFont"});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <EduorProvider>
        <body className={readExPro.className+" "+readExPro.variable}>
          {children}
          <ToastContainer />
        </body>
      </EduorProvider>
    </html>
  );
}
