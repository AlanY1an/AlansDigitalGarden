"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden sm:flex items-center">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary py-4 px-6 rounded-md hover:bg-accent",
          pathname === "/"
            ? "text-foreground underline"
            : "text-muted-foreground/60 no-underline"
        )}
        rel="noreferrer"
      >
        Home
      </Link>

      <Link
        href="/projects"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary py-4 px-6 rounded-md hover:bg-accent",
          pathname === "/projects"
            ? "text-foreground underline"
            : "text-muted-foreground/60 no-underline"
        )}
        rel="noreferrer"
      >
        Projects
      </Link>
      <Link
        href="/thoughts"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary py-4 px-6 rounded-md hover:bg-accent",
          pathname === "/thoughts"
            ? "text-foreground underline"
            : "text-muted-foreground/60 no-underline"
        )}
        rel="noreferrer"
      >
        Thoughts
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary py-4 px-6 rounded-md hover:bg-accent",
          pathname === "/about"
            ? "text-foreground underline"
            : "text-muted-foreground/60 no-underline"
        )}
        rel="noreferrer"
      >
        About
      </Link>
    </nav>
  );
}
