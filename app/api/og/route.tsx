import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  try {
    const fontBold = await interBold;
    const { searchParams } = request.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("Missing title", { status: 400 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
          <div tw="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
            <p tw="ml-2 font-bold text-2xl">Alan&apos;s blog</p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              BLOG POST
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">{siteConfig.url}</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">{siteConfig.links.github}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
          },
        ],
      }
    );
  } catch (error) {
    console.error("[OG Image]", error);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
