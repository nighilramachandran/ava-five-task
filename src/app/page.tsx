import NewArrivals from "@/sections/arrivals/new-arrivals";
import Hero from "@/sections/hero/hero";
import NewsFeed from "@/sections/news-feed/news-feed";

export default function Home() {
  return (
    <>
      <NewsFeed />
      <div className="container mx-auto p-4 flex flex-col gap-5">
        <Hero />
        <NewArrivals />
      </div>
    </>
  );
}
