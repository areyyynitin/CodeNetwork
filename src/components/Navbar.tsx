import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";
import darkImg from "/Projects/netwerkcode/public/DarkImage.png"
import lightImg from "/Projects/netwerkcode/public/LightImage.png"
import Image from 'next/image';


function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <Image src={lightImg} alt="LightLogo" className="block dark:hidden" width={50} height={40} />    
          <Image src={darkImg} alt="DarkLogo" className="hidden dark:block" width={50} height={40} />


        {/* <Image src={images1} alt="CodeNetwork Logo" width={60} height={60} /> */}
          {/* <CodeIcon className="size-8 text-emerald-100" /> */}
          <span className="bg-gradient-to-r from-black via-gray-500 to-black bg-clip-text text-transparent dark:from-white dark:via-gray-300 dark:to-white">
  CodeNetwork
</span>



        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;