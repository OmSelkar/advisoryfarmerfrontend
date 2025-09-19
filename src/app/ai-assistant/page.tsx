"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  Mic,
  RotateCcw,
  MoreVertical,
  TrendingUp,
  Sprout,
  Bug,
  Cloud,
  Paperclip,
  X,
  MicOff,
  Image,
} from "lucide-react";
import { AppLayout } from "@/components/app-layout";

/* -------------------------
   Types
------------------------- */
interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
  attachments?: { name: string; type: string; url: string }[];
}

/* -------------------------
   Suggestion cards data
------------------------- */
const suggestionCards = [
  {
    title: "Market Prices",
    description: "What's the current price for rubber in Kottayam?",
    icon: TrendingUp,
    color: "text-teal-600",
  },
  {
    title: "Fertilizer Advice",
    description: "Best fertilizer for coconut trees this season?",
    icon: Sprout,
    color: "text-teal-600",
  },
  {
    title: "Pest Identification",
    description: "Identify this pest on my tomato plant (image).",
    icon: Bug,
    color: "text-teal-600",
  },
  {
    title: "Weather Forecast",
    description: "Will it rain in my area in the next 3 days?",
    icon: Cloud,
    color: "text-teal-600",
  },
];

/* -------------------------
   Elegant Input Component
------------------------- */
function ElegantInput({
  onSend,
  placeholder = "Ask the AI assistant...",
  maxLength = 2000,
}: {
  onSend: (message: string, attachments?: File[]) => Promise<void> | void;
  placeholder?: string;
  maxLength?: number;
}) {
  const [value, setValue] = useState<string>("");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    const scrollHeight = ta.scrollHeight;
    ta.style.height = Math.min(scrollHeight, 100) + "px";
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleSend();
    }
  };

  const handleSend = async () => {
    const trimmed = value.trim();
    if (!trimmed && attachments.length === 0) return;
    
    try {
      setIsSending(true);
      await onSend(trimmed, attachments);
      setValue("");
      setAttachments([]);
      // Focus back to input after sending
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    } catch (err) {
      console.error("send failed", err);
    } finally {
      setIsSending(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length === 0) return;
    
    // Validate file types and sizes
    const validFiles = files.filter(file => {
      const isValidType = file.type.startsWith('image/') || file.type.startsWith('video/') || file.type === 'application/pdf';
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      return isValidType && isValidSize;
    });
    
    setAttachments((prev) => [...prev, ...validFiles]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        const file = new File([blob], 'voice-recording.wav', { type: 'audio/wav' });
        setAttachments((prev) => [...prev, file]);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please check your permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setMediaRecorder(null);
      setIsRecording(false);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-2 sm:p-3 safe-area-inset-bottom">
      {/* Attachments preview */}
      {attachments.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {attachments.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 text-sm"
            >
              {file.type.startsWith('image/') ? (
                <Image className="w-4 h-4 text-gray-600" />
              ) : (
                <Paperclip className="w-4 h-4 text-gray-600" />
              )}
              <span className="truncate max-w-[120px]">{file.name}</span>
              <button
                onClick={() => removeAttachment(index)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-end gap-2">
        {/* Input container */}
        <div className="flex-1 bg-gray-100 rounded-2xl border border-gray-200 min-h-[44px] flex items-center">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            maxLength={maxLength}
            placeholder={placeholder}
            disabled={isSending}
            className="flex-1 bg-transparent border-0 outline-none resize-none px-4 py-3 text-base placeholder:text-gray-500 max-h-[100px] overflow-y-auto"
            rows={1}
            style={{ lineHeight: "1.4" }}
          />
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 flex items-center justify-center transition-colors touch-manipulation"
            aria-label="Attach files"
          >
            <Paperclip className="w-5 h-5 text-gray-600" />
          </button>

          <button
            type="button"
            onClick={toggleRecording}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors touch-manipulation ${
              isRecording 
                ? 'bg-red-100 hover:bg-red-200 active:bg-red-300' 
                : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'
            }`}
            aria-label={isRecording ? "Stop recording" : "Start voice recording"}
          >
            {isRecording ? (
              <MicOff className="w-5 h-5 text-red-600" />
            ) : (
              <Mic className="w-5 h-5 text-gray-600" />
            )}
          </button>

          <button
            onClick={handleSend}
            disabled={isSending || (value.trim() === "" && attachments.length === 0)}
            className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 active:from-blue-700 active:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all touch-manipulation"
            aria-label="Send message"
          >
            {isSending ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,video/*,.pdf"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

/* -------------------------
   Page Component
------------------------- */
export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const addMessage = (m: Message) => {
    setMessages((prev) => [...prev, m]);
    // Scroll to bottom after adding message
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  async function handleSend(message: string, attachments?: File[]) {
    if (!message.trim() && !attachments?.length) return;
    
    const userMsg: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
      attachments: attachments?.map(file => ({
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file)
      }))
    };
    addMessage(userMsg);

    // Simulate AI response
    await new Promise((res) => setTimeout(res, 1000));
    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      content: `Thanks for your message${attachments?.length ? ` and ${attachments.length} attachment(s)` : ''}! I'm processing your request about: "${message}". This is a demo response - in a real implementation, I would provide helpful information about agriculture, market prices, weather, or pest identification based on your query.`,
      sender: "assistant",
      timestamp: new Date(),
    };
    addMessage(aiMsg);
  }

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <AppLayout>
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      {/* Header - Fixed */}
      <div className="sticky top-0 z-10 px-4 py-3 bg-white border-b border-gray-200 flex items-center justify-between safe-area-inset-top">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">AI Assistant</h2>
            <p className="text-xs text-gray-500">Online</p>
          </div>
        </div>
        <div className="flex gap-1">
          <button 
            onClick={clearChat}
            className="w-9 h-9 rounded-full hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center transition-colors touch-manipulation"
            aria-label="Clear chat"
          >
            <RotateCcw className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-9 h-9 rounded-full hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center transition-colors touch-manipulation">
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Messages area - Scrollable */}
      <div className="flex-1 overflow-y-auto overscroll-contain">
        {/* Welcome screen */}
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-full p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-xl font-bold mb-2">How can I help you?</h2>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Ask me about crops, pests, market prices, weather forecasts, or upload images for plant disease identification.
              </p>
            </div>

            {/* Suggestion cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
              {suggestionCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-teal-200 hover:shadow-md active:bg-gray-50 transition-all duration-200 touch-manipulation"
                  onClick={() => handleSend(card.description)}
                >
                  <div className="flex items-start gap-3">
                    <card.icon className={`w-5 h-5 ${card.color} mt-0.5 flex-shrink-0`} />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold mb-1">{card.title}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.length > 0 && (
          <div className="space-y-4 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-teal-600" />
                  </div>
                )}
                
                <div className={`max-w-[85%] sm:max-w-[75%] ${message.sender === "user" ? "order-2" : ""}`}>
                  {/* Attachments */}
                  {message.attachments && message.attachments.length > 0 && (
                    <div className="mb-2 grid grid-cols-2 gap-2">
                      {message.attachments.map((attachment, idx) => (
                        <div key={idx} className="relative">
                          {attachment.type.startsWith('image/') ? (
                            <Image
                              src={attachment.url}
                              alt={attachment.name}
                              className="w-full h-32 object-cover rounded-lg border"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-16 bg-gray-100 rounded-lg border flex items-center justify-center">
                              <div className="text-center">
                                <Paperclip className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                                <p className="text-xs text-gray-600 truncate px-2">{attachment.name}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Message content */}
                  {message.content && (
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed break-words ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.content}
                    </div>
                  )}
                  
                  {/* Timestamp */}
                  <p className={`text-xs text-gray-400 mt-1 ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {message.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-semibold">U</span>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input - Fixed at bottom */}
      <ElegantInput onSend={handleSend} />
    </div>
    </AppLayout>
  );
}