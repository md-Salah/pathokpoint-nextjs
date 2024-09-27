import { BsExclamationTriangle } from 'react-icons/bs';

import { NotFound } from '@/micro-components';

const Test = () => {
  return (
    <NotFound>
      <div className="flex flex-col items-center gap-3">
        <BsExclamationTriangle size="64" className='text-black04' />
        <h2 className="text-xl lg:text-2xl text-black04">Something went wrong!</h2>
        <button
          className="mt-4 w-52 lg:w-60 btn btn-primary"
          // onClick={
          //   // Attempt to recover by trying to re-render the segment
          //   () => reset()
          // }
        >
          Try again
        </button>
      </div>
    </NotFound>
  );
};

export default Test;
