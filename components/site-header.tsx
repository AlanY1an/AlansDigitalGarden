import Link from "next/link";
import { siteConfig } from "@/config/site";
import MainNav from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl">🥥</span>
          <span className="font-bold"> {siteConfig.name}</span>
        </Link>
        <div className="flex-1" />
        <ModeToggle />
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
