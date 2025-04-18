import React from 'react';
import { Search, Clock } from 'lucide-react';
import { SearchViewProps } from './types';

export const SearchView: React.FC<SearchViewProps> = ({ popularSearches }) => {
  return (
    <div className="p-4">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Find a movie, genre, or showtime..."
          className="w-full p-3 pl-4 pr-10 border rounded-lg"
        />
        <Search className="absolute right-3 top-3 text-gray-400" size={20} />
      </div>
      
      <div className="mb-4">
        <p className="text-gray-500 mb-2">Try searching for:</p>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search, index) => (
            <button key={index} className="bg-gray-100 rounded-full px-3 py-1 text-sm">
              {search}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-500 mb-2">Quick filters:</p>
        <div className="flex overflow-x-auto gap-2 pb-2">
          <button className="bg-teal-100 text-teal-700 rounded-full px-3 py-1 text-sm whitespace-nowrap">
            Open now
          </button>
          <button className="bg-teal-100 text-teal-700 rounded-full px-3 py-1 text-sm whitespace-nowrap">
            New releases
          </button>
          <button className="bg-teal-100 text-teal-700 rounded-full px-3 py-1 text-sm whitespace-nowrap">
            Family friendly
          </button>
          <button className="bg-teal-100 text-teal-700 rounded-full px-3 py-1 text-sm whitespace-nowrap">
            Under 2 hours
          </button>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium">Recent searches</p>
          <button className="text-teal-500 text-sm">Clear</button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center p-2 bg-gray-50 rounded">
            <Clock size={16} className="text-gray-400 mr-2" />
            <span>Action movies with Tom Cruise</span>
          </div>
          <div className="flex items-center p-2 bg-gray-50 rounded">
            <Clock size={16} className="text-gray-400 mr-2" />
            <span>Comedy movies playing tonight</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 