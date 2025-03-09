import { posts } from "#site/content";
import { Tag } from "@/components/tag";
import { getAllTags } from "@/lib/utils";
import { sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tags",
  description: "Topic I've written",
};

export default async function TagsPage() {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Tags</h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <ul className="flex flex-row gap-2">
            {sortedTags?.map((tag) => (
              <Tag key={tag} tag={tag} count={tags[tag]} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
