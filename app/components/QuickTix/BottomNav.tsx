import React from 'react';
import { Film, Map, Heart, List } from 'lucide-react';
import { BottomNavProps } from './types';

export const BottomNav: React.FC<BottomNavProps> = ({
  activeScreen,
  activeTab,
  setActiveScreen,
  setActiveTab,
  watchlist
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      <button 
        className={`flex flex-col items-center p-2 ${activeScreen === 'home' && activeTab === 'browse' ? 'text-teal-500' : 'text-gray-500'}`}
        onClick={() => {
          setActiveScreen('home');
          setActiveTab('browse');
        }}
      >
        <Film size={20} />
        <span className="text-xs mt-1">Movies</span>
      </button>
      <button 
        className={`flex flex-col items-center p-2 ${activeScreen === 'home' && activeTab === 'map' ? 'text-teal-500' : 'text-gray-500'}`}
        onClick={() => {
          setActiveScreen('home');
          setActiveTab('map');
        }}
      >
        <Map size={20} />
        <span className="text-xs mt-1">Theaters</span>
      </button>
      <button 
        className="flex flex-col items-center p-2 text-gray-500"
        onClick={() => setActiveScreen('watchlist')}
      >
        <Heart size={20} className={watchlist.length > 0 ? "text-teal-500 fill-current" : ""} />
        <span className="text-xs mt-1">Watchlist</span>
      </button>
      <button 
        className="flex flex-col items-center p-2 text-gray-500"
      >
        <List size={20} />
        <span className="text-xs mt-1">My Tickets</span>
      </button>
    </div>
  );
}; 