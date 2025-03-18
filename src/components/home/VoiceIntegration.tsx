
import React from 'react';
import { Volume2, Languages } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VoiceIntegration = () => {
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

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <Card className="bg-white dark:bg-gray-900 max-w-md w-full shadow-lg">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="rounded-full bg-cookblue-100 dark:bg-cookblue-900/30 p-4 mb-4">
                <Volume2 size={32} className="text-cookblue-600 dark:text-cookblue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Voice Instructions</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Listen to recipe instructions step by step, allowing you to cook without having to read or touch your device.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 max-w-md w-full shadow-lg">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="rounded-full bg-cookblue-100 dark:bg-cookblue-900/30 p-4 mb-4">
                <Languages size={32} className="text-cookblue-600 dark:text-cookblue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Instructions are available in both Tamil and English, making cooking accessible to a wider audience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VoiceIntegration;
