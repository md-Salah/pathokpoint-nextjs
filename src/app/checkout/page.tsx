import {
  OrderSummary,
  PaymentMethod,
  ShippingAddress,
  ShippingMethod,
} from "@/components";
import { OrderTerms } from "@/micro-components";

const Checkout = () => {
  return (
    <div className="layout-container">
      <div className="grid grid-cols-12 md:gap-3">
        <section className="layout-p layout-mt bg-white col-span-12 md:col-span-5">
          <ShippingAddress />
        </section>
        <div className="col-span-12 md:col-span-7">
          <PaymentMethod />
          <ShippingMethod />
        </div>
      </div>

      {/* Summary section */}
      <section className="layout-p layout-mt bg-white">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-6 lg:col-span-7 hidden sm:block">
            <OrderTerms />
          </div>
          <div className="col-span-12 sm:col-span-1"></div>
          <div className="col-span-12 sm:col-span-5 lg:col-span-4">
            <OrderSummary />
            <div className="sm:hidden mt-8">
              <OrderTerms />
            </div>
            <div className="mt-8">
              <AggreementCheckbox />
              <button className="mt-4 btn btn-primary w-full">
                Pay & Confirm Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;

const AggreementCheckbox = () => {
  return (
    <label className="cursor-pointer flex items-center gap-2">
      <input
        type="checkbox"
        className="checkbox checkbox-xs checkbox-primary"
      />
      <span className="label-text font-bn text-xs">
        উপরোক্ত শর্তাবলী মেনে অর্ডার প্রদান করছি।
      </span>
    </label>
  );
};
