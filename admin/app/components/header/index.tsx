import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="w-full min-h-[60px] relative">
      <header className="w-full h-[60px] flex items-center border-b border-[#10182814] box-border sticky left-0 right-0 top-0">
        <div className="flex-1">左侧区域</div>
        <div>中间区域</div>
        <div className="flex-1">右边区域</div>
      </header>
    </div>
  );
};

export default Header;
