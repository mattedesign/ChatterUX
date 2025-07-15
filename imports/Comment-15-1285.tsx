import svgPaths from "./svg-j3y3rsss51";
import imgProfileImage from "figma:asset/17f55339ce978d6a7fb4e5c8db5546d4e2393b2a.png";
import imgProfileImage1 from "figma:asset/8bb256593f094583362e58ff74b681d9323cfc08.png";
import imgProfileImage2 from "figma:asset/9d6780f008326e052464d152ca5d3dd934b6ec59.png";

function ProfileImage() {
  return (
    <div
      className="[background-size:104.17%_156.25%] bg-[50%_68.94%] bg-no-repeat mr-[-8px] relative rounded-2xl shrink-0 size-6"
      data-name="Profile Image"
      style={{ backgroundImage: `url('${imgProfileImage}')` }}
    >
      <div className="absolute border-[#fcfcfc] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[16.75px]" />
    </div>
  );
}

function ProfileImage1() {
  return (
    <div
      className="[background-size:100%_150%] bg-left bg-no-repeat mr-[-8px] relative rounded-2xl shrink-0 size-6"
      data-name="Profile Image"
      style={{ backgroundImage: `url('${imgProfileImage1}')` }}
    >
      <div className="absolute border-[#fcfcfc] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[16.75px]" />
    </div>
  );
}

function Frame202() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start pl-0 pr-2 py-0 relative shrink-0">
      <ProfileImage />
      <ProfileImage1 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="bg-[#fcfcfc] relative rounded-bl-[1px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip p-[4px] relative">
        <Frame202 />
      </div>
      <div className="absolute border-[#3582ff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-bl-[1px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function CommentPin() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[2px] relative shrink-0 w-[52px]"
      data-name="Comment Pin"
    >
      <Frame200 />
    </div>
  );
}

function ProfileImage2() {
  return (
    <div
      className="[background-size:100%_150%] bg-left bg-no-repeat relative rounded-2xl shrink-0 size-8"
      data-name="Profile Image"
      style={{ backgroundImage: `url('${imgProfileImage1}')` }}
    >
      <div className="absolute border-[#fcfcfc] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[16.75px]" />
    </div>
  );
}

function UserInfo() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium gap-2 items-center justify-start p-0 relative shrink-0 text-nowrap w-full"
      data-name="User Info"
    >
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] tracking-[-0.12px]">
        <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[16px] overflow-inherit text-nowrap whitespace-pre">
          John Doe
        </p>
      </div>
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#7b7b7b] text-[11px] tracking-[-0.11px]">
        <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[16px] overflow-inherit text-nowrap whitespace-pre">
          2mins ago
        </p>
      </div>
    </div>
  );
}

function Frame201() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
      <UserInfo />
      <div className="-webkit-box css-s4x91j font-['Inter:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[13px] tracking-[-0.13px] w-full">
        <p className="block leading-[1.5]">
          How does this compare to the Walmart checkout flow? 🤔
        </p>
      </div>
    </div>
  );
}

function CommentItem() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-[16px] relative shrink-0 w-[280px]"
      data-name="Comment item"
    >
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <ProfileImage2 />
      <Frame201 />
    </div>
  );
}

function CrossedSmallDeleteRemove() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="crossed small, delete, remove"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="crossed small, delete, remove">
          <path
            d={svgPaths.p19015c80}
            id="Icon"
            stroke="var(--stroke-0, #FCFCFC)"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SmallCloseButton() {
  return (
    <div
      className="absolute bg-gradient-to-b box-border content-stretch flex flex-row from-[#323232] gap-2 items-center justify-center overflow-clip p-[2px] right-2 rounded-[32px] size-5 to-[#121212] top-2"
      data-name="Small Close Button"
    >
      <CrossedSmallDeleteRemove />
    </div>
  );
}

function ProfileImage3() {
  return (
    <div
      className="[background-size:42.29%_71.57%,_auto] bg-[#1e1e1e] relative rounded-[32px] shrink-0 size-8"
      data-name="Profile Image"
      style={{ backgroundImage: `url('${imgProfileImage2}')` }}
    >
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function UserInfo1() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium gap-2 items-center justify-start p-0 relative shrink-0 text-nowrap w-full"
      data-name="User Info"
    >
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] tracking-[-0.12px]">
        <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[16px] overflow-inherit text-nowrap whitespace-pre">
          Figmant
        </p>
      </div>
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#7b7b7b] text-[11px] tracking-[-0.11px]">
        <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[16px] overflow-inherit text-nowrap whitespace-pre">
          1s
        </p>
      </div>
    </div>
  );
}

function Frame203() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
      <UserInfo1 />
      <div className="-webkit-box css-s4x91j font-['Inter:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[0px] tracking-[-0.13px] w-full">
        <p className="leading-[1.5] text-[13px]">
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#3582ff] tracking-[-0.13px]">{`Walmart `}</span>
          Does an excellent job of keeping the user’s cognitive load to a
          minimum. Try reducing the screen clutter to improve checkout
          conversion...
        </p>
      </div>
    </div>
  );
}

function CommentItem1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-[16px] relative shrink-0 w-[280px]"
      data-name="Comment item"
    >
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <ProfileImage3 />
      <Frame203 />
    </div>
  );
}

function ProfileImage4() {
  return (
    <div
      className="[background-size:100%_150%] bg-left bg-no-repeat rounded-[32px] shrink-0 size-8"
      data-name="Profile Image"
      style={{ backgroundImage: `url('${imgProfileImage1}')` }}
    />
  );
}

function ReplyInput() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Reply Input"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-[8px] relative w-full">
          <div className="-webkit-box basis-0 css-b22jdx font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#7b7b7b] text-[13px] text-left tracking-[-0.13px]">
            <p className="block leading-[16px]">Reply</p>
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

function PromptInputDesignDefault() {
  return (
    <div
      className="basis-0 bg-[#f1f1f1] grow min-h-px min-w-px relative rounded-xl shrink-0"
      data-name="Prompt Input/Design/Default"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[6px] relative w-full">
          <ReplyInput />
          <SendButton />
        </div>
      </div>
    </div>
  );
}

function CommentItem2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-[16px] relative shrink-0 w-[280px]"
      data-name="Comment item"
    >
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <ProfileImage4 />
      <PromptInputDesignDefault />
    </div>
  );
}

function PromptInputDesignDefault1() {
  return (
    <div
      className="backdrop-blur-[6px] backdrop-filter bg-[#fcfcfc] relative rounded-[18px] shrink-0 w-[280px]"
      data-name="Prompt Input/Design/Default"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[280px]">
        <CommentItem />
        <SmallCloseButton />
        <CommentItem1 />
        <CommentItem2 />
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
      <PromptInputDesignDefault1 />
    </div>
  );
}