import { useState, useRef, useEffect } from 'react';
import { Send, Upload, Paperclip, Mic, Plus, Zap, ChevronDown } from 'lucide-react';
import { Button } from '../../ui/button';
import { Textarea } from '../../ui/textarea';
import { ScrollArea } from '../../ui/scroll-area';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  message_type: string;
  created_at: string;
  referenced_images?: number[];
}

interface ChatSidebarProps {
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
  onUploadImage: (file: File) => void;
  isLoading: boolean;
}

export function ChatSidebar({
  messages,
  onSendMessage,
  onUploadImage,
  isLoading
}: ChatSidebarProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUploadImage(file);
      // Reset input so same file can be uploaded again
      e.target.value = '';
    }
  };

  const formatMessageContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('•')) {
        return (
          <div key={index} className="flex items-start gap-2 my-1">
            <span className="text-muted-foreground mt-1">•</span>
            <span>{line.substring(1).trim()}</span>
          </div>
        );
      } else if (line.includes('**') && line.includes('**')) {
        const parts = line.split('**');
        return (
          <div key={index} className="my-1">
            {parts.map((part, partIndex) => (
              <span key={partIndex} className={partIndex % 2 === 1 ? 'font-semibold' : ''}>
                {part}
              </span>
            ))}
          </div>
        );
      } else {
        return line ? <div key={index} className="my-1">{line}</div> : <div key={index} className="h-2" />;
      }
    });
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-500" />
              <span className="font-medium text-foreground spline-text-sm">
                AI Analysis
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="spline-text-xs text-muted-foreground">Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-foreground text-background'
                    : 'bg-secondary text-foreground'
                }`}
              >
                <div className="spline-text-sm">
                  {formatMessageContent(message.content)}
                </div>
                <div className="mt-2 spline-text-xs text-muted-foreground">
                  {new Date(message.created_at).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-secondary text-foreground rounded-xl px-4 py-3 max-w-[85%]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse delay-200"></div>
                  </div>
                  <span className="spline-text-sm text-muted-foreground">Analyzing...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        <div className="space-y-3">
          {/* Message Input */}
          <div className="relative">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe your design analysis needs..."
              className="min-h-[60px] resize-none pr-12 bg-input-background border border-border rounded-xl spline-text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute bottom-2 right-2 w-8 h-8 p-0 spline-gradient spline-shadow-button spline-shadow-inset"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="w-8 h-8 p-0 border border-border rounded-xl"
              >
                <Plus className="w-4 h-4" />
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              
              <Button
                variant="ghost"
                size="sm"
                disabled={isLoading}
                className="w-8 h-8 p-0"
              >
                <Mic className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <span className="spline-text-xs text-muted-foreground">
                {input.length}/2000
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading}
                className="spline-text-xs"
              >
                <Upload className="w-3 h-3 mr-1" />
                Upload Image (Max 5)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}