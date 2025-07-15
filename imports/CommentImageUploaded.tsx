import svgPaths from "./svg-oww7bb3kf9";
import imgChatGptImageJun52025072746Pm1 from "figma:asset/56f47d1f411d4239730555f477f3f2707aeb833b.png";
import imgUserAvatar from "figma:asset/ed8cdf61a3636822075ae167bbae569b8c0c52af.png";
import imgUserAvatar1 from "figma:asset/fcd93569684726f12f5972a9e0e300bafd15881d.png";
import img900Px11 from "figma:asset/dc016f1cede95f569d8b9407d3c64537c8a50fcc.png";
import img900Px12 from "figma:asset/969911c3d896453411b3e6aff5b1226140cdc588.png";
import img900Px13 from "figma:asset/5027d16c1880e47b5f89f79dfad6708edd9daf2c.png";
import img900Px14 from "figma:asset/c9bc122f3953a5e92717ff36036ab62f11f7b088.png";
import imgStyleItem from "figma:asset/9d5d824822fe0ecb9337a4ea1e92b5085ddcf2ff.png";
import imgStyleItem1 from "figma:asset/37676a738b325e407ea1f7dd47e433980984f75d.png";
import imgImgDefault from "figma:asset/a162ea34ab9e29d00fc65c34fd67bc7e4cd0fbf6.png";
import imgImgHover from "figma:asset/c83dfe76674ecd612d74167cbf6826fb65ea4080.png";

function CanvasFullScreen09() {
  return (
    <div
      className="absolute bg-[#f8f7f7] inset-0 overflow-clip"
      data-name="Canvas/Full Screen/09"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[1066px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1554.67px]"
        data-name="ChatGPT Image Jun 5, 2025, 07_27_46 PM 1"
        style={{
          top: "calc(50% - 64px)",
          backgroundImage: `url('${imgChatGptImageJun52025072746Pm1}')`,
        }}
      />
    </div>
  );
}

