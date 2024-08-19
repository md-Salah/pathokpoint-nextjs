interface Props {
  status?: number;
  msg?: string;
}

const Unauthorized = ({
  status = 403,
  msg = "You are not authorized to view this page",
}: Props) => {
  return (
    <div className="sm:bg-white layout-container text-lg lg:text-3xl text-center layout-mt font-bn py-20">
      <h1 className="text-7xl">{status}</h1>
      <h3 className="mt-2">{msg}</h3>
    </div>
  );
};

export default Unauthorized;
