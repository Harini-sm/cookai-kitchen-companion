
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SignupForm from '@/components/auth/SignupForm';
import { ChefHat } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignupSuccess = () => {
    navigate('/');
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-8 text-center">
              <ChefHat size={48} className="mx-auto text-cookblue-500" />
              <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                Join CookAI Today
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Create an account to unlock personalized recipe recommendations
              </p>
            </div>
            
            <SignupForm onSuccess={handleSignupSuccess} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
