
import React, { useState, useEffect } from 'react';
import { Volume2, Languages, Play, Pause, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useSpeechService, Language } from '@/services/speechService';
import { Alert, AlertDescription } from '@/components/ui/alert';

const VoiceIntegration = () => {
  const [isPlayingEnglish, setIsPlayingEnglish] = useState(false);
  const [isPlayingTamil, setIsPlayingTamil] = useState(false);
  const { toast } = useToast();
  const { speak, stop, isSupported } = useSpeechService();
  
  // Sample text examples
  const sampleEnglishText = "First, bring a large pot of salted water to a boil. Add pasta and cook according to package instructions until al dente. Meanwhile, in a large skillet, melt butter over medium heat. Add minced garlic and sauté until fragrant, but not browned.";
  
  const sampleTamilText = "முதலில், உப்பு சேர்த்த அதிக அளவு தண்ணீரை கொதிக்க விடவும். பாஸ்தாவை சேர்த்து பேக்கேஜ் அறிவுறுத்தல்களின்படி அல் டெண்டே வரை சமைக்கவும். அதே நேரத்தில், ஒரு பெரிய கிடைமட்ட வாணலியில், நடுத்தர வெப்பத்தில் வெண்ணெய் உருக்கவும். நறுக்கிய பூண்டு சேர்த்து மணம் வரும் வரை, ஆனால் பழுப்பு நிறமாகாமல் வதக்கவும்.";
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  const handlePlayEnglish = async () => {
    if (isPlayingEnglish) {
      stop();
      setIsPlayingEnglish(false);
      toast({
        title: "Voice instruction stopped",
        description: "English voice instruction has been paused",
      });
    } else {
      setIsPlayingEnglish(true);
      toast({
        title: "Voice instruction playing",
        description: "Playing recipe instructions in English",
      });
      
      try {
        await speak({
          text: sampleEnglishText,
          language: Language.ENGLISH,
        });
        setIsPlayingEnglish(false);
      } catch (error) {
        setIsPlayingEnglish(false);
        console.error("English playback error:", error);
      }
    }
  };
  
  const handlePlayTamil = async () => {
    if (isPlayingTamil) {
      stop();
      setIsPlayingTamil(false);
      toast({
        title: "Voice instruction stopped",
        description: "Tamil voice instruction has been paused",
      });
    } else {
      setIsPlayingTamil(true);
      toast({
        title: "Voice instruction playing",
        description: "Playing recipe instructions in Tamil",
      });
      
      try {
        await speak({
          text: sampleTamilText,
          language: Language.TAMIL,
          rate: 0.9, // Slightly slower for Tamil
        });
        setIsPlayingTamil(false);
      } catch (error) {
        setIsPlayingTamil(false);
        console.error("Tamil playback error:", error);
      }
    }
  };

  return (
    <section className="py-16 bg-cookblue-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Multilingual Voice Instructions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Follow recipes hands-free with our voice integration feature in both Tamil and English.
          </p>
        </div>

        {!isSupported && (
          <Alert variant="destructive" className="mb-8 max-w-2xl mx-auto">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Your browser doesn't support voice synthesis. Please try a modern browser like Chrome, Edge, or Safari.
            </AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <Card className="bg-white dark:bg-gray-900 max-w-md w-full shadow-lg">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="rounded-full bg-cookblue-100 dark:bg-cookblue-900/30 p-4 mb-4">
                <Volume2 size={32} className="text-cookblue-600 dark:text-cookblue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Voice Instructions</h3>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                Listen to recipe instructions step by step, allowing you to cook without having to read or touch your device.
              </p>
              <Button 
                className="bg-cookblue-500 hover:bg-cookblue-600"
                onClick={handlePlayEnglish}
                disabled={!isSupported || isPlayingTamil}
              >
                {isPlayingEnglish ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                {isPlayingEnglish ? 'Stop English Sample' : 'Play English Sample'}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 max-w-md w-full shadow-lg">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="rounded-full bg-cookblue-100 dark:bg-cookblue-900/30 p-4 mb-4">
                <Languages size={32} className="text-cookblue-600 dark:text-cookblue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                Instructions are available in both Tamil and English, making cooking accessible to a wider audience.
              </p>
              <Button 
                className="bg-cookblue-500 hover:bg-cookblue-600"
                onClick={handlePlayTamil}
                disabled={!isSupported || isPlayingEnglish}
              >
                {isPlayingTamil ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                {isPlayingTamil ? 'Stop Tamil Sample' : 'Play Tamil Sample'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VoiceIntegration;