function Cursor1Arrow() {
  return (
    <div
      className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="cursor 1, arrow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="cursor 1, arrow">
          <path
            d={svgPaths.p3f4dbb00}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Move() {
  return (
    <div
      className="overflow-clip relative rounded-[10px] shrink-0 size-10"
      data-name="Move"
    >
      <Cursor1Arrow />
    </div>
  );
}

function Pinch() {
  return (
    <div
      className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="pinch"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="pinch">
          <path
            d={svgPaths.p1bc33400}
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

function Pan() {
  return (
    <div
      className="overflow-clip relative rounded-[10px] shrink-0 size-10"
      data-name="Pan"
    >
      <Pinch />
    </div>
  );
}

function Bubble5Message() {
  return (
    <div className="relative shrink-0 size-5" data-name="bubble 5, message">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="bubble 5, message">
          <path
            d={svgPaths.pcb9280}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Comment() {
  return (
    <div
      className="bg-[#f1f1f1] relative rounded-xl shrink-0 w-10"
      data-name="Comment"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip px-3 py-2.5 relative w-10">
        <Bubble5Message />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_3px_0px_inset_rgba(18,18,18,0.15),0px_1.25px_1px_0px_inset_#ffffff]" />
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function Crop() {
  return (
    <div
      className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="crop"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="crop">
          <path
            d={svgPaths.p15aa25c0}
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

function Frame() {
  return (
    <div
      className="overflow-clip relative rounded-[10px] shrink-0 size-10"
      data-name="Frame"
    >
      <Crop />
    </div>
  );
}

function PlayGo() {
  return (
    <div
      className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="play, go"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="play, go">
          <path
            d={svgPaths.p38cfdd00}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function PlayMode() {
  return (
    <div
      className="overflow-clip relative rounded-[10px] shrink-0 size-10"
      data-name="Play mode"
    >
      <PlayGo />
    </div>
  );
}

function ChevronDownSmall() {
  return (
    <div className="relative shrink-0 size-4" data-name="chevron-down-small">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="chevron-down-small">
          <path
            d={svgPaths.p331aad00}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ZoomControl() {
  return (
    <div
      className="bg-[#f1f1f1] h-full relative rounded-xl shrink-0 w-[89px]"
      data-name="Zoom Control"
    >
      <div className="box-border content-stretch flex flex-row h-full items-center justify-between overflow-clip px-3 py-1 relative w-[89px]">
        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] text-left text-nowrap tracking-[-0.14px]">
          <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
            100%
          </p>
        </div>
        <ChevronDownSmall />
      </div>
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div
      className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="arrow-left"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-left">
          <path
            d={svgPaths.p2e063000}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Undo() {
  return (
    <div
      className="opacity-40 overflow-clip relative rounded-[10px] shrink-0 size-10"
      data-name="Undo"
    >
      <ArrowLeft />
    </div>
  );
}

function ArrowTop() {
  return (
    <div
      className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="arrow-top"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-top">
          <path
            d={svgPaths.p3c49aa80}
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

function Redo() {
  return (
    <div
      className="overflow-clip relative rounded-[10px] shrink-0 size-10"
      data-name="Redo"
    >
      <ArrowTop />
    </div>
  );
}

function ToolbarActions() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Toolbar Actions"
    >
      <Move />
      <Pan />
      <Comment />
      <Frame />
      <PlayMode />
      <div className="flex flex-row items-center self-stretch">
        <ZoomControl />
      </div>
      <Undo />
      <Redo />
    </div>
  );
}

function ToolbarGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[8px] relative shrink-0"
      data-name="Toolbar Group"
    >
      <div className="absolute border-[#ececec] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <ToolbarActions />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-gradient-to-b box-border content-stretch flex flex-row from-[#e5e5e5] gap-2 items-center justify-center overflow-clip px-6 py-2.5 relative rounded-xl shadow-[0px_3px_4px_-1px_rgba(0,0,0,0.15),0px_0px_0px_1px_#d4d4d4] shrink-0 to-[#e2e2e2]"
      data-name="Button"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] text-center text-nowrap tracking-[-0.28px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Export
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.33)]" />
    </div>
  );
}

function ExportSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start overflow-clip p-[8px] relative shrink-0"
      data-name="Export Section"
    >
      <Button />
    </div>
  );
}

function ToolbarDefault() {
  return (
    <div
      className="absolute bg-[#fcfcfc] rounded-[20px] top-3 translate-x-[-50%]"
      data-name="Toolbar/Default"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <div className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative">
        <ToolbarGroup />
        <ExportSection />
      </div>
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_4px_-4px_rgba(0,0,0,0.075),0px_8px_16px_-12px_rgba(0,0,0,0.125)]" />
    </div>
  );
}

function ProjectLogo() {
  return (
    <div className="relative shrink-0 size-8" data-name="Project Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g clipPath="url(#clip0_9_4502)" id="Project Logo">
          <path
            d={svgPaths.p342f0100}
            fill="var(--fill-0, #121212)"
            id="logo_002"
            stroke="var(--stroke-0, #121212)"
            strokeWidth="0.25"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_4502">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LayoutRightGridWindow() {
  return (
    <div
      className="relative shrink-0 size-5"
      data-name="layout right, grid, window"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="layout right, grid, window">
          <path
            d={svgPaths.p13ff2a00}
            fill="var(--stroke-0, #7B7B7B)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function MinimizeUi() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[6px] relative rounded-md shrink-0"
      data-name="Minimize UI"
    >
      <LayoutRightGridWindow />
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project Title">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-1.5 py-1 relative w-full">
          <ProjectLogo />
          <MinimizeUi />
        </div>
      </div>
    </div>
  );
}

function ProjectNameText() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip px-1.5 py-0 relative shrink-0"
      data-name="Project Name Text"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] max-w-[174px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[15px] text-left text-nowrap tracking-[-0.3px]">
        <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[24px] overflow-inherit whitespace-pre">
          Robot 2.0
        </p>
      </div>
    </div>
  );
}

function ChevronDownSmall1() {
  return (
    <div className="relative shrink-0 size-4" data-name="chevron-down-small">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="chevron-down-small">
          <path
            d={svgPaths.p3c740e80}
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

function ProjectNameIcon() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[4px] relative shrink-0"
      data-name="Project Name Icon"
    >
      <ChevronDownSmall1 />
    </div>
  );
}

function ProjectName() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-start overflow-clip p-0 relative rounded-md shrink-0 w-full"
      data-name="Project Name"
    >
      <ProjectNameText />
      <ProjectNameIcon />
    </div>
  );
}

function ProjectDescription() {
  return (
    <div
      className="relative rounded-md shrink-0 w-full"
      data-name="Project Description"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-1.5 py-0.5 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] max-w-52 not-italic opacity-80 overflow-ellipsis overflow-hidden relative shrink-0 text-[#7b7b7b] text-[12px] text-left text-nowrap tracking-[-0.12px]">
            <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[16px] overflow-inherit whitespace-pre">
              3D Design Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDetails() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Project Details"
    >
      <ProjectName />
      <ProjectDescription />
    </div>
  );
}

function ProjectHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project Header">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-3 relative w-full">
          <ProjectTitle />
          <ProjectDetails />
        </div>
      </div>
    </div>
  );
}

function ToggleItem() {
  return (
    <div
      className="basis-0 bg-[#fcfcfc] grow min-h-px min-w-px relative rounded-lg shadow-[0px_1.25px_3px_0px_rgba(50,50,50,0.1)] shrink-0"
      data-name="toggle item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#121212] text-[13px] text-left text-nowrap tracking-[-0.13px]">
            <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
              Menu
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1.25px_1px_0px_inset_#ffffff]" />
    </div>
  );
}

function ToggleItem1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="toggle item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#7b7b7b] text-[13px] text-left text-nowrap tracking-[-0.13px]">
            <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
              Analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div
      className="basis-0 bg-[#f1f1f1] grow min-h-px min-w-px relative rounded-xl shrink-0"
      data-name="Toggle"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[4px] relative w-full">
          <ToggleItem />
          <ToggleItem1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1.9px_0px_inset_rgba(50,50,50,0.1)]" />
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function ProjectTabs() {
  return (
    <div className="relative shrink-0 w-60" data-name="Project Tabs">
      <div className="box-border content-stretch flex flex-row items-center justify-between overflow-clip px-4 py-3 relative w-60">
        <Toggle />
      </div>
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FocusCameraExposure() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="focus, Camera, exposure"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="focus, Camera, exposure">
          <path
            d={svgPaths.pcdfa300}
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

function LayerSymbol() {
  return (
    <div
      className="bg-[#f1f1f1] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0"
      data-name="Layer symbol"
    >
      <FocusCameraExposure />
    </div>
  );
}

function ProjectItemInfo() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Project Item Info"
    >
      <LayerSymbol />
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Camera 1
        </p>
      </div>
    </div>
  );
}

function LayerItem() {
  return (
    <div
      className="bg-[#fcfcfc] box-border content-stretch flex flex-row h-10 items-center justify-between overflow-clip pl-1 pr-3 py-1 relative rounded-xl shrink-0 w-[216px]"
      data-name="Layer item"
    >
      <ProjectItemInfo />
    </div>
  );
}

function SunLightModeDay() {
  return (
    <div className="relative shrink-0 size-4" data-name="sun, light mode, day">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_9_4529)" id="sun, light mode, day">
          <path
            d={svgPaths.p53bf100}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_4529">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LayerSymbol1() {
  return (
    <div
      className="bg-[#f1f1f1] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0"
      data-name="Layer symbol"
    >
      <SunLightModeDay />
    </div>
  );
}

function ProjectItemInfo1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Project Item Info"
    >
      <LayerSymbol1 />
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Dome Light
        </p>
      </div>
    </div>
  );
}

function LayerItem1() {
  return (
    <div
      className="bg-[#fcfcfc] box-border content-stretch flex flex-row h-10 items-center justify-between overflow-clip pl-1 pr-3 py-1 relative rounded-xl shrink-0 w-[216px]"
      data-name="Layer item"
    >
      <ProjectItemInfo1 />
    </div>
  );
}

function LightBulbSimpleIdea() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="light bulb simple, idea"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="light bulb simple, idea">
          <path
            d={svgPaths.p9a01740}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function LayerSymbol2() {
  return (
    <div
      className="bg-[#f1f1f1] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0"
      data-name="Layer symbol"
    >
      <LightBulbSimpleIdea />
    </div>
  );
}

function ProjectItemInfo2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Project Item Info"
    >
      <LayerSymbol2 />
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Key Light
        </p>
      </div>
    </div>
  );
}

