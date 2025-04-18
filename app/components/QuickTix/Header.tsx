import React from 'react';
import { ChevronLeft, MessageCircle } from 'lucide-react';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = ({ activeScreen, setActiveScreen }) => {
  return (
    <div className="bg-teal-500 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">QuickTix</div>
      <div className="flex space-x-2">
        {activeScreen !== 'home' && (
          <button 
            onClick={() => setActiveScreen('home')} 
            className="text-white bg-teal-600 rounded-full p-2"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        <button className="text-white bg-teal-600 rounded-full p-2">
          <MessageCircle size={20} />
        </button>
      </div>
    </div>
  );
}; 