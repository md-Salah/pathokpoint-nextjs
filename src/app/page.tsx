import {
    AuthorCard, BigSale, BookCard, Carousel, CategoryCard, Genre, HeroSection, PublisherCard,
    ReviewCard
} from '@/components';
import { reviews } from '@/constants';
import { Author, Book, Category, Publisher } from '@/interface';
import { getAuthors, getBooks, getCategories, getPublishers } from '@/utils/api';

const Home = async () => {
  const authors: Author[] = await getAuthors("");
  const categories: Category[] = await getCategories("");
  const publishers: Publisher[] = await getPublishers("");

  const featuredBooks: Book[] = await getBooks("is_featured=true&in_stock=true");
  const recentlyAddedBooks: Book[] = await getBooks("order_by=-created_at&in_stock=true");
  const mustReadBooks: Book[] = await getBooks("is_must_read=true&in_stock=true");
  const islamicBooks: Book[] = await getBooks("is_islamic=true&in_stock=true");
  const englishBooks: Book[] = await getBooks("language=english&in_stock=true");
  const translatedBooks: Book[] = await getBooks("is_translated=true&in_stock=true");
  const sebaBooks: Book[] = await getBooks("publisher__name__in=সেবা প্রকাশনী&in_stock=true");
  const bigSaleBooks: Book[] = await getBooks("is_big_sale=true&in_stock=true");

  return (
    <div className="min-h-screen">
      <HeroSection categories={categories} />

      <div className="md:hidden">
        <Genre categories={categories} />
      </div>

      <BigSale books={bigSaleBooks} />

      {/* Featured Books */}
      <Carousel title="Featured Books" href="/books?is_featured=true">
        {featuredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* Recently Added Books */}
      <Carousel title="Recently Added Books" href="/books?order_by=-created_at">
        {recentlyAddedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* <ServiceBanner /> */}

      {/* মাস্ট রিড কালেকশন */}
      <Carousel title="মাস্ট রিড কালেকশন" href="/books?is_must_read=true">
        {mustReadBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* ইসলামিক কালেকশন */}
      <Carousel title="ইসলামিক কালেকশন" href="/books?is_islamic=true">
        {islamicBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* ইংরেজি ভাষার বিদেশি বই */}
      <Carousel title="ইংরেজি ভাষার বিদেশি বই" href="/books?language=english">
        {englishBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

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

      {/* অনুবাদ কালেকশন */}
      <Carousel title="অনুবাদ কালেকশন" href="/books?is_translated=true">
        {translatedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

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

      {/* সেবা প্রকাশনীর বই */}
      <Carousel
        title="সেবা প্রকাশনীর বই"
        href="/books?publisher__name__in=সেবা প্রকাশনী"
      >
        {sebaBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

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

      <Carousel title="জনপ্রিয় ইংরেজি ক্যাটাগরি" href="/categories">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel>

      <Carousel title="জনপ্রিয় বাংলা ক্যাটাগরি" href="/categories">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel>

      <Carousel title="জনপ্রিয় লেখক" href="/authors">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </Carousel>

      <Carousel title="জনপ্রিয় প্রকাশনী" href="/publishers">
        {publishers.map((publisher) => (
          <PublisherCard key={publisher.id} publisher={publisher} />
        ))}
      </Carousel>

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

      <Carousel title="Customer Reviews">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