function LayerItem2() {
  return (
    <div
      className="bg-[#fcfcfc] box-border content-stretch flex flex-row h-10 items-center justify-between overflow-clip pl-1 pr-3 py-1 relative rounded-xl shrink-0 w-[216px]"
      data-name="Layer item"
    >
      <ProjectItemInfo2 />
    </div>
  );
}

function Solar() {
  return (
    <div className="relative shrink-0 size-4" data-name="solar">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="solar">
          <path
            d={svgPaths.p1b062700}
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

function LayerSymbol3() {
  return (
    <div
      className="bg-[#f1f1f1] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0"
      data-name="Layer symbol"
    >
      <Solar />
    </div>
  );
}

function ProjectItemInfo3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Project Item Info"
    >
      <LayerSymbol3 />
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Area Light
        </p>
      </div>
    </div>
  );
}

function LayerItem3() {
  return (
    <div
      className="bg-[#fcfcfc] box-border content-stretch flex flex-row h-10 items-center justify-between overflow-clip pl-1 pr-3 py-1 relative rounded-xl shrink-0 w-[216px]"
      data-name="Layer item"
    >
      <ProjectItemInfo3 />
    </div>
  );
}

function ArAugmentedReality3DViewCube() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="AR, Augmented Reality, 3d, view, cube"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="AR, Augmented Reality, 3d, view, cube">
          <path
            d={svgPaths.p1b2ab400}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function LayerSymbol4() {
  return (
    <div
      className="bg-[#fcfcfc] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative rounded-lg shadow-[0px_0px_4px_0px_rgba(18,18,18,0.1)] shrink-0"
      data-name="Layer symbol"
    >
      <ArAugmentedReality3DViewCube />
    </div>
  );
}

function ProjectItemInfo4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Project Item Info"
    >
      <LayerSymbol4 />
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Object 2
        </p>
      </div>
    </div>
  );
}

function LayerItem4() {
  return (
    <div
      className="bg-[#f1f1f1] h-10 relative rounded-xl shrink-0 w-[216px]"
      data-name="Layer item"
    >
      <div className="box-border content-stretch flex flex-row h-10 items-center justify-between overflow-clip pl-1 pr-3 py-1 relative w-[216px]">
        <ProjectItemInfo4 />
      </div>
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function ArAugmentedReality3DViewCube1() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="AR, Augmented Reality, 3d, view, cube"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="AR, Augmented Reality, 3d, view, cube">
          <path
            d={svgPaths.p1b2ab400}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function LayerSymbol5() {
  return (
    <div
      className="bg-[#f1f1f1] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0"
      data-name="Layer symbol"
    >
      <ArAugmentedReality3DViewCube1 />
    </div>
  );
}

function ProjectItemInfo5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Project Item Info"
    >
      <LayerSymbol5 />
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Background 2
        </p>
      </div>
    </div>
  );
}

function LayerItem5() {
  return (
    <div
      className="bg-[#fcfcfc] box-border content-stretch flex flex-row h-10 items-center justify-between overflow-clip pl-1 pr-3 py-1 relative rounded-xl shrink-0 w-[216px]"
      data-name="Layer item"
    >
      <ProjectItemInfo5 />
    </div>
  );
}

function ArAugmentedReality3DViewCube2() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="AR, Augmented Reality, 3d, view, cube"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="AR, Augmented Reality, 3d, view, cube">
          <path
            d={svgPaths.p1b2ab400}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function LayerSymbol6() {
  return (
    <div
      className="bg-[#fcfcfc] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0"
      data-name="Layer symbol"
    >
      <ArAugmentedReality3DViewCube2 />
    </div>
  );
}

function ProjectItemInfo6() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Project Item Info"
    >
      <LayerSymbol6 />
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Robot
        </p>
      </div>
    </div>
  );
}

function ManageLayerIcons() {
  return (
    <div className="relative shrink-0 size-4" data-name="Manage layer icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Manage layer icons">
          <path
            d={svgPaths.p1616c970}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageLayerIcons1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Manage layer icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Manage layer icons">
          <path
            d={svgPaths.p6febe80}
            fill="var(--stroke-0, #7B7B7B)"
            id="Icon"
          />
        </g>
      </svg>
    </div>
  );
}

function ManageLayerIcons2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Manage layer icons">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Manage layer icons">
          <path
            clipRule="evenodd"
            d={svgPaths.p23c0d900}
            fillRule="evenodd"
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function ProjectItemActions() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0"
      data-name="Project Item Actions"
    >
      <ManageLayerIcons />
      <ManageLayerIcons1 />
      <ManageLayerIcons2 />
    </div>
  );
}

function LayerItem6() {
  return (
    <div
      className="bg-[#f1f1f1] box-border content-stretch flex flex-row h-10 items-center justify-between overflow-clip pl-1 pr-3 py-1 relative rounded-xl shrink-0 w-[216px]"
      data-name="Layer item"
    >
      <ProjectItemInfo6 />
      <ProjectItemActions />
    </div>
  );
}

