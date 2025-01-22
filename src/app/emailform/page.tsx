export default function Page() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-center text-2xl font-bold sm:text-left font-[family-name:var(--font-geist-mono)]">
                  Email form
                </h1>
                <p className="text-center text-base sm:text-left font-[family-name:var(--font-geist-mono)]">
                  Contact us here:
                </p>
              </div>
            </main>
        </div>
    );
  }