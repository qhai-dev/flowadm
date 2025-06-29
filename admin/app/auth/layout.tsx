'use client'

import {ReactNode, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    const [position, setPosition] = useState("bottom")
    return (
        <div className="w-full min-h-screen flex justify-center p-6 box-border bg-background">
            <div className="w-full flex shrink-0 flex-col rounded-2xl border bg-foreground">
                <header className="w-full flex items-center justify-between p-6 text-white">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="22" viewBox="0 0 48 22" fill="none">
                            <g id="White=False">
                                <g id="adm">
                                    <path d="M21.2002 3.73454C22.5633 3.73454 23.0666 2.89917 23.0666 1.86812C23.0666 0.837081 22.5623 0.00170898 21.2002 0.00170898C19.838 0.00170898 19.3337 0.837081 19.3337 1.86812C19.3337 2.89917 19.838 3.73454 21.2002 3.73454Z" fill="#0033FF"/>
                                    <path d="M27.7336 4.13435V5.33473H24.6668V8.00171H27.7336V14.6687H22.6668V5.33567H15.9998V8.00265H19.7336V14.6696H15.3337V17.3366H35.3337V14.6696H30.6668V8.00265H35.3337V5.33567H30.6668V2.66869H35.3337V0.00170898H31.8671C29.5877 0.00170898 27.7336 1.8559 27.7336 4.13529V4.13435Z" fill="#0033FF"/>
                                </g>
                                <g id="Flow">
                                    <path d="M5.66698 0.000940576H0V17.334H5.66698C12.667 17.334 14.667 13.334 14.667 8.66698C14.667 4 12.667 0 5.66698 0V0.000940576ZM5.73377 14.6679H3.20038V2.66792H5.73377C9.75823 2.66792 11.4666 4.64346 11.4666 8.66792C11.4666 12.6924 9.75823 14.6679 5.73377 14.6679Z" fill="black"/>
                                    <path d="M44.8335 5.3349L42.1665 14.0019L39.4995 5.3349H36.333L40.2013 16.5466C40.604 17.714 39.9229 18.6679 38.6886 18.6679H37.333V21.3349H39.3255C41.063 21.3349 42.6265 20.2361 43.2145 18.6011L48 5.3349H44.8335Z" fill="black"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="w-56 text-right">
                                <div>
                                    <Button variant="outline" className="">English (United States)</Button>
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-56">
                                <DropdownMenuItem>
                                    {/*en-US*/}
                                    English (United States)
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    {/* zh-Hans */}
                                    简体中文
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <div className="w-[1px] h-4 mx-0 bg-white"></div>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">theme</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>
                <main className="w-full flex grow flex-col items-center justify-center px-6 md:px-[108px]">
                    {children}
                </main>
            </div>
        </div>
    );
}
