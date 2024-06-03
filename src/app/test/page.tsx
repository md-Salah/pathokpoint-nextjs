import { AuthorCard } from "@/components";

const Test = () => {
  return (
    <div className="p-4">
      <AuthorCard
        author={{
          id: "1",
          name: "হুমায়ূন আহমেদ",
          slug: "humayun-ahmed",
          image: {
            src: "/authors/1.jpg",
          },
        }}
      />
    </div>
  );
};

export default Test;
