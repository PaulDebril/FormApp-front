import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[10] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="ml-10 container h-14 flex items-center">
          <h2>Accueil</h2>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <h1 className="text-4xl font-bold text-center mt-8">Welcome to your new app</h1>
      </main>
    </div>
  );
}