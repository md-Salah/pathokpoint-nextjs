import { categories } from "@/constants/categories";
import Title from "./Title";
import { CategoryCard } from "@/components";

interface Props {
  title: string;
}

const CategoryCarousel = ({ title }: Props) => {
  return (
    <div className="custom-margin mt-10">
      <Title title={title} />
      <div className="carousel carousel-end rounded-md mt-4 gap-2 w-full">
        {categories.map((category, index) => (
          <div key={index} className="carousel-item w-40">
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
