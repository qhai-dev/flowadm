"use client";

import { FC, PropsWithChildren } from "react";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  // const [position, setPosition] = useState("bottom");

  return (
    <div className="flex min-h-screen justify-center p-6 bg-background">
      <div className="w-full shrink-0 flex flex-col rounded-2xl border bg-foreground">
        <div className="flex w-full items-center justify-between p-6">
          <div>Flowadm</div>
          <div className="flex items-center gap-x-3">
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-56 text-right">
                <div>
                  <Button variant="outline" className="">
                    English (United States)
                  </Button>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>English (United States)</DropdownMenuItem>
                <DropdownMenuItem>简体中文</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* <div className="w-[1px] h-4 mx-0 bg-white"></div> */}

            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">theme</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Bottom
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
        </div>
        <div className="flex w-full grow flex-col items-center justify-center px-6 md:px-[108px]">
          {children}
        </div>
        {/* <div className="w-full flex flex-1 flex-col items-center justify-center px-6 md:px-[108px] bg-red-500">
          <div className="w-full flex h-full flex-col">{children}</div>
        </div> */}
      </div>
    </div>
  );
};

export default Layout;
