import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {GlobalProvider} from '@/context/GlobalContext'


export const metadata = {
  title: "PropertyApp2 | Find your dream property",
  descriptioin: "Find your dream rental property",
  keywords: "rental, find property, rent an apartment",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
      <html suppressHydrationWarning>
        <body suppressHydrationWarning>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
