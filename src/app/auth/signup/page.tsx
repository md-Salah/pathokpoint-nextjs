import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex flex-row custom-mx custom-mt bg-white p-16">
      <section className="flex-1">Graphics</section>
      <aside className="w-72">
        <SignUpForm />
      </aside>
    </div>
  );
};

export default SignUp;

const SignUpForm = () => {
  return (
    <div>
      <h1 className="mb-5 text-center font-bold text-xl text-primary">
        Sign Up
      </h1>
      <div className="block">
        <input
          type="text"
          placeholder="First Name"
          className="input input-sm w-full mb-2"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-sm w-full mb-2"
        />
        <input
          type="text"
          placeholder="Phone or email"
          className="input input-sm mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-sm w-full"
        />
      </div>
      <button className="btn btn-primary text-white btn-sm bg-primary w-full mt-4 rounded">
        Sign Up
      </button>

      <div>
        <p className="text-center mt-4 text-sm">Or, sign up with</p>
        <div className="flex justify-center mt-4">
          <button className="btn btn-sm btn-outline rounded text-gray-400 w-32 mr-2">
            Google
          </button>
          <button className="btn btn-sm btn-outline rounded text-gray-400 w-32">
            Facebook
          </button>
        </div>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
