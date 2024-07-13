import { SignUpForm } from "@/components";
import { SignUpSVG } from "@/micro-components";

const SignUp = () => {
  return (
    <div className="layout-container layout-mt layout-p bg-white">
      <div className="my-5 grid lg:grid-cols-2">
        <div className="hidden lg:flex items-center justify-center ">
          <SignUpSVG className="w-96" />
        </div>
        <div>
          <div className="mx-auto max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

