const FacebookSVG = ({ className }: { className?: string }) => (
  <div className={className}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="40" height="24" fill="url(#pattern0_793_6770)" />
      <defs>
        <pattern
          id="pattern0_793_6770"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_793_6770"
            transform="matrix(0.000277778 0 0 0.000462963 -0.0333333 0)"
          />
        </pattern>
        <image
          id="image0_793_6770"
          width="3840"
          height="2160"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  </div>
);

export default FacebookSVG;