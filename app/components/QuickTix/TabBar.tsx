import React from 'react';
import { TabBarProps } from './types';

export const TabBar: React.FC<TabBarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex border-b">
      <button 
        className={`flex-1 py-3 text-center ${activeTab === 'search' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
        onClick={() => setActiveTab('search')}
      >
        Search
      </button>
      <button 
        className={`flex-1 py-3 text-center ${activeTab === 'browse' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
        onClick={() => setActiveTab('browse')}
      >
        Browse
      </button>
      <button 
        className={`flex-1 py-3 text-center ${activeTab === 'map' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
        onClick={() => setActiveTab('map')}
      >
        Map
      </button>
    </div>
  );
}; 