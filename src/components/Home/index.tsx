import { BookCard, Carousel, Genre } from '@/components';
import { Book, Category } from '@/interface';
import { getBooks, getCategories } from '@/utils/api';

import BigSale from './BigSale';
import CustomerReviews from './CustomerReviews';
import EnglishBooks from './EnglishBooks';
import HeroSection from './HeroSection';
import IslamicBooks from './IslamicBooks';
import MustReadBooks from './MustReadBooks';
import PopularAuthors from './PopularAuthors';
import PopularCategoriesBn from './PopularCategoriesBn';
import PopularCategoriesEn from './PopularCategoriesEn';
import PopularPublisher from './PopularPublisher';
import SebaBooks from './SebaBooks';
import TranslatedBooks from './TranslatedBooks';

const Home = async () => {
  const categories: Category[] = await getCategories("");
  const featuredBooks: Book[] = await getBooks(
    "is_featured=true&in_stock=true"
  );
  const recentlyAddedBooks: Book[] = await getBooks(
    "order_by=-created_at&in_stock=true"
  );
  const bigSaleBooks: Book[] = await getBooks("is_big_sale=true&in_stock=true");

  return (
    <div className="min-h-screen">
      <HeroSection categories={categories} />

      <div className="md:hidden">
        <Genre categories={categories} />
      </div>

      {/* Featured Books */}
      <Carousel title="Featured Books" href="/books?is_featured=true">
        {featuredBooks.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* Recently Added Books */}
      <Carousel title="Recently Added Books" href="/books?order_by=-created_at">
        {recentlyAddedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      <BigSale books={bigSaleBooks} />

      {/* <ServiceBanner /> */}

      <MustReadBooks />

      <IslamicBooks />

      <EnglishBooks />

      {/* কোলকাতার বই */}
      {/* <Carousel title="কোলকাতার বই">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel> */}

      {/* কবিতা কালেকশন */}
      {/* <Carousel title="কবিতা কালেকশন">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel> */}

      <TranslatedBooks />

      {/* ভৌতিক ও থ্রিলার */}
      {/* <Carousel title="ভৌতিক ও থ্রিলার">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel> */}

      {/* গল্প ও উপন্যাস */}
      {/* <Carousel title="গল্প ও উপন্যাস">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel> */}

      {/* রাজনীতি, দর্শন, জীবনী ও আত্মজীবনী */}
      {/* <Carousel title="রাজনীতি, দর্শন, জীবনী ও আত্মজীবনী">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel> */}

      {/* আত্ম-উন্নয়ন */}
      {/* <Carousel title="আত্ম-উন্নয়ন">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel> */}

      <SebaBooks />

      {/* পাঞ্জেরী ও ফ্রেন্ডস প্রকাশনীর বই */}
      {/* <Carousel title="পাঞ্জেরী ও ফ্রেন্ডস প্রকাশনীর বই">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel> */}

      {/* চাকরির বই */}
      {/* <Carousel title="চাকরির বই">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel> */}

      {/* <Carousel title="ইসলামিক ক্যাটাগরি">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel> */}

      <PopularCategoriesEn />

      <PopularCategoriesBn />

      <PopularAuthors />

      <PopularPublisher />

      {/* <Carousel title="সেবা প্রকাশনীর ক্যাটাগরি">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel> */}

      {/* 
      <Carousel title="চাকরির ক্যাটাগরি">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel> */}

      <CustomerReviews />
    </div>
  );
};

export default Home;
