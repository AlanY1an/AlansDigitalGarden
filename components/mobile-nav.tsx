"use client";

import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 h-10 px-2 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="block p-6">
        <MobileLink
          href="/"
          onOpenChange={setIsOpen}
          className="flex items-center space-x-2"
        >
          <span className="text-2xl">🥥</span>
          <span className="font-bold"> {siteConfig.name}</span>
        </MobileLink>
        <nav className="flex flex-col gap-3 mt-3">
          <MobileLink
            href="/"
            onOpenChange={setIsOpen}
            className="flex items-center"
          >
            Home
          </MobileLink>
          <MobileLink href="/projects" onOpenChange={setIsOpen}>
            Projects
          </MobileLink>
          <MobileLink href="/thoughts" onOpenChange={setIsOpen}>
            Thoughts
          </MobileLink>
          <MobileLink href="/about" onOpenChange={setIsOpen}>
            About
          </MobileLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

// Define a new type for the props of the MobileLink component
interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

// Define the MobileLink component
function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
