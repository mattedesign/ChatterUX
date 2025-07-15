import { useState } from 'react';
import { ArrowUp, Plus, AtSign, Smile, Mic, ChevronDown, Zap } from 'lucide-react';
import { Button } from '../../ui/button';
import { Textarea } from '../../ui/textarea';

interface FloatingChatInputProps {
  onSendMessage: (message: string) => void;
  onUploadImage: (file: File) => void;
  isLoading: boolean;
}

export function FloatingChatInput({ 
  onSendMessage, 
  onUploadImage, 
  isLoading 
}: FloatingChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUploadImage(file);
    }
  };

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[542px] z-50">
      <div className="space-y-4">
        {/* 3D View Controller */}
        <div className="flex justify-center">
          <div className="bg-card border border-border rounded-3xl px-5 py-3.5 spline-shadow-sm">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6.14052 12.1928L2.91667 8.96898C2.39597 8.44828 2.39597 7.60406 2.91667 7.08336L6.14052 3.8595M3.14052 8.02616H13.4739" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="w-[60px] h-3 relative">
                <svg viewBox="0 0 62 14" className="w-full h-full">
                  <g>
                    <path d="M1 4L1 10" opacity="0.3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
                    <path d="M11 1V13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
                    <path d="M21 4L21 10" opacity="0.3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
                    <path d="M31 4L31 10" opacity="0.3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
                    <path d="M41 4L41 10" opacity="0.3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
                    <path d="M51 1V13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
                    <path d="M61 4L61 10" opacity="0.3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"/>
                  </g>
                </svg>
              </div>
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M9.85946 3.8595L13.0833 7.08334C13.604 7.60404 13.604 8.44826 13.0833 8.96896L9.85946 12.1928M12.8595 8.02616H2.52612" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="bg-card border border-border rounded-3xl spline-shadow-lg backdrop-blur-sm backdrop-filter">
          <div className="p-3">
            {/* Message Input */}
            <div className="mb-6">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your design analysis needs..."
                className="w-full min-h-[60px] bg-transparent border-none outline-none resize-none text-[13px] leading-6 text-foreground placeholder:text-muted-foreground"
                disabled={isLoading}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Upload Button */}
                <label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={isLoading}
                  />
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-10 h-10 p-0 border border-border rounded-xl"
                    asChild
                  >
                    <span>
                      <Plus className="w-5 h-5" />
                    </span>
                  </Button>
                </label>

                {/* AI Model Dropdown */}
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-emerald-500" />
                    <span className="text-[14px] font-medium leading-5 tracking-[-0.14px] text-foreground">
                      AI Analysis
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Voice Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-10 h-10 p-0"
                >
                  <Mic className="w-5 h-5 text-muted-foreground" />
                </Button>

                {/* Send Button */}
                <Button 
                  onClick={handleSubmit}
                  disabled={!message.trim() || isLoading}
                  className="w-10 h-10 p-0 spline-gradient spline-shadow-button spline-shadow-inset"
                >
                  <ArrowUp className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}