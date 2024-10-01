import { Genre } from '@/components';
import { Category } from '@/interface';
import { getCategories } from '@/utils/api';

import BigSale from './BigSale';
import CustomerReviews from './CustomerReviews';
import EnglishBooks from './EnglishBooks';
import FeaturedBooks from './FeaturedBooks';
import HeroSection from './HeroSection';
import IslamicBooks from './IslamicBooks';
import IslamicCategories from './IslamicCategories';
import MustReadBooks from './MustReadBooks';
import PopularAuthors from './PopularAuthors';
import PopularCategoriesBn from './PopularCategoriesBn';
import PopularCategoriesEn from './PopularCategoriesEn';
import PopularPublisher from './PopularPublisher';
import RecentlyAddedBooks from './RecentlyAddedBooks';
import SebaBooks from './SebaBooks';
import TranslatedBooks from './TranslatedBooks';

const Home = async () => {
  const categories: Category[] = await getCategories("is_in_menu=true");

  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="md:hidden">
        <Genre categories={categories} />
      </div>
      <FeaturedBooks />
      <RecentlyAddedBooks />
      {/* <BigSale /> */}
      {/* <ServiceBanner /> */}
      <MustReadBooks />
      <IslamicBooks />
      <IslamicCategories />
      <EnglishBooks />
      <PopularCategoriesEn />
      {/* কোলকাতার বই */}
      {/* কবিতা কালেকশন */}
      <TranslatedBooks />
      <PopularCategoriesBn />
      {/* ভৌতিক ও থ্রিলার */}
      {/* গল্প ও উপন্যাস */}
      {/* রাজনীতি, দর্শন, জীবনী ও আত্মজীবনী */}
      {/* আত্ম-উন্নয়ন */}
      <SebaBooks />
      {/* পাঞ্জেরী ও ফ্রেন্ডস প্রকাশনীর বই */}
      {/* চাকরির বই */}
      <PopularAuthors />
      <PopularPublisher />
      {/* সেবা প্রকাশনীর ক্যাটাগরি */}
      {/* চাকরির ক্যাটাগরি */}
      <CustomerReviews />
    </div>
  );
};

export default Home;
