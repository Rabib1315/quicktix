import React from 'react';
import { Map, Star, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { TheaterViewProps } from './types';

export const TheaterView: React.FC<TheaterViewProps> = ({
  theater,
  movies,
  setSelectedMovie,
  setActiveScreen,
  bookmarkedTheaters,
  toggleBookmarkTheater
}) => {
  return (
    <div>
      <div className="p-4 bg-white border-b">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold">{theater.name}</h1>
            <p className="text-gray-500">{theater.address}</p>
            <p className="text-gray-500 text-sm mt-1">{theater.distance} away</p>
          </div>
          <div className="flex flex-col items-end">
            <button 
              className="mt-1"
              onClick={() => toggleBookmarkTheater(theater.id)}
            >
              <Bookmark 
                size={24} 
                className={bookmarkedTheaters.includes(theater.id) ? "text-teal-500 fill-current" : "text-gray-400"} 
              />
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex flex-wrap gap-1">
            {theater.amenities.map((amenity, index) => (
              <span key={index} className="text-xs bg-gray-100 rounded px-2 py-0.5">
                {amenity}
              </span>
            ))}
          </div>
          
          <button className="flex items-center text-teal-500 text-sm">
            <Map size={16} className="mr-1" />
            Directions
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Movies & Showtimes</h2>
          <div className="flex items-center space-x-2">
            <button className="p-1 bg-gray-100 rounded">
              <ChevronLeft size={20} />
            </button>
            <span>Today</span>
            <button className="p-1 bg-gray-100 rounded">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {movies.filter(movie => theater.movies.includes(movie.id)).map((movie) => (
          <div key={movie.id} className="flex mb-4 bg-white rounded-lg shadow overflow-hidden">
            <img src={movie.image} alt={movie.title} className="w-24 h-auto object-cover" />
            <div className="p-3 flex-1">
              <h3 className="font-bold">{movie.title}</h3>
              <div className="flex items-center text-sm mt-1 mb-2">
                <Star size={14} className="text-yellow-400 fill-current" />
                <span className="ml-1 mr-3">{movie.rating}</span>
                <span>{movie.duration}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {movie.showTimes.slice(0, 4).map((time, index) => (
                  <button 
                    key={index} 
                    className="border border-gray-300 rounded px-3 py-1 text-sm hover:bg-teal-50 hover:border-teal-500"
                    onClick={() => {
                      setSelectedMovie(movie);
                      setActiveScreen('booking');
                    }}
                  >
                    {time}
                  </button>
                ))}
                {movie.showTimes.length > 4 && (
                  <button className="text-teal-500 text-sm">
                    +{movie.showTimes.length - 4} more
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 