function ArAugmentedReality3DViewCube3() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="AR, Augmented Reality, 3d, view, cube"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="AR, Augmented Reality, 3d, view, cube">
          <path
            d={svgPaths.p1b2ab400}
            id="Icon"
            stroke="var(--stroke-0, #121212)"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function LayerSymbol7() {
  return (
    <div
      className="bg-[#f1f1f1] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0"
      data-name="Layer symbol"
    >
      <ArAugmentedReality3DViewCube3 />
    </div>
  );
}

function ProjectItemInfo7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Project Item Info"
    >
      <LayerSymbol7 />
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[16px] overflow-inherit">
          Background 1
        </p>
      </div>
    </div>
  );
}

function LayerItem7() {
  return (
    <div
      className="bg-[#fcfcfc] box-border content-stretch flex flex-row h-10 items-center justify-between overflow-clip pl-1 pr-3 py-1 relative rounded-xl shrink-0 w-[216px]"
      data-name="Layer item"
    >
      <ProjectItemInfo7 />
    </div>
  );
}

function ProjectItems() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project Items">
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-start p-[12px] relative w-full">
          <LayerItem />
          <LayerItem1 />
          <LayerItem2 />
          <LayerItem3 />
          <LayerItem4 />
          <LayerItem5 />
          <LayerItem6 />
          <LayerItem7 />
        </div>
      </div>
    </div>
  );
}

function ProjectInfo() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Project Info"
    >
      <ProjectHeader />
      <ProjectTabs />
      <ProjectItems />
    </div>
  );
}

function SearchMagnifyingGlass() {
  return (
    <div
      className="absolute left-1/2 size-4 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="search, magnifying glass"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="search, magnifying glass">
          <path
            d={svgPaths.p11d99000}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div
      className="overflow-clip relative rounded-lg shrink-0 size-8"
      data-name="Search Icon"
    >
      <SearchMagnifyingGlass />
    </div>
  );
}

function SearchInput() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Search Input"
    >
      <SearchIcon />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#7b7b7b] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
          Search...
        </p>
      </div>
    </div>
  );
}

function Shortcut() {
  return (
    <div
      className="bg-[#f1f1f1] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip px-1.5 py-0.5 relative rounded-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.11),0px_1px_4.2px_-1px_rgba(0,0,0,0.25)] shrink-0"
      data-name="Shortcut"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#7b7b7b] text-[11px] text-left text-nowrap tracking-[-0.11px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
          ⌘ K
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_0.8px_0px_inset_rgba(255,255,255,0.27),0px_-1px_0.6px_0px_inset_rgba(0,0,0,0.2)]" />
    </div>
  );
}

function SearchBar() {
  return (
    <div
      className="bg-[#fcfcfc] box-border content-stretch flex flex-row h-10 items-center justify-between overflow-clip pl-1 pr-2.5 py-1 relative rounded-xl shrink-0 w-[216px]"
      data-name="Search Bar"
    >
      <SearchInput />
      <Shortcut />
    </div>
  );
}

