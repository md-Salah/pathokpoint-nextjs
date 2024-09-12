import Image from 'next/image';
import Link from 'next/link';

import { defaultSrc } from '@/constants';
import { Author, BookAdmin } from '@/interface';
import { ConditionBadge } from '@/micro-components';
import { isEnglish } from '@/utils';

const Item = ({ book }: { book: BookAdmin }) => {
  return (
    <tr>
      <td>
        <div>{book.sku}</div>
        <div className="mt-1 text-xs text-black04">{`PID: ${book.public_id}`}</div>
      </td>
      <td>
        <figure className='w-8'>
          <Image
            src={book.images[0]?.src || defaultSrc.book}
            alt=""
            width={260}
            height={372}
          />
        </figure>
      </td>
      <td className="min-w-48">
        <Link
          href={`/books/${book.public_id}/${book.slug}`}
          className="hover:underline"
          target="_blank"
        >
          <div className={`line-clamp-1 ${!isEnglish(book.name) && "font-bn"}`}>
            {book.name}
          </div>
        </Link>
        <div className="mt-1 text-xs line-clamp-1 text-black04">
          {book.slug}
        </div>
      </td>
      <td className="min-w-48">
        {book.authors.slice(0, 1).map((author: Author) => (
          <div key={author.id}>
            <Link href="/admin/authors/add-author" className="hover:underline">
              <div
                className={`line-clamp-1 ${
                  !isEnglish(author.name) && "font-bn"
                }`}
              >
                {author.name}
              </div>
            </Link>
            <div className="line-clamp-1 text-xs text-black04">
              {author.slug}
            </div>
          </div>
        ))}
      </td>
      <td className="min-w-40">
        {book.publisher && (
          <>
            <Link
              href="/admin/publishers/add-publisher"
              className="hover:underline"
            >
              <div
                className={`line-clamp-1 ${
                  !isEnglish(book.publisher.name) && "font-bn"
                }`}
              >
                {book.publisher.name}
              </div>
            </Link>
            <div className="text-xs line-clamp-1 text-black04">
              {book.publisher.slug}
            </div>
          </>
        )}
      </td>
      <td>
        <div className="capitalize text-sm">
          {book.cover ? (
            book.cover
          ) : (
            <span className="text-black04 text-xs">cover unknown</span>
          )}
        </div>
        <div className="mt-1">
          <ConditionBadge condition={book.condition} />
        </div>
      </td>
      <td>
        <div>৳{book.sale_price}</div>
        {book.regular_price !== book.sale_price && (
          <div className="mt-1 line-through">৳{book.regular_price}</div>
        )}
      </td>
      <td className="text-center font-semibold">{book.quantity}</td>
      <td className="text-xs font-semibold min-w-20">
        {book.in_stock ? (
          <span className="text-success">In Stock</span>
        ) : (
          <span className="text-error">Out of Stock</span>
        )}
      </td>
      <td>{book.manage_stock ? "Yes" : "No"}</td>
      <td>
        <Link href={`/admin/books/edit/${book.public_id}`} className="btn btn-outline btn-primary btn-sm w-16">
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default Item;
