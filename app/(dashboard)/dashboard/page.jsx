import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import CommunitiesCards from "./components/CommunitiesCards";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/libs/session";
import { Kreon } from "next/font/google";
import dynamic from "next/dynamic";

// Local quotes array to replace problematic inspirational-quotes package
const quotes = [
  "The only people who never fail are those who never try.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Everything you have ever wanted is on the other side of fear.",
  "Do something today that your future self will thank you for.",
];

const PostCarousel = dynamic(() => import("./components/PostCarousel"));
const kreon = Kreon({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-kreon",
});
import Image from "next/image";
import { Suspense } from "react";
import Loader from "./loading";
export const metadata = {
  title: "Dashboard",
};

export default async function PostsPage() {
  const qoute = quotes[Math.floor(Math.random() * quotes.length)];
  const user = await getCurrentUser();
  const posts = await prisma.post.findMany({
    include: {
      votes: true,
      comments: true,
      author: true,
      community: true,
    },
    take: 6,
  });

  const communities = await prisma.community.findMany({
    include: {
      creator: true,
      subscribers: true,
    },
    take: 3,
  });

  return (
    <div>
      <div className=" flex items-center justify-center lg:justify-between h-64 text-white bg-[linear-gradient(90deg,#9e6370_0%,#bf7b85_52.60%,#fae1dc_84.38%,#feece3_100%)]">
        {qoute && (
          <p
            className={`p-10 ${kreon.className} hidden w-1/2 lg:block font-bold text-2xl`}>
            "{qoute}"
          </p>
        )}
        <Image
          height={500}
          width={500}
          src="/images/Banner_dash_3.svg"
          alt="banner"
          className="block max-w-xl object-cover"></Image>
      </div>

      <DashboardShell>
        <div className=" md:w-[76vw]">
          <DashboardHeader
            heading="Your feed"
            text="See the latest posts from communities"
          />
          <Suspense fallback={<Loader />}>
            <PostCarousel posts={posts} user={user}></PostCarousel>
          </Suspense>
        </div>
        <div className="hidden md:block">
          <DashboardHeader
            heading="Recommended Communities"
            className="pb-10"
          />
          <Suspense fallback={<Loader />}>
            <CommunitiesCards communities={communities} />
          </Suspense>
        </div>
      </DashboardShell>
    </div>
  );
}
