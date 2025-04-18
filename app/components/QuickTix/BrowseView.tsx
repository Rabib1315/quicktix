import React from 'react';
import { Star } from 'lucide-react';
import { BrowseViewProps } from './types';

export const BrowseView: React.FC<BrowseViewProps> = ({
  genres,
  movies,
  setSelectedMovie,
  setActiveScreen,
  watchlist,
  toggleWatchlist
}) => {
  return (
    <div>
      <div className="p-4 overflow-x-auto flex space-x-2 whitespace-nowrap border-b">
        {genres.map((genre, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full ${
              genre === 'All' ? 'bg-teal-500 text-white' : 'bg-gray-100'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">All Movies</h2>
          <div className="flex items-center text-sm">
            <span className="mr-2">Sort by:</span>
            <select className="border rounded p-1">
              <option>Popularity</option>
              <option>Rating</option>
              <option>Release Date</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="bg-white rounded-lg overflow-hidden shadow"
              onClick={() => {
                setSelectedMovie(movie);
                setActiveScreen('movie');
              }}
            >
              <img src={movie.image} alt={movie.title} className="w-full h-auto" />
              <div className="p-2">
                <h3 className="font-bold truncate">{movie.title}</h3>
                <div className="flex items-center text-sm">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="ml-1 mr-3">{movie.rating}</span>
                  <span>{movie.duration}</span>
                </div>
                <div className="flex flex-wrap mt-1">
                  {movie.genres.slice(0, 2).map((genre, index) => (
                    <span key={index} className="text-xs bg-gray-100 rounded mr-1 mb-1 px-2 py-0.5">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 