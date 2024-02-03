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
      <BookCarousel title="Recently Added Books" />
      <ServiceBanner />
      <BookCarousel title="মাস্ট রিড কালেকশন" />
      <BookCarousel title="ইসলামিক কালেকশন" />
      <BookCarousel title="ইংরেজি ভাষার বিদেশি বই" />
      <BookCarousel title="কোলকাতার বই" />
      <BookCarousel title="কবিতা কালেকশন" />
      <BookCarousel title="অনুবাদ কালেকশন" />
      <FlashSaleCarousel title="Big Sale!" />
      <BookCarousel title="ভৌতিক ও থ্রিলার" />
      <BookCarousel title="গল্প ও উপন্যাস" />
      <BookCarousel title="রাজনীতি, দর্শন, জীবনী ও আত্মজীবনী" />
      <BookCarousel title="আত্ম-উন্নয়ন" />
      <BookCarousel title="সেবা প্রকাশনীর বই" />
      <BookCarousel title="পাঞ্জেরী ও ফ্রেন্ডস প্রকাশনীর বই" />
      <BookCarousel title="চাকরির বই" />

      <CategoryCarousel title="জনপ্রিয় ইসলামিক ক্যাটাগরি" />
      <CategoryCarousel title="জনপ্রিয় ইংরেজি ক্যাটাগরি" />
      <CategoryCarousel title="জনপ্রিয় বাংলা ক্যাটাগরি" />
      <AuthorCarousel title="জনপ্রিয় লেখক" />
      <CategoryCarousel title="জনপ্রিয় প্রকাশনী" />
      <CategoryCarousel title="সেবা প্রকাশনীর ক্যাটাগরি" />
      <CategoryCarousel title="চাকরির ক্যাটাগরি" />
      <ReviewCarousel />
    </div>
  );
};

export default Home;
