import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { getAllTags, sortTagsByCount, sortPosts } from "@/lib/utils";
import { MAX_THOUGHTS_PER_PAGE } from "@/config/site";
import { QueryPagination } from "@/components/query-pagination";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "@/components/tag";

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

interface ThoughtsPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function ThoughtsPage({
  searchParams,
}: ThoughtsPageProps) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / MAX_THOUGHTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    (currentPage - 1) * MAX_THOUGHTS_PER_PAGE,
    currentPage * MAX_THOUGHTS_PER_PAGE
  );

  const tags = getAllTags(sortedPosts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Thoughts
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of thoughts, frozen in time - a place to reflect,
            record, and revisit.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr className="mt-8" />
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          <QueryPagination
            totalPages={totalPages}
            className="justify-end mt-4"
          />
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {sortedTags?.map((tag) => (
                <Tag key={tag} tag={tag} count={tags[tag]} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
