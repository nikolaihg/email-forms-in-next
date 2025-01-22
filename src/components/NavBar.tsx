// components/NavBar.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="flex gap-6 flex-wrap items-center justify-center p-10">
          <Link 
                className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
                href="/"
            > 
            <Image
                aria-hidden
                src="/home.svg"
                alt="Home icon"
                width={16}
                height={16}
              />
            home
          </Link> 
          <Link 
                className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
                href="/emailform"
            > 
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
            go to email form
          </Link>  
          <Link 
                className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
                href="/about"
            > 
            <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
            about
          </Link>  
    </nav>
  );
};

export default NavBar;
