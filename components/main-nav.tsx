"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden sm:flex items-center underline-offset-3">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary py-4 px-6 rounded-md hover:underline hover:decoration-wavy",
          pathname === "/" ? "underline decoration-wavy" : "no-underline"
        )}
        rel="noreferrer"
      >
        Home
      </Link>

      <Link
        href="/projects"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary py-4 px-6 rounded-md hover:underline hover:decoration-wavy",
          pathname === "/projects"
            ? "underline decoration-wavy"
            : "no-underline"
        )}
        rel="noreferrer"
      >
        Projects
      </Link>
      <Link
        href="/thoughts"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary py-4 px-6 rounded-md hover:underline hover:decoration-wavy",
          pathname === "/thoughts"
            ? "underline decoration-wavy"
            : "no-underline"
        )}
        rel="noreferrer"
      >
        Thoughts
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary py-4 px-6 rounded-md hover:underline hover:decoration-wavy",
          pathname === "/about" ? "underline decoration-wavy" : "no-underline"
        )}
        rel="noreferrer"
      >
        About
      </Link>
    </nav>
  );
}
