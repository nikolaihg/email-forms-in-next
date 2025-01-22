export default function Page() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-center text-2xl font-bold sm:text-left font-[family-name:var(--font-geist-mono)]">
                About
              </h1>
              <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                This project is to learn the basics of next.js, tailwind.css and nodemailer. 🤓
              </p>
            </div>
          </main>
      </div>
  );
}