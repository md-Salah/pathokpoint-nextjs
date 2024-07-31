import { MobileHeader } from "@/components/UserProfile";
import AuthorItem from "./AuthorItem";
import { authors } from "@/constants";
import { Pagination } from "@/components";

const Following = () => {
  return (
    <div>
      <MobileHeader title="Following" />
      <div className="w-full flex flex-col bg-white p-4 md:p-6 lg:p-10 pb-10">
        <h4 className="text-black02 font-semibold text-lg hidden md:block">
          Following
        </h4>
        <div className="mt-4 md:mt-6">
          {authors.map((author) => (
            <AuthorItem key={author.id} author={author} />
          ))}
        </div>
      </div>
      {/* <Pagination
        currentPage={1}
        totalPages={5}
        handleChangeCurrentPage={()=>{}}
      /> */}
    </div>
  );
};

export default Following;
