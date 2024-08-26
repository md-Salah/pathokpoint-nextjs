const Error = ({ err }: { err: string }) => {
  return (
    <div className="admin-container admin-p bg-white text-highlight h-96 text-center pt-16">
      {err}
    </div>
  );
};

export default Error;
