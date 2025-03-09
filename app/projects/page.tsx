import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
      <div className="container flex flex-col gap-4 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
          🚧 Under Construction
        </h1>
        <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
          I am still building my portfolio. Please check back soon! View my old
          previous portfolio!
        </p>
        <div className="flex flex-col gap-4 justify-center sm:flex-row">
          <Link
            href="https://www.whyian.dev/#projects"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
          >
            View old portfolio
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-fit"
            )}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
