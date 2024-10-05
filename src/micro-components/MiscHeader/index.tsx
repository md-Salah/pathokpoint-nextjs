interface Props {
  title: string;
  subtitle?: string;
}

const MiscHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="bg-primary h-32 lg:h-36">
      <div className="layout-container layout-px">
        <div className="pt-8">
          <h1 className="font-medium lg:font-semibold text-lg lg:text-2xl text-white">
            {title}
          </h1>
          {subtitle && (
            <h4 className="mt-3 text-xs sm:text-sm text-white">{subtitle}</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiscHeader;
