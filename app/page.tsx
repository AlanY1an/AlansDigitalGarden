import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { buttonVariants } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import StickyNote from "@/components/widget/sticky-notes/StickyNote";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto px-4 overflow-x-hidden">
      <section className="flex flex-col space-y-6 pb-8 pt-6 py-5 md:pb-12 md:mt-10">
        <div className="flex flex-col sm:flex-row gap-4 text-center">
          <Avatar className="h-25 w-25 rounded-sm order-last sm:order-first">
            <AvatarImage src="/profile.jpg" alt={siteConfig.author} />
            <AvatarFallback>Alan</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left py-1 order-first sm:order-last">
            <h1 className="text-4xl font-black text-balance tracking-wider">
              Hola, I&apos;m Alan
            </h1>
            <p className="text-muted-foreground sm:text-xl text-balance mt-auto tracking-wide">
              📝 I throw my thoughts here.
            </p>
            <p className="sm:text-xl text-balance">📍 Boston, MA</p>
          </div>
        </div>
        <div className="mt-15 flex flex-wrap gap-4 justify-center">
          <Link href="/projects">
            <StickyNote color="noteYellow" title="Past">
              <p>BS in Math @ UT Austin</p>
              <p>BS in Math&CS @ Baylor University</p>
            </StickyNote>
          </Link>
          <Link href="/projects">
            <StickyNote color="noteBlue" title="Now">
              <p>MS in Software Engineering @ NEU</p>
            </StickyNote>
          </Link>
          <Link href="/projects">
            <StickyNote color="notePink" title="Future">
              <p>﹏✍🏻</p>
            </StickyNote>
          </Link>
        </div>
      </section>

      <div className="flex flex-col gap-4 justify-center sm:flex-row"></div>
    </div>
  );
}
