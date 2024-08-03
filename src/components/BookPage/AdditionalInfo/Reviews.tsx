import Image from "next/image";
import RateThisProduct from "./RateThisProduct";

const Reviews = () => {
  const rating = 4.2;
  const starRatings = [
    { star: 1, value: 10, count: 1 },
    { star: 2, value: 25, count: 3 },
    { star: 3, value: 30, count: 10 },
    { star: 4, value: 50, count: 50 },
    { star: 5, value: 80, count: 215 },
  ];
  const images = ["/reviews/1.jpg", "/reviews/2.jpg", "/reviews/3.jpg"];
  const text =
    "তাদের থেকে এটা দ্বিতীয় বার বই নেয়া ভিডিও দেখিয়ে বই দেয়াটা বেশ ভালো লেগেছে দেখে ভালো না লাগলেও আপনি নাও নিতে পারেন এটা সবথেকে ভালো দিক আমার দেয়া  তবে দামটা কমলে সবাই নিতে আরো বেশি স্বাচ্ছন্দ বোধ করত। তবে সবদিক বিবেচনা করলে তাদের সার্ভিস অনেক ভালো আপনারা নির্দ্বিধায় নিতে পারেন। শুধু দামের দিকে একটু বিবেচনা রাখবেন পাঠক পয়েন্ট। অনেক ধন্যবাদ এই বইগুলো দেয়ার জন্য।";

  return (
    <div>
      {/* Rating */}
      <div className="mt-6 flex justify-between max-w-[900px]">
        <div>
          <h2 className="font-bold lg:font-extrabold text-4xl lg:text-5xl">
            {rating}
          </h2>
          <div className="flex mt-3 lg:mt-6 gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className={`mask mask-star-2 w-3 lg:w-6 h-3 lg:h-6 ${
                  star <= rating ? "bg-accent" : "bg-[#E6E6E6]"
                }`}
              ></div>
            ))}
          </div>
          <h4 className="mt-3 lg:mt-6 font-normal text-xs lg:text-sm text-black04">
            259 ratings
          </h4>
          <div className="block lg:hidden">
            <RateThisProduct />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {starRatings.reverse().map((rating) => (
            <div key={rating.star} className="text-xs flex items-center">
              <span className="w-10">{rating.star} star</span>
              <progress
                className="progress progress-accent w-32 lg:w-56"
                value={rating.value}
                max="100"
              ></progress>
              <span className="w-7 pl-2">{rating.count}</span>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <RateThisProduct />
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10 lg:mt-16">
        <Review rating={rating} text={text} images={images} />
        <div className="divider"></div>
        <Review rating={rating} text={text} images={images} />
        <div className="divider"></div>
        <Review rating={rating} text={text} images={images} />
      </div>

      <div>Pagination</div>
    </div>
  );
};

export default Reviews;

const Review = ({
  rating,
  text,
  images,
}: {
  rating: number;
  text: string;
  images: string[];
}) => {
  return (
    <div>
      <div className="flex mt-3 lg:mt-6 gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className={`mask mask-star-2 w-3 lg:w-4 h-3 lg:h-4 ${
              star <= rating ? "bg-accent" : "bg-[#E6E6E6]"
            }`}
          ></div>
        ))}
      </div>
      <h2 className="text-xxs sm:text-xs lg:text-sm text-black02 mt-3 lg:mt-4">
        by
        <span className="mx-2">Tanvir rayhan,</span>
        <span className="text-black04">10 Jan 2023</span>
      </h2>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="flex gap-1 flex-wrap">
          {images.map((src, index) => (
            <figure
              key={index}
              className="w-16 h-20 relative rounded shadow-sm"
            >
              <Image
                src={src}
                alt="review"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </figure>
          ))}
        </div>
        <div className="lg:col-span-2 font-bn text-xs align-top tracking-wider text-justify text-black02">
          {text}
        </div>
      </div>
    </div>
  );
};
