import {
  AuthorCarousel,
  BookCarousel,
  CategoryCarousel,
  FlashSaleCarousel,
  HeroSection,
  ReviewCarousel,
  ServiceBanner,
} from "@/components";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BookCarousel title="Featured Books" />
      <CategoryCarousel title="Popular Categories" />
      <BookCarousel title="Recently Added Books" />
      <AuthorCarousel title="জনপ্রিয় লেখক" />
      <FlashSaleCarousel title="Big Sale!" />
      <BookCarousel title="ভারতীয় বাংলা বই" />
      <CategoryCarousel title="Related Categories" />
      <BookCarousel title="সেবা প্রকাশনীর বই" />
      <ServiceBanner />
      <AuthorCarousel title="Most Visited Authors" />
      <ReviewCarousel />
    </div>
  );
};

export default Home;
