import React from 'react';
import { Star, Share, Plus, Check, Bookmark } from 'lucide-react';
import { MovieViewProps } from './types';

const Ticket = ({ size, className }: { size: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M13 5v2" />
    <path d="M13 17v2" />
    <path d="M13 11v2" />
  </svg>
);

export const MovieView: React.FC<MovieViewProps> = ({
  movie,
  theaters,
  watchlist,
  toggleWatchlist,
  setActiveScreen,
  bookmarkedTheaters,
  toggleBookmarkTheater
}) => {
  return (
    <div className="pb-20">
      <div className="relative h-64 bg-gray-800">
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <div className="flex items-center mt-2">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="ml-1 mr-3">{movie.rating}</span>
            <span className="mr-3">{movie.duration}</span>
            <div className="flex">
              {movie.genres.map((genre, index) => (
                <span key={index} className="text-xs bg-black bg-opacity-50 rounded mr-1 px-2 py-0.5">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <button 
            className="flex items-center justify-center bg-teal-500 text-white rounded-lg px-4 py-2 flex-1 mr-2"
            onClick={() => setActiveScreen('booking')}
          >
            <Ticket size={18} className="mr-1" />
            Get Tickets
          </button>
          <button 
            className="flex items-center justify-center border border-teal-500 text-teal-500 rounded-lg p-2"
            onClick={() => toggleWatchlist(movie.id)}
          >
            {watchlist.includes(movie.id) ? (
              <Check size={20} />
            ) : (
              <Plus size={20} />
            )}
          </button>
          <button className="flex items-center justify-center border border-teal-500 text-teal-500 rounded-lg p-2 ml-2">
            <Share size={20} />
          </button>
        </div>
        
        <div className="mb-4">
          <h2 className="font-bold text-lg mb-2">Synopsis</h2>
          <p className="text-gray-700">{movie.description}</p>
        </div>
        
        <div className="mb-4">
          <h2 className="font-bold text-lg mb-2">Why we think you'll like it</h2>
          <p className="text-gray-700">Based on your interest in action and adventure movies with high ratings, we recommend this title.</p>
        </div>
        
        <div>
          <h2 className="font-bold text-lg mb-2">Showtimes near you</h2>
          
          {theaters.filter(theater => theater.movies.includes(movie.id)).map((theater) => (
            <div key={theater.id} className="bg-white rounded-lg shadow mb-4 p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{theater.name}</h3>
                  <p className="text-gray-500 text-sm">{theater.distance} • {theater.amenities.slice(0, 2).join(', ')}</p>
                </div>
                <button 
                  onClick={() => toggleBookmarkTheater(theater.id)}
                  className="p-2"
                >
                  <Bookmark 
                    size={20} 
                    className={bookmarkedTheaters.includes(theater.id) ? "text-teal-500 fill-current" : "text-gray-400"} 
                  />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {movie.showTimes.map((time, index) => (
                  <button 
                    key={index} 
                    className="border border-gray-300 rounded px-3 py-1 text-sm hover:bg-teal-50 hover:border-teal-500"
                    onClick={() => setActiveScreen('booking')}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 