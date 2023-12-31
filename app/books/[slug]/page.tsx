
interface params {
    slug: string;
}

const Book = ({params}: {params: params}) => {

  return <div>Book {params.slug}</div>;
};

export default Book;
