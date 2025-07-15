import { useState, useEffect, useRef } from 'react';
import svgPaths from '../../../imports/svg-y1ys6sfefy';

interface AnnotationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { label: string; feedback_type: string; description: string }) => void;
  area: { x: number; y: number; width: number; height: number } | null;
  position?: { x: number; y: number };
}

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

export function AnnotationDialog({ isOpen, onClose, onSave, area, position }: AnnotationDialogProps) {
  const [comment, setComment] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Focus the input when dialog opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        handleSave();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCancel();
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
  }, [isOpen, comment]);

  const handleSave = () => {
    const trimmedComment = comment.trim();
    if (trimmedComment) {
      onSave({
        label: trimmedComment,
        feedback_type: 'general', // Default feedback type
        description: trimmedComment
      });
    }
    
    // Reset form
    setComment('');
    setIsFocused(false);
    onClose();
  };

  const handleCancel = () => {
    setComment('');
    setIsFocused(false);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  if (!isOpen) return null;

  const defaultPosition = { x: 100, y: 100 };
  const finalPosition = position || defaultPosition;

  return (
    <div 
      ref={containerRef}
      className="fixed z-50 flex items-center gap-3"
      style={{
        left: `${finalPosition.x}px`,
        top: `${finalPosition.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <CommentPin />
      
      <div className="backdrop-blur-[6px] backdrop-filter bg-[#fcfcfc] relative rounded-xl shrink-0 w-[280px] spline-shadow-lg">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start overflow-clip p-[8px] relative w-[280px]">
          <div className="relative shrink-0 w-full">
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-[8px] relative w-full">
                <input
                  ref={inputRef}
                  type="text"
                  value={comment}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="basis-0 font-['Inter',_sans-serif] font-normal grow leading-[16px] min-h-[16px] min-w-0 text-[#121212] text-[13px] text-left tracking-[-0.13px] bg-transparent border-none outline-none placeholder-[#7b7b7b] w-full"
                  placeholder="Add comment..."
                />
                
                {/* Cursor line indicator */}
                {isFocused && (
                  <div className="absolute h-4 left-[15px] top-2 w-0">
                    <div className="absolute bottom-[-3.125%] left-[-0.5px] right-[-0.5px] top-[-3.125%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 2 18"
                      >
                        <path
                          d="M1 1V17"
                          stroke="var(--stroke-0, black)"
                          strokeLinecap="round"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Inset shadow */}
        <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_0px_0px_inset_#ffffff]" />
        
        {/* Border and outer shadow */}
        <div className="absolute border border-[#ececec] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_18px_24px_-20px_rgba(0,0,0,0.125),0px_8px_16px_-12px_rgba(0,0,0,0.075)]" />
        
        {/* Hint text */}
        {comment.length === 0 && !isFocused && (
          <div className="absolute bottom-[-24px] left-0 right-0 text-center">
            <p className="text-xs text-muted-foreground">
              Type your comment and press Enter
            </p>
          </div>
        )}
      </div>
    </div>
  );
}