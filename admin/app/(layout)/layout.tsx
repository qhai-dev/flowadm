import { FC, PropsWithChildren } from "react";
import Header from "@/app/components/header/index";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col text-black">
      <Header />
      <main className="flex-1 min-w-0 bg-red-500">{children}</main>
    </div>
  );
};

export default Layout;
