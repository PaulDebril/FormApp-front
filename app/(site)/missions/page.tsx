export default function missions() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
            <h2>Missions</h2>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
          <h1 className="text-4xl font-bold text-center mt-8">In progress ...</h1>
      </main>
    </div>
  );
}