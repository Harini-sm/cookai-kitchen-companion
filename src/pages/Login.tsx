
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import LoginForm from '@/components/auth/LoginForm';
import { ChefHat } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
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
                Welcome back to CookAI
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Log in to access your personalized recipes and saved favorites
              </p>
            </div>
            
            <LoginForm onSuccess={handleLoginSuccess} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
