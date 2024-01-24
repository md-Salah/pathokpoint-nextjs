
interface Params {
  slug: string;
}

const Book = ({params}: {params: Params}) => {

return <div className="custom-margin">{params.slug}</div>;
};

export default Book;
