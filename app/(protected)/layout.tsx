import Sidebar from "@/components/mainLayout/sidebar";
import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-row items-center justify-center  ">
      {/* <Navbar /> */}
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default ProtectedLayout;
