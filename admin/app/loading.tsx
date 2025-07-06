import Image from "next/image";

import text from "@/assets/text.svg";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Image src={text} alt="loading" />
    </div>
  );
}
