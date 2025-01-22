import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-2xl font-bold sm:text-left font-[family-name:var(--font-geist-mono)]">
            Email Forms in next.js
          </h1>
          <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Either stay here, go to the email form or read the about page 😊
          </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link 
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="/emailform"
            > 
            <Image
                  aria-hidden
                  src="/email.svg"
                  alt="Email icon"
                  width={16}
                  height={16}
                  />
            email form
        </Link> 
        <Link 
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="/about"
            > 
            about
          </Link> 
        </div>
        </div>
      </main>
    </div>
  );
}