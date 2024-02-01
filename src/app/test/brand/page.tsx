import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const Brand = () => {
  return (
    <div className="pl-8 pt-8 min-h-screen w-full overflow-scroll">
      {/* <div className="text-2xl">
        <p className="font-bold">
          Font:
          <br />
          Bold: This is an English text
        </p>
        <p className="font-bold">Bold: এটি বাংলা লেখা</p>
        <br />

        <p className="font-semibold">Semibold: This is an English text</p>
        <p className="font-semibold">Semibold: এটি বাংলা লেখা</p>
        <br />

        <p className="font-normal">Normal: This is an English text</p>
        <p className="font-normal">Normal: এটি বাংলা লেখা</p>
        <br />

        <p className="font-light">Light: This is an English text</p>
        <p className="font-light">Light: এটি বাংলা লেখা</p>
      </div> */}

      <div className="mt-8">
        <div className="title">Button with brand colors</div>
        <div className="flex gap-1">
          <button className="btn">Button</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </div>
      </div>

      {/* <div className="mt-8">
        <div className="title">Button active</div>
        <div className="flex gap-1">
          <button className="btn btn-active">Default</button>
          <button className="btn btn-active btn-neutral">Neutral</button>
          <button className="btn btn-active btn-primary">Primary</button>
          <button className="btn btn-active btn-ghost">Ghost</button>
          <button className="btn btn-active btn-link">Link</button>
        </div>
      </div> */}
      <div className="mt-8">
        <div className="title">State colors</div>
        <div className="flex gap-1">
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
        </div>
      </div>
      <div className="mt-8">
        <div className="title">Outline buttons</div>
        <div className="flex gap-1">
          <button className="btn btn-outline">Default</button>
          <button className="btn btn-outline btn-neutral">Neutral</button>
          <button className="btn btn-outline btn-primary">Primary</button>
          <button className="btn btn-outline btn-accent">Accent</button>
        </div>
      </div>
      {/* <div className="mt-8">
        <div className="title">Button sizes</div>
        <div className="flex gap-1">
          <button className="btn btn-lg">Large</button>
          <button className="btn">Normal</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn btn-xs">Tiny</button>
        </div>
      </div> */}
      {/* <div className="mt-8">
        <div className="title">Button wide</div>
        <div className="flex gap-1">
          <button className="btn btn-wide">Wide</button>
        </div>
      </div>
      <div className="mt-8">
        <div className="title">Glass button</div>
        <div className="flex gap-1">
          <button className="btn glass">Glass button</button>
        </div>
      </div> */}
      <div className="mt-8">
        <h1 className="title">Text Styles</h1>
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
          <button className="btn btn-sm w-16">
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
