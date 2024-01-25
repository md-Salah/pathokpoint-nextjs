const Box = ({ value, text }: { value: number; text: string }) => (
  <div className="flex flex-col w-12 items-center">
    <span className="countdown  text-5xl">
      {/* @ts-ignore */}
      <span style={{ "--value": value }}></span>
    </span>
    {text}
  </div>
);

export default Box;
