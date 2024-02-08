import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const Brand = () => {
  return (
    <div className="pl-8 pt-8 min-h-screen w-full overflow-scroll">

      <div className="mt-8">
        <div className="title">Button with brand colors</div>
        <div className="flex gap-1">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn">Default</button>
        </div>
      </div>

      <div className="mt-8">
        <div className="title">Outline buttons</div>
        <div className="flex gap-1">
          <button className="btn btn-outline btn-primary">Primary</button>
          <button className="btn btn-outline btn-neutral">Neutral</button>
        </div>
      </div>
      
      <div className="mt-8">
        <h1 className="title">Common Components</h1>
        <div className="flex flex-col gap-2">
          <h1 className="line-through">1000 ৳</h1>
          <h1 className="text-primary">250 ৳</h1>
          <h1>ফেলুদা সমগ্র</h1>
          <h3 className="text-secondary-content">Satyajit Ray | সত্যজিত রয়</h3>
          <p className="badge badge-warning">New</p>
          <p className="badge badge-warning">OLD-Readable</p>
          <p className="badge badge-success">In Stock</p>
          <p className="badge badge-accent">Out of stock</p>

          <button className="btn btn-primary btn-wide">Add to Cart</button>
          <button className="btn btn-sm w-16">
            <IoMdHeart className="inline-block h-6 w-6 text-error" />
          </button>
          <button className="btn btn-sm btn-neutral btn-outline w-16">
            <IoMdHeartEmpty className="inline-block h-6 w-6" />
          </button>
          <div className="badge badge-outline cursor-pointer hover:text-primary font-semibold p-3">
            more
          </div>

          <div>
            <h1 className="title">Common Divs</h1>
            <div className="bg-base-100 text-base-content outline h-16 w-36">
              Base 100
            </div>
            <div className="bg-base-200 text-base-content h-16 w-36">
              Base 200
            </div>
            <div className="bg-base-300 text-base-content h-16 w-36">
              Base 300
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
