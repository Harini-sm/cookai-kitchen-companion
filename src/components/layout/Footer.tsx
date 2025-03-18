
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat size={24} className="text-cookblue-500" />
              <span className="font-bold text-xl text-cookblue-700 dark:text-cookblue-300">CookAI</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              The Smart Way to Find Recipes!
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pantry-prodigy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cookblue-500 dark:hover:text-cookblue-300">
                  Pantry Prodigy
                </Link>
              </li>
              <li>
                <Link to="/plate-prodigy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cookblue-500 dark:hover:text-cookblue-300">
                  Plate Prodigy
                </Link>
              </li>
              <li>
                <Link to="/nutrient-prodigy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cookblue-500 dark:hover:text-cookblue-300">
                  Nutrient Prodigy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cookblue-500 dark:hover:text-cookblue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cookblue-500 dark:hover:text-cookblue-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cookblue-500 dark:hover:text-cookblue-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={14} className="text-gray-600 dark:text-gray-400" />
                <a href="mailto:info@cookai.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cookblue-500 dark:hover:text-cookblue-300">
                  info@cookai.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Github size={14} className="text-gray-600 dark:text-gray-400" />
                <a href="https://github.com/cookai" target="_blank" rel="noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-cookblue-500 dark:hover:text-cookblue-300">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} CookAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
