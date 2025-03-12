import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { buttonVariants } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import StickyNote from "@/components/widget/sticky-notes/StickyNote";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto px-4 overflow-x-hidden">
      <div className="flex flex-col space-y-6 pb-8 pt-6 md:mt-6">
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
      </div>
      <div className="flex flex-col space-y-6 py-5">
        <h2 className="text-2xl font-bold mb-1">Me</h2>
        <p className="text-balance">
          I like to build up something with my hands, whether it&apos;s a
          physical object or software. Building fun projects with friends is one
          of my favorite things to do. Besides projects that have a significant
          impact, I also enjoy digital humanities and engaging with interactive
          media.
        </p>
      </div>

      <div className="flex flex-col space-y-6 pb-8 py-5 md:pb-12">
        <h2 className="text-2xl font-bold mb-1">Something I enjoy</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Music</h3>
            <p className="mb-1">
              I like to listen to music from various genres.
            </p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Vae</li>
              <li>Cheer Chen</li>
              <li>Lil Tjay</li>
              <li>Ariana Grande</li>
              <li>Bad Bunny</li>
              <li>Kendrick Lamar</li>

              <a
                href="https://open.spotify.com/user/31n6tbc23rnbndqy5xzdprstme3e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <p>🎶</p>
                <Icons.spotify className="w-4 h-4" />
                <span className="text-sm">@yialan</span>
              </a>
            </ul>
          </div>

          <div className="flex flex-col h-full">
            <h3 className="text-lg font-medium mb-2">Photography</h3>
            <p className="mb-1">
              I like to capture moments even though I always forget
            </p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Equipment: Nikon Z6 II</li>
              <li>Instant Camera: Fujifilm Instax SQ10</li>
              <a
                href="https://www.flickr.com/photos/198729106@N02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <p>📷</p>
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  mi album de fotos
                </span>
              </a>
            </ul>
            <div className="flex-1" />
            <div className="mt-auto w-full">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/3sK8wGT43QFpWrvNQsrQya?utm_source=generator"
                width="100%"
                height="80"
                allowFullScreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Travel</h3>
            <p className="mb-1">
              I like to travel. I like to explore. I like to experience.
            </p>

            <ul className="list-disc list-inside space-y-0.5">
              <li>China</li>
              <li>US: 16/50 states visited</li>
              <li>Singapore</li>
              <p>
                I didn&apos;t travel a lot across the countries, mostly in China
                and U.S.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
