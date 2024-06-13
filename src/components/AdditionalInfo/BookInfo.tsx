import { Book as BookInterface } from "@/interface";
import { isEnglish } from "@/utils";
import Link from "next/link";

const BookInfo = ({
  book,
  setTab,
}: {
  book: BookInterface;
  setTab: (val: string) => void;
}) => {
  return (
    <div className="mt-12">
      <h1
        className={`font-semibold text-xl md:text-3xl ${
          isEnglish(book.name) ? "" : "font-bn"
        }`}
      >
        {book.name}
      </h1>
      <h3
        className="mt-2 text-xs md:text-sm half-underline before:w-9 group w-fit hover:cursor-pointer pb-2"
        onClick={() => setTab("Author")}
      >
        by
        <span
          className={`ml-1 group-hover:text-primary ${
            !isEnglish(book.authors[0].name) && "font-bn"
          }`}
        >
          {book.authors[0].name}
        </span>
      </h3>

      <p className="text-justify mt-4 md:mt-10 font-bn w-full text-sm md:text-base">
        {book.description ? (
          book.description
        ) : (
          <span className="text-black04">No description available</span>
        )}
      </p>

      <table className="mt-8 table table-sm text-xs md:text-sm w-fit table-left-0">
        <tbody>
          <tr>
            <td
              className={`${isEnglish(book.name) ? "" : "font-bn"}`}
              colSpan={3}
            >
              {book.name}
              {book.cover && <span className="ml-2">{`(${book.cover})`}</span>}
            </td>
          </tr>

          {book.authors.length > 0 && (
            <tr>
              <td className="font-bn w-28 sm:w-24 md:w-36">লেখক</td>
              <td className="w-4">:</td>
              <td>
                {book.authors.map((author, index) => (
                  <LinkButton
                    key={author.id}
                    name={author.name}
                    href={"/authors/" + author.slug}
                    comma={index !== book.authors.length - 1}
                  />
                ))}
              </td>
            </tr>
          )}

          {book.translators && book.translators.length > 0 && (
            <tr>
              <td className=" font-bn">অনুবাদক</td>
              <td>:</td>
              <td>
                {book.translators?.map((author, index) => (
                  <LinkButton
                    key={author.id}
                    name={author.name}
                    href={"/authors/" + author.slug}
                    comma={
                      book.translators && index !== book.translators.length - 1
                    }
                  />
                ))}
              </td>
            </tr>
          )}
          {book.publisher && (
            <tr>
              <td className="font-bn">প্রকাশনী</td>
              <td>:</td>
              <td>
                <Link
                  href={"/publishers/" + book.publisher.slug}
                  className="hover:underline hover:text-primary"
                >
                  {book.publisher.name}
                </Link>
              </td>
            </tr>
          )}

          {book.categories && book.categories.length > 0 && (
            <tr>
              <td className="font-bn">বিষয়</td>
              <td>:</td>
              <td>
                {book.categories?.map((author, index) => (
                  <LinkButton
                    key={author.id}
                    name={author.name}
                    href={"/categories/" + author.slug}
                    comma={
                      book.categories && index !== book.categories.length - 1
                    }
                  />
                ))}
              </td>
            </tr>
          )}
          {book.edition && (
            <tr>
              <td className="font-bn">সংস্করণ</td>
              <td>:</td>
              <td>{book.edition}</td>
            </tr>
          )}
          {book.cover && (
            <tr>
              <td className="font-bn">কভার</td>
              <td>:</td>
              <td className="capitalize">{book.cover}</td>
            </tr>
          )}
          {book.language && (
            <tr>
              <td className="font-bn">ভাষা</td>
              <td>:</td>
              <td className="capitalize">{book.language}</td>
            </tr>
          )}
          {book.isbn && (
            <tr>
              <td>ISBN</td>
              <td>:</td>
              <td>{book.isbn}</td>
            </tr>
          )}
          {book.no_of_pages && (
            <tr>
              <td className="font-bn">পৃষ্ঠা সংখ্যা</td>
              <td>:</td>
              <td>{book.no_of_pages}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookInfo;

const LinkButton = ({
  name,
  href,
  comma,
}: {
  name: string;
  href: string;
  comma?: boolean;
}) => (
  <Link
    href={href}
    className={`btn btn-link btn-xs text-sm mr-1 text-black02 hover:text-primary ${
      isEnglish(name) ? "" : "font-bn"
    }`}
  >
    {name}
    {comma && ","}
  </Link>
);
