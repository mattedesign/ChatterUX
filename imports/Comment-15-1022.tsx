import svgPaths from "./svg-nkc5nis5vb";

function CommentPin() {
  return (
    <div className="relative shrink-0 size-9" data-name="Comment Pin">
      <div className="absolute bottom-[-4.167%] left-[-2.778%] right-[-2.778%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 38 38"
        >
          <g id="Comment Pin">
            <g filter="url(#filter0_d_15_1039)" id="Icon">
              <path d={svgPaths.p26f80700} fill="url(#paint0_linear_15_1039)" />
              <path
                d={svgPaths.p21f6c400}
                stroke="url(#paint1_linear_15_1039)"
                strokeOpacity="0.25"
              />
            </g>
            <g id="Group 3">
              <circle
                cx="15.75"
                cy="17.75"
                fill="var(--fill-0, #FCFCFC)"
                id="Ellipse 15"
                r="0.75"
              />
              <circle
                cx="18.75"
                cy="17.75"
                fill="var(--fill-0, #FCFCFC)"
                id="Ellipse 16"
                r="0.75"
              />
              <circle
                cx="21.75"
                cy="17.75"
                fill="var(--fill-0, #FCFCFC)"
                id="Ellipse 17"
                r="0.75"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="35"
              id="filter0_d_15_1039"
              width="38"
              x="0"
              y="2.5"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0.15 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="plus-darker"
                result="effect1_dropShadow_15_1039"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_15_1039"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_15_1039"
              x1="19"
              x2="19"
              y1="4.5"
              y2="31.5"
            >
              <stop stopColor="#34A7FF" />
              <stop offset="1" stopColor="#0D7DFD" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_15_1039"
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

function CommentContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Comment Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-[16px] relative w-full">
          <div className="-webkit-box basis-0 css-s4x91j font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[13px] text-left tracking-[-0.13px]">
            <p className="block leading-[1.5]">
              I love this bag, it looks great. Could you make it with leather
              material?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlusCircleAdd() {
  return (
    <div className="relative shrink-0 size-5" data-name="plus-circle, add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="plus-circle, add">
          <path
            d={svgPaths.pabb6ef0}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function CommentInputButton() {
  return (
    <div
      className="relative rounded-[10px] shrink-0 size-8"
      data-name="Comment Input button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[32px] relative size-8">
          <PlusCircleAdd />
        </div>
      </div>
    </div>
  );
}

function At() {
  return (
    <div className="relative shrink-0 size-5" data-name="@, at">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="@, at">
          <path
            d={svgPaths.p8f5f180}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function CommentInputButton1() {
  return (
    <div
      className="bg-[#f1f1f1] relative rounded-[10px] shrink-0 size-8"
      data-name="Comment Input button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[32px] relative size-8">
          <At />
        </div>
      </div>
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function SmileyFaceEmojiSmile() {
  return (
    <div
      className="relative shrink-0 size-5"
      data-name="smiley, face, emoji, smile"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="smiley, face, emoji, smile">
          <path
            d={svgPaths.p1a32b300}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <g id="Icon_2">
            <path d={svgPaths.p28bb4380} fill="var(--fill-0, #7B7B7B)" />
            <path d={svgPaths.p3219da80} fill="var(--fill-0, #7B7B7B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CommentInputButton2() {
  return (
    <div
      className="relative rounded-[10px] shrink-0 size-8"
      data-name="Comment Input button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[32px] relative size-8">
          <SmileyFaceEmojiSmile />
        </div>
      </div>
    </div>
  );
}

function EmojiContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Emoji Container"
    >
      <CommentInputButton />
      <CommentInputButton1 />
      <CommentInputButton2 />
    </div>
  );
}

function ArrowTop() {
  return (
    <div className="relative shrink-0 size-5" data-name="arrow-top">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-top">
          <path
            d={svgPaths.pcbe17a0}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SendButton() {
  return (
    <div
      className="bg-gradient-to-b from-[#e5e5e5] relative rounded-[10px] shadow-[0px_3px_4px_-1px_rgba(0,0,0,0.15),0px_0px_0px_1px_#d4d4d4] shrink-0 size-8 to-[#e2e2e2]"
      data-name="Send Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-8 py-3 relative size-8">
          <ArrowTop />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.33)]" />
    </div>
  );
}

function ActionContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Action Container">
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[8px] relative w-full">
          <EmojiContainer />
          <SendButton />
        </div>
      </div>
    </div>
  );
}

function PromptInputDesignDefault() {
  return (
    <div
      className="backdrop-blur-[6px] backdrop-filter bg-[#fcfcfc] relative rounded-[18px] shrink-0 w-[280px]"
      data-name="Prompt Input/Design/Default"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[280px]">
        <CommentContainer />
        <ActionContainer />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_0px_0px_inset_#ffffff]" />
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_18px_24px_-20px_rgba(0,0,0,0.125),0px_8px_16px_-12px_rgba(0,0,0,0.075)]" />
    </div>
  );
}

export default function Comment() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative size-full"
      data-name="Comment"
    >
      <CommentPin />
      <PromptInputDesignDefault />
    </div>
  );
}