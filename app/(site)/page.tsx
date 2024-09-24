import Link from "next/link";
import Image from "next/image";
import { PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          >
            <PanelsTopLeft className="w-6 h-6 mr-3" />
            <span className="font-bold">shadcn/ui sidebar</span>
            <span className="sr-only">shadcn/ui sidebar</span>
          </Link>
        </div>
      </header>
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        
      </main>
    </div>
  );
}