function SearchSection() {
  return (
    <div
      className="bg-[#fcfcfc] relative shrink-0 w-full"
      data-name="Search Section"
    >
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-start p-[12px] relative w-full">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div
      className="absolute bg-[#fcfcfc] bottom-3 left-3 rounded-[20px] top-3 w-60"
      data-name="Sidebar"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-between overflow-clip p-0 relative size-full">
        <ProjectInfo />
        <SearchSection />
      </div>
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function ArrowLeft1() {
  return (
    <div className="relative shrink-0 size-4" data-name="arrow-left">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="arrow-left">
          <path
            d={svgPaths.p3fdd4c00}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function CommentButtonGroup() {
  return (
    <div
      className="h-3 relative shrink-0 w-[60px]"
      data-name="Comment Button Group"
    >
      <div className="absolute bottom-[-6.25%] left-[-1.25%] right-[-1.25%] top-[-6.25%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 62 14"
        >
          <g id="Comment Button Group">
            <path
              d="M1 4L1 10"
              id="Vector 7"
              opacity="0.3"
              stroke="var(--stroke-0, #121212)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              d="M11 1V13"
              id="Vector 1"
              stroke="var(--stroke-0, #121212)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              d="M21 4L21 10"
              id="Vector 2"
              opacity="0.3"
              stroke="var(--stroke-0, #121212)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              d="M31 4L31 10"
              id="Vector 3"
              opacity="0.3"
              stroke="var(--stroke-0, #121212)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              d="M41 4L41 10"
              id="Vector 4"
              opacity="0.3"
              stroke="var(--stroke-0, #121212)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              d="M51 1V13"
              id="Vector 5"
              stroke="var(--stroke-0, #121212)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              d="M61 4L61 10"
              id="Vector 6"
              opacity="0.3"
              stroke="var(--stroke-0, #121212)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowTop1() {
  return (
    <div className="relative shrink-0 size-4" data-name="arrow-top">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="arrow-top">
          <path
            d={svgPaths.p2456d340}
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

function Component3DViewControler() {
  return (
    <div
      className="bg-[#fcfcfc] box-border content-stretch flex flex-row gap-3 items-center justify-start px-5 py-3.5 relative rounded-3xl shrink-0"
      data-name="3D View Controler"
    >
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_16px_4px_0px_rgba(0,0,0,0),0px_10px_4px_0px_rgba(0,0,0,0),0px_6px_3px_0px_rgba(0,0,0,0.01),0px_3px_3px_0px_rgba(0,0,0,0.02),0px_1px_1px_0px_rgba(0,0,0,0.02)]" />
      <ArrowLeft1 />
      <CommentButtonGroup />
      <ArrowTop1 />
    </div>
  );
}

function CommentContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Comment Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-[8px] relative w-full">
          <div className="-webkit-box basis-0 css-1mcy1s font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#7b7b7b] text-[15px] text-left tracking-[-0.3px]">
            <p className="block leading-[24px]">
              Describe your 3D object or scene...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlusAddLarge() {
  return (
    <div className="relative shrink-0 size-5" data-name="plus, add large">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="plus, add large">
          <path
            d={svgPaths.p1247f00}
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

function Component4() {
  return (
    <div className="h-10 relative rounded-xl shrink-0" data-name="Component 4">
      <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-start overflow-clip px-2.5 py-1 relative">
        <PlusAddLarge />
      </div>
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p13efa980}
            id="Icon_2"
            stroke="var(--stroke-0, #49BA61)"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[2px] relative shrink-0"
      data-name="Icon Container"
    >
      <Icon />
    </div>
  );
}

function IconContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Icon Container"
    >
      <IconContainer />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] text-left text-nowrap tracking-[-0.14px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Inspiration
        </p>
      </div>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Dropdown Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="chevron-down-small">
          <path
            d={svgPaths.p331aad00}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function DropdownContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[2px] relative shrink-0"
      data-name="Dropdown Container"
    >
      <DropdownIcon />
    </div>
  );
}

function InspirationDropdown() {
  return (
    <div
      className="h-10 relative rounded-xl shrink-0"
      data-name="Inspiration Dropdown"
    >
      <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-start overflow-clip px-2.5 py-1 relative">
        <IconContainer1 />
        <DropdownContainer />
      </div>
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function CommentInputGroup() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Comment Input Group"
    >
      <Component4 />
      <InspirationDropdown />
    </div>
  );
}

function DropdownIcon1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Dropdown Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="chevron-down-small">
          <path
            d={svgPaths.p331aad00}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function DropdownContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[2px] relative shrink-0"
      data-name="Dropdown Container"
    >
      <DropdownIcon1 />
    </div>
  );
}

function AiModelDropdown() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2.5 relative rounded-xl shrink-0"
      data-name="AI Model Dropdown"
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] text-left text-nowrap tracking-[-0.14px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Brainwave 2.5
        </p>
      </div>
      <DropdownContainer1 />
    </div>
  );
}

function MicrophoneMicSoundPodcast() {
  return (
    <div
      className="relative shrink-0 size-5"
      data-name="microphone, mic, sound, podcast"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="microphone, mic, sound, podcast">
          <path
            d={svgPaths.p3feb3200}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function VoiceButton() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-start overflow-clip px-2.5 py-1 relative rounded-xl shrink-0"
      data-name="Voice Button"
    >
      <MicrophoneMicSoundPodcast />
    </div>
  );
}

function ArrowTop2() {
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

function SubmitButton() {
  return (
    <div
      className="bg-gradient-to-b from-[#e5e5e5] relative rounded-xl shadow-[0px_3px_4px_-1px_rgba(0,0,0,0.15),0px_0px_0px_1px_#d4d4d4] shrink-0 size-10 to-[#e2e2e2]"
      data-name="Submit Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-8 py-3 relative size-10">
          <ArrowTop2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.33)]" />
    </div>
  );
}

function CommentActions() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Comment Actions"
    >
      <AiModelDropdown />
      <VoiceButton />
      <SubmitButton />
    </div>
  );
}

function InputAndActionsContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Input and Actions Container"
    >
      <CommentInputGroup />
      <CommentActions />
    </div>
  );
}

function PromptInput() {
  return (
    <div
      className="backdrop-blur-[6px] backdrop-filter bg-[#fcfcfc] relative rounded-3xl shrink-0 w-full"
      data-name="Prompt Input"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[12px] relative w-full">
          <CommentContainer />
          <InputAndActionsContainer />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_0px_0px_inset_#ffffff]" />
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-3xl shadow-[0px_18px_24px_-20px_rgba(0,0,0,0.125),0px_8px_16px_-12px_rgba(0,0,0,0.075)]" />
    </div>
  );
}

function PromptInput1() {
  return (
    <div
      className="absolute bottom-3 box-border content-stretch flex flex-col gap-4 items-center justify-start left-1/2 p-0 translate-x-[-50%] w-[542px]"
      data-name="Prompt Input"
    >
      <Component3DViewControler />
      <PromptInput />
    </div>
  );
}

