import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloatingButton from "../WhatsAppFloatingButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Layout;
