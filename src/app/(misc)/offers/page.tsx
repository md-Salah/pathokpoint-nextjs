import { MiscHeader } from '@/micro-components';

const Offers = () => {
  return (
    <div>
      <MiscHeader
        title="Offers"
        subtitle="Explore our latest promotions and save big!"
      />
      <div className="layout-container layout-px text-sm lg:text-base">
        <section className="layout-mt p-4 sm:p-6 md:p-8 lg:p-10 bg-white">
          <h2 className="text-lg font-bold">Free Delivery:</h2>
          <ul className="mt-2 list-disc ml-4 space-y-2 font-bn">
            <li>
              699 টাকার পুরাতন অথবা 1999 টাকার নতুন বই অর্ডার করলে ফ্রি
              ডেলিভারি।
            </li>
            <li>অফারটি ৩১ অক্টোবর ২০২২ পর্যন্ত চলবে।</li>
          </ul>
        </section>
      </div>
      ;
    </div>
  );
};

export default Offers;
