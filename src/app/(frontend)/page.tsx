import {
  AuthorCard,
  BookCard,
  Carousel,
  CategoryCard,
  BigSale,
  HeroSection,
  PublisherCard,
  ReviewCard,
  Genre,
} from "@/components";

import { books, publishers, reviews } from "@/constants";

const Home = () => {
  const authors = books.map((book) => book.authors[0]);
  const categories = books.map((book) => book.categories[0]);

  return (
    <div className="min-h-screen">
      <HeroSection />

      <Genre />

      <BigSale />

      {/* Featured Books */}
      <Carousel title="Featured Books">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* Recently Added Books */}
      <Carousel title="Recently Added Books">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* <ServiceBanner /> */}

      {/* মাস্ট রিড কালেকশন */}
      <Carousel title="মাস্ট রিড কালেকশন">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* ইসলামিক কালেকশন */}
      <Carousel title="ইসলামিক কালেকশন">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* ইংরেজি ভাষার বিদেশি বই */}
      <Carousel title="ইংরেজি ভাষার বিদেশি বই">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* কোলকাতার বই */}
      <Carousel title="কোলকাতার বই">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* কবিতা কালেকশন */}
      <Carousel title="কবিতা কালেকশন">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* অনুবাদ কালেকশন */}
      <Carousel title="অনুবাদ কালেকশন">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* ভৌতিক ও থ্রিলার */}
      <Carousel title="ভৌতিক ও থ্রিলার">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* গল্প ও উপন্যাস */}
      <Carousel title="গল্প ও উপন্যাস">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* রাজনীতি, দর্শন, জীবনী ও আত্মজীবনী */}
      <Carousel title="রাজনীতি, দর্শন, জীবনী ও আত্মজীবনী">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* আত্ম-উন্নয়ন */}
      <Carousel title="আত্ম-উন্নয়ন">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* সেবা প্রকাশনীর বই */}
      <Carousel title="সেবা প্রকাশনীর বই">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* পাঞ্জেরী ও ফ্রেন্ডস প্রকাশনীর বই */}
      <Carousel title="পাঞ্জেরী ও ফ্রেন্ডস প্রকাশনীর বই">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      {/* চাকরির বই */}
      <Carousel title="চাকরির বই">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Carousel>

      <Carousel title="ইসলামিক ক্যাটাগরি">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel>

      <Carousel title="জনপ্রিয় ইংরেজি ক্যাটাগরি">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel>

      <Carousel title="জনপ্রিয় বাংলা ক্যাটাগরি">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel>

      <Carousel title="জনপ্রিয় লেখক">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </Carousel>

      <Carousel title="জনপ্রিয় প্রকাশনী">
        {publishers.map((publisher) => (
          <PublisherCard key={publisher.id} publisher={publisher} />
        ))}
      </Carousel>

      <Carousel title="সেবা প্রকাশনীর ক্যাটাগরি">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel>

      <Carousel title="চাকরির ক্যাটাগরি">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Carousel>

      <Carousel title="Customer Reviews">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
