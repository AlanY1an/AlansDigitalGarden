import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer>
      <div className="mb-6 mt-4 flex flex-col items-center ">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" href={siteConfig.links.email} rel="noreferrer">
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </a>

          <a target="_blank" href={siteConfig.links.twitter} rel="noreferrer">
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="h-6 w-6" />
          </a>

          <a target="_blank" href={siteConfig.links.github} rel="noreferrer">
            <span className="sr-only">Github</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <a href={siteConfig.links.personalSite} target="_blank">
            {siteConfig.author}
          </a>
        </div>
      </div>
    </footer>
  );
}
