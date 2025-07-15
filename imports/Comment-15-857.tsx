import svgPaths from "./svg-y1ys6sfefy";

function CommentPin() {
  return (
    <div className="relative shrink-0 size-9" data-name="Comment Pin">
      <div className="absolute bottom-[-9.722%] left-[-2.778%] right-[-2.778%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 38 40"
        >
          <g id="Comment Pin">
            <g filter="url(#filter0_d_15_861)" id="Icon">
              <path d={svgPaths.p26f80700} fill="url(#paint0_linear_15_861)" />
              <path
                d={svgPaths.p21f6c400}
                stroke="url(#paint1_linear_15_861)"
                strokeOpacity="0.25"
              />
            </g>
            <path
              d={svgPaths.p39a5bd00}
              id="Icon_2"
              stroke="var(--stroke-0, #7B7B7B)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="35"
              id="filter0_d_15_861"
              width="38"
              x="0"
              y="4.5"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0.15 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_15_861"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_15_861"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_15_861"
              x1="19"
              x2="19"
              y1="4.5"
              y2="31.5"
            >
              <stop stopColor="#323232" />
              <stop offset="1" stopColor="#121212" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_15_861"
              x1="19"
              x2="19"
              y1="4.5"
              y2="31.5"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function CommentInput() {
  return (
    <div className="relative shrink-0 w-full" data-name="Comment Input">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-[8px] relative w-full">
          <div className="-webkit-box basis-0 css-b22jdx font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#7b7b7b] text-[13px] text-left tracking-[-0.13px]">
            <p className="block leading-[16px]">Add comment...</p>
          </div>
          <div className="absolute h-4 left-[7px] top-2 w-0">
            <div className="absolute bottom-[-3.125%] left-[-0.5px] right-[-0.5px] top-[-3.125%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 2 18"
              >
                <path
                  d="M1 1V17"
                  id="Vector 17"
                  stroke="var(--stroke-0, black)"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromptInputDesignDefault() {
  return (
    <div
      className="backdrop-blur-[6px] backdrop-filter bg-[#fcfcfc] relative rounded-xl shrink-0 w-[280px]"
      data-name="Prompt Input/Design/Default"
    >
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip p-[8px] relative w-[280px]">
        <CommentInput />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_0px_0px_inset_#ffffff]" />
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_18px_24px_-20px_rgba(0,0,0,0.125),0px_8px_16px_-12px_rgba(0,0,0,0.075)]" />
    </div>
  );
}

export default function Comment() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative size-full"
      data-name="Comment"
    >
      <CommentPin />
      <PromptInputDesignDefault />
    </div>
  );
}