function UserAvatar() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat mr-[-8px] order-2 relative rounded-[32px] shrink-0 size-8"
      data-name="User Avatar"
      style={{ backgroundImage: `url('${imgUserAvatar}')` }}
    >
      <div className="absolute border-2 border-[#fcfcfc] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function UserAvatar1() {
  return (
    <div
      className="[background-size:128.99%_193.49%] bg-[52.76%_3.56%] bg-no-repeat mr-[-8px] order-1 relative rounded-[32px] shrink-0 size-8"
      data-name="User Avatar"
      style={{ backgroundImage: `url('${imgUserAvatar1}')` }}
    >
      <div className="absolute border-2 border-[#fcfcfc] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function UserActions() {
  return (
    <div
      className="box-border content-stretch flex flex-row-reverse items-center justify-start pl-1 pr-3 py-0 relative shrink-0"
      data-name="User Actions"
    >
      <UserAvatar />
      <UserAvatar1 />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-gradient-to-b box-border content-stretch flex flex-row from-[#e5e5e5] gap-2 items-center justify-center overflow-clip px-6 py-2.5 relative rounded-xl shadow-[0px_3px_4px_-1px_rgba(0,0,0,0.15),0px_0px_0px_1px_#d4d4d4] shrink-0 to-[#e2e2e2]"
      data-name="Button"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#121212] text-[14px] text-center text-nowrap tracking-[-0.28px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Share
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.33)]" />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[12px] relative w-full">
          <UserActions />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function ToggleItem2() {
  return (
    <div
      className="basis-0 bg-[#fcfcfc] grow min-h-px min-w-px relative rounded-lg shadow-[0px_1.25px_3px_0px_rgba(50,50,50,0.1)] shrink-0"
      data-name="toggle item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#121212] text-[13px] text-left text-nowrap tracking-[-0.13px]">
            <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
              Files
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1.25px_1px_0px_inset_#ffffff]" />
    </div>
  );
}

function ToggleItem3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="toggle item"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#7b7b7b] text-[13px] text-left text-nowrap tracking-[-0.13px]">
            <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
              Suggestions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle1() {
  return (
    <div
      className="basis-0 bg-[#f1f1f1] grow min-h-px min-w-px relative rounded-xl shrink-0"
      data-name="Toggle"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[4px] relative w-full">
          <ToggleItem2 />
          <ToggleItem3 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_1.9px_0px_inset_rgba(50,50,50,0.1)]" />
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function ProjectTabs1() {
  return (
    <div className="relative shrink-0 w-60" data-name="Project Tabs">
      <div className="box-border content-stretch flex flex-row items-center justify-between overflow-clip p-[12px] relative w-60">
        <Toggle1 />
      </div>
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PlusAddLarge1() {
  return (
    <div className="relative shrink-0 size-4" data-name="plus, add large">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="plus, add large">
          <path
            d="M8 4V8M8 8V12M8 8H4M8 8H12"
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SmallIconButton() {
  return (
    <div
      className="bg-[#f1f1f1] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[4px] relative rounded-md shrink-0"
      data-name="Small Icon Button"
    >
      <PlusAddLarge1 />
    </div>
  );
}

function MaterialHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-12 items-center justify-between px-4 py-3 relative shrink-0 w-60"
      data-name="Material Header"
    >
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
          Materials
        </p>
      </div>
      <SmallIconButton />
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute bottom-[25.849%] left-[30.8%] right-[29.129%] top-[29.909%]"
      data-name="Group"
    >
      <div className="absolute bottom-[-29.085%] left-[-17.433%] right-[-17.433%] top-[-2.493%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 19 21"
        >
          <g filter="url(#filter0_d_9_4435)" id="Group">
            <path
              d={svgPaths.p29cbda00}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p330c24b0}
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinejoin="round"
              strokeWidth="0.75"
            />
            <path
              d="M13.2107 12.8384V9.16217"
              id="Vector_3"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="0.75"
            />
            <path
              d={svgPaths.p59681be}
              id="Vector_4"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="0.75"
            />
            <path
              d={svgPaths.p70e2840}
              id="Vector_5"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeWidth="0.75"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.7925"
              id="filter0_d_9_4435"
              width="18.374"
              x="0.624994"
              y="0.625"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_9_4435"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_9_4435"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MaterialAddIcon() {
  return (
    <div
      className="absolute left-[204px] size-[34px] top-[19px]"
      data-name="Material Add Icon"
    >
      <Group />
    </div>
  );
}

function AssetItem() {
  return (
    <div
      className="basis-0 bg-[#f1f1f1] grow h-[100px] min-h-px min-w-[98px] relative rounded-2xl shrink-0"
      data-name="Asset item"
    >
      <div className="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-3 h-[100px] items-center justify-start min-w-inherit p-[4px] relative w-full">
          <div
            className="absolute bg-center bg-cover bg-no-repeat left-1/2 size-16 top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="900px (1) 1"
            style={{ backgroundImage: `url('${img900Px11}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function AssetItem1() {
  return (
    <div
      className="basis-0 bg-[#f1f1f1] grow h-[100px] min-h-px min-w-[98px] relative rounded-2xl shrink-0"
      data-name="Asset item"
    >
      <div className="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-3 h-[100px] items-center justify-start min-w-inherit p-[4px] relative w-full">
          <div
            className="absolute bg-center bg-cover bg-no-repeat left-1/2 size-16 top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="900px (1) 1"
            style={{ backgroundImage: `url('${img900Px12}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function AssetItem2() {
  return (
    <div
      className="basis-0 bg-[#f1f1f1] grow h-[100px] min-h-px min-w-[98px] relative rounded-2xl shrink-0"
      data-name="Asset item"
    >
      <div className="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-3 h-[100px] items-center justify-start min-w-inherit p-[4px] relative w-full">
          <div
            className="absolute bg-center bg-cover bg-no-repeat left-1/2 size-16 top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="900px (1) 1"
            style={{ backgroundImage: `url('${img900Px13}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function AssetItem3() {
  return (
    <div
      className="basis-0 bg-[#f1f1f1] grow h-[100px] min-h-px min-w-[98px] relative rounded-2xl shrink-0"
      data-name="Asset item"
    >
      <div className="flex flex-row items-center min-w-inherit overflow-clip relative size-full">
        <div className="[flex-flow:wrap] box-border content-center flex gap-3 h-[100px] items-center justify-start min-w-inherit p-[4px] relative w-full">
          <div
            className="absolute bg-center bg-cover bg-no-repeat left-1/2 size-16 top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="900px (1) 1"
            style={{ backgroundImage: `url('${img900Px14}')` }}
          />
        </div>
      </div>
    </div>
  );
}

function MaterialOptions() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start pb-4 pt-0 px-4 relative shrink-0 w-60"
      data-name="Material Options"
    >
      <AssetItem />
      <AssetItem1 />
      <AssetItem2 />
      <AssetItem3 />
    </div>
  );
}

function MaterialSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Material Section"
    >
      <MaterialHeader />
      <MaterialAddIcon />
      <MaterialOptions />
    </div>
  );
}

function StylesAddIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Styles Add Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="plus, add large">
          <path
            d="M8 4V8M8 8V12M8 8H4M8 8H12"
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function StylesAddContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[4px] relative rounded-md shrink-0"
      data-name="Styles Add Container"
    >
      <StylesAddIcon />
    </div>
  );
}

function StylesHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Styles Header">
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-4 py-3 relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
            <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
              Styles
            </p>
          </div>
          <StylesAddContainer />
        </div>
      </div>
    </div>
  );
}

function StyleItem() {
  return (
    <div
      className="[background-size:100%_157.5%] aspect-[100/100] basis-0 bg-[0%_30.79%] bg-no-repeat grow min-h-16 min-w-16 relative rounded-2xl shrink-0"
      data-name="Style item"
      style={{ backgroundImage: `url('${imgStyleItem}')` }}
    >
      <div className="flex flex-row items-center min-h-inherit min-w-inherit relative size-full">
        <div className="aspect-[100/100] min-h-inherit min-w-inherit size-full" />
      </div>
    </div>
  );
}

function StyleItem1() {
  return (
    <div
      className="aspect-[100/100] basis-0 bg-center bg-cover bg-no-repeat grow min-h-16 min-w-16 relative rounded-2xl shrink-0"
      data-name="Style item"
      style={{ backgroundImage: `url('${imgStyleItem1}')` }}
    >
      <div className="flex flex-row items-center min-h-inherit min-w-inherit relative size-full">
        <div className="aspect-[100/100] min-h-inherit min-w-inherit size-full" />
      </div>
    </div>
  );
}

function StylesOptions() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start pb-4 pt-0 px-4 relative shrink-0 w-60"
      data-name="Styles Options"
    >
      <StyleItem />
      <StyleItem1 />
    </div>
  );
}

function StylesSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Styles Section"
    >
      <StylesHeader />
      <StylesOptions />
    </div>
  );
}

function PlusAddLarge2() {
  return (
    <div className="relative shrink-0 size-4" data-name="plus, add large">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="plus, add large">
          <path
            d="M8 4V8M8 8V12M8 8H4M8 8H12"
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SmallIconButton1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[4px] relative rounded-md shrink-0"
      data-name="Small Icon Button"
    >
      <PlusAddLarge2 />
    </div>
  );
}

function BackgroundHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-12 items-center justify-between px-4 py-3 relative shrink-0 w-60"
      data-name="Background Header"
    >
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
          Backgrounds
        </p>
      </div>
      <SmallIconButton1 />
    </div>
  );
}

function ColorPickerButton() {
  return (
    <div
      className="bg-[#f4f4f4] relative rounded-md shrink-0 size-7"
      data-name="Color Picker Button"
    >
      <div className="absolute border border-[rgba(50,50,50,0.01)] border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function ColorPicker() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Color Picker"
    >
      <div className="absolute border-[0px_1px_0px_0px] border-[rgba(50,50,50,0.01)] border-solid bottom-0 left-0 pointer-events-none right-[-0.5px] top-0" />
      <ColorPickerButton />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
          F4F4F4
        </p>
      </div>
    </div>
  );
}

function OpacityPicker() {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium gap-2 items-center justify-center leading-[0] not-italic px-3 py-0 relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]"
      data-name="Opacity Picker"
    >
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[16px] text-nowrap whitespace-pre">
          100
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[16px] text-nowrap whitespace-pre">
          %
        </p>
      </div>
    </div>
  );
}

function ColorPicker1() {
  return (
    <div
      className="basis-0 bg-[#f1f1f1] grow min-h-px min-w-px relative rounded-[10px] shrink-0"
      data-name="Color picker"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[4px] relative w-full">
          <ColorPicker />
          <OpacityPicker />
        </div>
      </div>
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function BackgroundOptions() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start pb-4 pt-0 px-4 relative shrink-0 w-60"
      data-name="Background Options"
    >
      <ColorPicker1 />
    </div>
  );
}

function BackgroundSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Background Section"
    >
      <BackgroundHeader />
      <BackgroundOptions />
    </div>
  );
}

function PlusAddLarge3() {
  return (
    <div className="relative shrink-0 size-4" data-name="plus, add large">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="plus, add large">
          <path
            d="M8 4V8M8 8V12M8 8H4M8 8H12"
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SmallIconButton2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[4px] relative rounded-md shrink-0"
      data-name="Small Icon Button"
    >
      <PlusAddLarge3 />
    </div>
  );
}

function CameraHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-12 items-center justify-between px-4 py-3 relative shrink-0 w-60"
      data-name="Camera Header"
    >
      <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
          Camera
        </p>
      </div>
      <SmallIconButton2 />
    </div>
  );
}

function ToggleItemSmall() {
  return (
    <div
      className="basis-0 bg-[#fcfcfc] grow min-h-px min-w-px relative rounded-md shadow-[0px_1px_4px_0px_rgba(0,0,0,0.14)] shrink-0"
      data-name="toggle item (small)"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1.5 relative w-full">
          <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] text-left text-nowrap tracking-[-0.12px]">
            <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
              Isometric
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleItemSmall1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="toggle item (small)"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1.5 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#7b7b7b] text-[12px] text-left text-nowrap tracking-[-0.12px]">
            <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
              Perspective
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CameraToggle() {
  return (
    <div
      className="bg-[#f1f1f1] h-9 relative rounded-[10px] shrink-0 w-full"
      data-name="Camera Toggle"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-9 items-center justify-start p-[4px] relative w-full">
          <ToggleItemSmall />
          <ToggleItemSmall1 />
        </div>
      </div>
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function DistortionSlider() {
  return (
    <div
      className="absolute bg-[#f1f1f1] inset-0 rounded-lg"
      data-name="Distortion Slider"
    />
  );
}

function Container() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-row items-center justify-start left-0 pl-0 pr-3 py-0 right-[61px] top-0"
      data-name="Container"
    >
      <div
        className="basis-0 bg-[rgba(123,123,123,0.3)] grow h-9 min-h-px min-w-px mr-[-12px] rounded-lg shrink-0"
        data-name="Distortion Handle"
      />
      <div
        className="bg-[#f8f7f7] h-9 mr-[-12px] relative rounded-md shadow-[0px_0px_2.6px_-1px_rgba(0,0,0,0.17),0px_1px_4px_0px_rgba(0,0,0,0.14)] shrink-0 w-6"
        data-name="Distortion Handle"
      >
        <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_4px_-2px_inset_rgba(0,0,0,0.2)]" />
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="h-9 relative shrink-0 w-[118px]" data-name="Slider">
      <DistortionSlider />
      <Container />
    </div>
  );
}

function ArrowExpandH() {
  return (
    <div className="relative shrink-0 size-4" data-name="arrow-expand-h">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="arrow-expand-h" opacity="0.7">
          <path
            d={svgPaths.p95ef680}
            id="Icon"
            stroke="var(--stroke-0, #7B7B7B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function InputValue() {
  return (
    <div
      className="bg-[#f1f1f1] box-border content-stretch flex flex-row gap-1.5 items-center justify-center overflow-clip pl-2.5 pr-3 py-2.5 relative rounded-[10px] shrink-0"
      data-name="Input value"
    >
      <ArrowExpandH />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#121212] text-[12px] text-nowrap text-right tracking-[-0.12px]">
        <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
          0.283
        </p>
      </div>
    </div>
  );
}

function DistortionSliderContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Distortion Slider Container"
    >
      <Slider />
      <InputValue />
    </div>
  );
}

function DistortionControl() {
  return (
    <div className="relative shrink-0 w-full" data-name="Distortion Control">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center px-1 py-0 relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#121212] text-[11px] text-left text-nowrap tracking-[-0.11px]">
            <p className="adjustLetterSpacing block leading-[16px] whitespace-pre">
              Distortion
            </p>
          </div>
          <DistortionSliderContainer />
        </div>
      </div>
    </div>
  );
}

function CameraOptions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Camera Options">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center pb-3 pt-0 px-4 relative w-full">
          <CameraToggle />
          <DistortionControl />
        </div>
      </div>
    </div>
  );
}

function CameraSection() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Camera Section"
    >
      <CameraHeader />
      <CameraOptions />
    </div>
  );
}

function Sidebar1() {
  return (
    <div
      className="absolute bg-[#fcfcfc] bottom-3 right-3 rounded-[20px] top-3 w-60"
      data-name="Sidebar"
    >
      <div className="box-border content-stretch flex flex-col items-center justify-start overflow-clip p-0 relative size-full">
        <Header />
        <ProjectTabs1 />
        <MaterialSection />
        <StylesSection />
        <BackgroundSection />
        <CameraSection />
      </div>
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function RealTime3DCanvas() {
  return (
    <div
      className="absolute bg-[#f8f7f7] inset-0 overflow-clip rounded-[32px]"
      data-name="Real-time 3D Canvas"
    >
      <CanvasFullScreen09 />
      <ToolbarDefault />
      <Sidebar />
      <PromptInput1 />
      <Sidebar1 />
    </div>
  );
}

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
            <g filter="url(#filter0_d_9_4421)" id="Icon">
              <path d={svgPaths.p26f80700} fill="url(#paint0_linear_9_4421)" />
              <path
                d={svgPaths.p21f6c400}
                stroke="url(#paint1_linear_9_4421)"
                strokeOpacity="0.25"
              />
            </g>
            <path
              d={svgPaths.p39a5bd00}
              id="Icon_2"
              stroke="var(--stroke-0, #FCFCFC)"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="35"
              id="filter0_d_9_4421"
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
                result="effect1_dropShadow_9_4421"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_9_4421"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_9_4421"
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
              id="paint1_linear_9_4421"
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

function ImgDefault() {
  return (
    <div
      className="[background-size:73.33%_73.33%] bg-center bg-no-repeat relative rounded-xl shrink-0 size-[60px]"
      data-name="img/default"
      style={{ backgroundImage: `url('${imgImgDefault}')` }}
    >
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function ImgHover() {
  return (
    <div
      className="[background-size:auto,_73.33%_73.33%] absolute bg-[position:0%_0%,_50%_50%] left-0 rounded-[10px] size-[60px] top-0"
      data-name="img/hover"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(252, 252, 252, 0.15) 0%, rgba(252, 252, 252, 0.15) 100%), url('${imgImgHover}')`,
      }}
    >
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[10px]" />
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
      className="absolute bg-gradient-to-b box-border content-stretch flex flex-row from-[#323232] gap-2 items-center justify-center left-[46px] overflow-clip p-[2px] rounded-[32px] size-5 to-[#121212] top-[-6px]"
      data-name="Small Close Button"
    >
      <CrossedSmallDeleteRemove />
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Image Container">
      <ImgHover />
      <SmallCloseButton />
    </div>
  );
}

function ImageContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Image Container"
    >
      <ImgDefault />
      <ImageContainer />
    </div>
  );
}

function CommentContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Comment Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-[16px] relative w-full">
          <div
            className="-webkit-box css-s4x91j font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[13px] text-left tracking-[-0.13px]"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[1.5]">
              I love this bag, it looks great. Could you make it with leather
              material?
            </p>
          </div>
          <ImageContainer1 />
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
            stroke="var(--stroke-0, #7B7B7B)"
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
      className="relative rounded-[10px] shrink-0 size-8"
      data-name="Comment Input button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[32px] relative size-8">
          <At />
        </div>
      </div>
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

function ArrowTop3() {
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
          <ArrowTop3 />
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
        <CommentContainer1 />
        <ActionContainer />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_0px_0px_inset_#ffffff]" />
      <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_18px_24px_-20px_rgba(0,0,0,0.125),0px_8px_16px_-12px_rgba(0,0,0,0.075)]" />
    </div>
  );
}

function Comment1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-3 items-start justify-start left-[692px] p-0 top-[356px]"
      data-name="Comment"
    >
      <CommentPin />
      <PromptInputDesignDefault />
    </div>
  );
}

export default function CommentImageUploaded() {
  return (
    <div className="relative size-full" data-name="Comment/Image uploaded">
      <RealTime3DCanvas />
      <Comment1 />
    </div>
  );
}