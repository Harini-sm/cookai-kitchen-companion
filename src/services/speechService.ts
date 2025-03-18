
// Web Speech API Service for text-to-speech
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export enum Language {
  ENGLISH = 'en-US',
  TAMIL = 'ta-IN'
}

interface SpeechOptions {
  text: string;
  language: Language;
  rate?: number;
  pitch?: number;
  volume?: number;
}

export const useSpeechService = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();
  
  // Check if browser supports speech synthesis
  const isSupported = 'speechSynthesis' in window;
  
  // Speak text function
  const speak = ({ 
    text, 
    language, 
    rate = 1, 
    pitch = 1, 
    volume = 1 
  }: SpeechOptions): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!isSupported) {
        toast({
          title: "Speech Not Supported",
          description: "Your browser does not support the Speech Synthesis API.",
          variant: "destructive",
        });
        reject(new Error("Speech synthesis not supported"));
        return;
      }
      
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;
      
      setIsSpeaking(true);
      
      utterance.onend = () => {
        setIsSpeaking(false);
        resolve();
      };
      
      utterance.onerror = (event) => {
        setIsSpeaking(false);
        toast({
          title: "Speech Error",
          description: `An error occurred: ${event.error}`,
          variant: "destructive",
        });
        reject(new Error(`Speech synthesis error: ${event.error}`));
      };
      
      window.speechSynthesis.speak(utterance);
    });
  };
  
  // Stop speaking
  const stop = (): void => {
    if (isSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };
  
  return {
    speak,
    stop,
    isSpeaking,
    isSupported
  };
};
