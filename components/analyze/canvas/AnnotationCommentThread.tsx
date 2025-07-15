import { useState, useRef, useEffect } from 'react';
import svgPaths from '../../../imports/svg-j3y3rsss51';
import imgProfileImage from "figma:asset/17f55339ce978d6a7fb4e5c8db5546d4e2393b2a.png";
import imgProfileImage1 from "figma:asset/8bb256593f094583362e58ff74b681d9323cfc08.png";
import imgProfileImage2 from "figma:asset/9d6780f008326e052464d152ca5d3dd934b6ec59.png";

interface AnnotationCommentThreadProps {
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
  annotation: {
    id: string;
    label: string;
    feedback_type?: string;
    description?: string;
    created_at: string;
  };
  onReply?: (message: string) => void;
}

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

function UserInfo({ name, timeAgo }: { name: string; timeAgo: string }) {
  return (
    <div
      className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium gap-2 items-center justify-start p-0 relative shrink-0 text-nowrap w-full"
      data-name="User Info"
    >
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[12px] tracking-[-0.12px]">
        <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[16px] overflow-inherit text-nowrap whitespace-pre">
          {name}
        </p>
      </div>
      <div className="overflow-ellipsis overflow-hidden relative shrink-0 text-[#7b7b7b] text-[11px] tracking-[-0.11px]">
        <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[16px] overflow-inherit text-nowrap whitespace-pre">
          {timeAgo}
        </p>
      </div>
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

function SmallCloseButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="absolute bg-gradient-to-b box-border content-stretch flex flex-row from-[#323232] gap-2 items-center justify-center overflow-clip p-[2px] right-2 rounded-[32px] size-5 to-[#121212] top-2 cursor-pointer hover:from-[#404040] hover:to-[#202020] transition-all duration-200"
      data-name="Small Close Button"
      onClick={onClick}
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

function SendButton({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <div
      className={`bg-gradient-to-b from-[#e5e5e5] relative rounded-[10px] shadow-[0px_3px_4px_-1px_rgba(0,0,0,0.15),0px_0px_0px_1px_#d4d4d4] shrink-0 size-8 to-[#e2e2e2] cursor-pointer transition-all duration-200 ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:from-[#e8e8e8] hover:to-[#e5e5e5] active:scale-95'
      }`}
      data-name="Send Button"
      onClick={!disabled ? onClick : undefined}
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

function getTimeAgo(dateString: string): string {
  const now = new Date();
  const created = new Date(dateString);
  const diffInMinutes = Math.floor((now.getTime() - created.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d ago`;
}

function generateAIResponse(annotation: any): string {
  const feedbackTypeResponses = {
    usability: "This area could benefit from clearer visual hierarchy and simplified user flow. Consider reducing cognitive load by grouping related elements and using familiar interaction patterns.",
    accessibility: "To improve accessibility, ensure this area meets WCAG guidelines with proper contrast ratios, keyboard navigation support, and screen reader compatibility.",
    visual_design: "The visual design could be enhanced with better spacing, typography scale, and color consistency. Consider using a more systematic approach to maintain visual harmony.",
    content: "The content structure could be optimized for better readability and information hierarchy. Consider breaking down complex information into digestible chunks.",
    performance: "This area might impact loading performance. Consider optimizing images, reducing JavaScript execution, and implementing lazy loading where appropriate.",
    conversion: "To improve conversion rates, make the call-to-action more prominent and reduce friction in the user journey. Consider A/B testing different approaches.",
    mobile: "For better mobile experience, ensure touch targets are at least 44px, content is readable without zooming, and interactions work well with gestures.",
    general: "This area shows good potential for UX improvements. Focus on user needs, clear information architecture, and intuitive interaction patterns."
  };

  const baseResponse = feedbackTypeResponses[annotation.feedback_type as keyof typeof feedbackTypeResponses] || feedbackTypeResponses.general;
  
  if (annotation.description) {
    return `${baseResponse}\n\nRegarding "${annotation.description}" - I'd recommend conducting user testing to validate these assumptions and gather real user feedback on this specific concern.`;
  }
  
  return baseResponse;
}

export function AnnotationCommentThread({ 
  isOpen, 
  onClose, 
  position, 
  annotation, 
  onReply 
}: AnnotationCommentThreadProps) {
  const [replyText, setReplyText] = useState('');
  const [showAIResponse, setShowAIResponse] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  const handleSendReply = () => {
    if (replyText.trim() && onReply) {
      onReply(replyText.trim());
      setReplyText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  if (!isOpen) return null;

  const aiResponse = generateAIResponse(annotation);

  return (
    <div 
      ref={containerRef}
      className="fixed z-50 flex items-start gap-3"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <CommentPin />
      
      <div
        className="backdrop-blur-[6px] backdrop-filter bg-[#fcfcfc] relative rounded-[18px] shrink-0 w-[280px]"
        data-name="Prompt Input/Design/Default"
      >
        <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[280px]">
          {/* User's Original Comment */}
          <div
            className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-[16px] relative shrink-0 w-[280px]"
            data-name="Comment item"
          >
            <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <ProfileImage2 />
            <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
              <UserInfo name="You" timeAgo={getTimeAgo(annotation.created_at)} />
              <div className="-webkit-box css-s4x91j font-['Inter:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[13px] tracking-[-0.13px] w-full">
                <p className="block leading-[1.5]">
                  {annotation.description || annotation.label}
                  {annotation.feedback_type && annotation.feedback_type !== 'general' && (
                    <span className="ml-2 text-[#7b7b7b]">
                      #{annotation.feedback_type.replace('_', ' ')}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <SmallCloseButton onClick={onClose} />

          {/* AI Response */}
          {showAIResponse && (
            <div
              className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-[16px] relative shrink-0 w-[280px]"
              data-name="Comment item"
            >
              <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
              <ProfileImage3 />
              <div className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic p-0 relative shrink-0 text-left">
                <UserInfo name="Figmant" timeAgo="1s" />
                <div className="-webkit-box css-s4x91j font-['Inter:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[0px] tracking-[-0.13px] w-full">
                  <p className="leading-[1.5] text-[13px]">
                    {aiResponse.split('\n').map((line, index) => (
                      <span key={index}>
                        {line.includes('Regarding') ? (
                          <>
                            <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#3582ff] tracking-[-0.13px]">
                              {line.split(' ')[0]} 
                            </span>
                            {line.substring(line.indexOf(' '))}
                          </>
                        ) : (
                          line
                        )}
                        {index < aiResponse.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Reply Input */}
          <div
            className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-[16px] relative shrink-0 w-[280px]"
            data-name="Comment item"
          >
            <div className="absolute border-[#ececec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div
              className="[background-size:100%_150%] bg-left bg-no-repeat rounded-[32px] shrink-0 size-8"
              data-name="Profile Image"
              style={{ backgroundImage: `url('${imgProfileImage1}')` }}
            />
            <div
              className="basis-0 bg-[#f1f1f1] grow min-h-px min-w-px relative rounded-xl shrink-0"
              data-name="Prompt Input/Design/Default"
            >
              <div className="flex flex-row items-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-[6px] relative w-full">
                  <div
                    className="basis-0 grow min-h-px min-w-px relative shrink-0"
                    data-name="Reply Input"
                  >
                    <div className="relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-[8px] relative w-full">
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="-webkit-box basis-0 css-b22jdx font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[13px] text-left tracking-[-0.13px] bg-transparent border-none outline-none placeholder-[#7b7b7b] w-full"
                          placeholder="Reply"
                        />
                      </div>
                    </div>
                  </div>
                  <SendButton 
                    onClick={handleSendReply} 
                    disabled={!replyText.trim()} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_0px_0px_inset_#ffffff]" />
        <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_18px_24px_-20px_rgba(0,0,0,0.125),0px_8px_16px_-12px_rgba(0,0,0,0.075)]" />
      </div>
    </div>
  );
}