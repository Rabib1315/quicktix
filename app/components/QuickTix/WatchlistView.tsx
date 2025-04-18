import React from 'react';
import { Heart, Star, X } from 'lucide-react';
import { WatchlistViewProps } from './types';

export const WatchlistView: React.FC<WatchlistViewProps> = ({
  movies,
  watchlist,
  toggleWatchlist,
  setSelectedMovie,
  setActiveScreen
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Watchlist</h1>
      
      {watchlist.length === 0 ? (
        <div className="text-center py-8">
          <Heart size={48} className="mx-auto mb-4 text-gray-300" />
          <p className="text-gray-500 mb-2">Your watchlist is empty</p>
          <p className="text-gray-400 text-sm mb-4">Add movies you want to see later</p>
          <button 
            className="bg-teal-500 text-white rounded-lg px-4 py-2"
            onClick={() => {
              setActiveScreen('home');
            }}
          >
            Browse Movies
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {movies.filter(movie => watchlist.includes(movie.id)).map((movie) => (
            <div key={movie.id} className="flex bg-white rounded-lg shadow overflow-hidden">
              <img src={movie.image} alt={movie.title} className="w-24 h-auto object-cover" />
              <div className="p-3 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-bold">{movie.title}</h3>
                  <button onClick={() => toggleWatchlist(movie.id)}>
                    <X size={20} className="text-gray-400" />
                  </button>
                </div>
                <div className="flex items-center text-sm mt-1 mb-2">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="ml-1 mr-3">{movie.rating}</span>
                  <span>{movie.duration}</span>
                </div>
                
                <button 
                  className="text-teal-500 text-sm font-medium"
                  onClick={() => {
                    setSelectedMovie(movie);
                    setActiveScreen('movie');
                  }}
                >
                  Find Showtimes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 