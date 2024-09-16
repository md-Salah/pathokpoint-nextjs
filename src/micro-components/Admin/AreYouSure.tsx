interface Props {
  loading: boolean;
  err: string | null;
  handleYes: () => void;
  handleNo: () => void;
}

const AreYouSure = ({ loading, err, handleYes, handleNo }: Props) => {
  return (
    <div className="max-w-sm mx-auto flex flex-col items-center mb-2">
      <h2 className="text-center text-2xl font-semibold">Are you sure?</h2>
      <p className="text-center text-sm text-black04 mt-4 mb-10">
        You are going to delete this item permanently.
      </p>
      <p className="text-error mt-2">{err}</p>
      <div className="grid grid-cols-2 gap-2 mt-4 w-full">
        <button
          className="btn btn-primary w-full max-w-48"
          disabled={loading}
          onClick={handleYes}
        >
          {loading && <span className="loading loading-spinner"></span>}
          Yes
        </button>
        <button
          className="btn btn-error btn-outline w-full max-w-48"
          onClick={handleNo}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default AreYouSure;
