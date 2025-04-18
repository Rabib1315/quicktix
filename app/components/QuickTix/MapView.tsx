import React from 'react';
import { Bookmark } from 'lucide-react';
import { MapViewProps } from './types';

export const MapView: React.FC<MapViewProps> = ({
  theaters,
  setSelectedTheater,
  setActiveScreen,
  bookmarkedTheaters,
  toggleBookmarkTheater
}) => {
  return (
    <div>
      <div className="bg-gray-100 h-64 flex flex-col items-center justify-center relative">
        <div className="w-full h-full bg-gray-200 absolute">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full relative">
              {/* Simplified map background */}
              <div className="absolute inset-0 bg-gray-200">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  {/* Roads */}
                  <line x1="0" y1="120" x2="100%" y2="120" stroke="#ffffff" strokeWidth="6" />
                  <line x1="150" y1="0" x2="150" y2="100%" stroke="#ffffff" strokeWidth="4" />
                  <line x1="300" y1="0" x2="300" y2="100%" stroke="#ffffff" strokeWidth="5" />
                  <line x1="0" y1="50" x2="100%" y2="50" stroke="#ffffff" strokeWidth="3" />
                  <line x1="0" y1="200" x2="100%" y2="200" stroke="#ffffff" strokeWidth="4" />
                  <line x1="100" y1="0" x2="100" y2="100%" stroke="#ffffff" strokeWidth="3" />
                  <line x1="250" y1="0" x2="250" y2="100%" stroke="#ffffff" strokeWidth="4" />
                  
                  {/* Theater markers */}
                  <circle cx="150" cy="70" r="12" fill="#e74c3c" />
                  <circle cx="250" cy="150" r="12" fill="#e74c3c" />
                  <circle cx="100" cy="180" r="12" fill="#e74c3c" />
                  
                  {/* User location */}
                  <circle cx="180" cy="120" r="10" fill="#3498db" />
                  <circle cx="180" cy="120" r="14" fill="#3498db" fillOpacity="0.3" />
                </svg>
              </div>
              
              {/* Theater labels */}
              <div className="absolute text-xs font-bold bg-white rounded px-2 py-1 shadow-md" style={{ left: '130px', top: '40px' }}>
                AMC Downtown 12
              </div>
              <div className="absolute text-xs font-bold bg-white rounded px-2 py-1 shadow-md" style={{ left: '230px', top: '120px' }}>
                Regal Cinemas
              </div>
              <div className="absolute text-xs font-bold bg-white rounded px-2 py-1 shadow-md" style={{ left: '80px', top: '150px' }}>
                Cineplex Odeon
              </div>
            </div>
          </div>
        </div>
        
        {/* Controls overlay */}
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </button>
        </div>
        <div className="absolute top-16 right-3 bg-white rounded-full p-2 shadow-md">
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="font-bold text-lg mb-4">Theaters Near You</h2>
        
        {theaters.map((theater) => (
          <div 
            key={theater.id}
            className="bg-white rounded-lg shadow mb-4 overflow-hidden"
            onClick={() => {
              setSelectedTheater(theater);
              setActiveScreen('theater');
            }}
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{theater.name}</h3>
                  <p className="text-gray-500">{theater.address}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-medium text-gray-700">{theater.distance}</span>
                  <button 
                    className="mt-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmarkTheater(theater.id);
                    }}
                  >
                    <Bookmark 
                      size={20} 
                      className={bookmarkedTheaters.includes(theater.id) ? "text-teal-500 fill-current" : "text-gray-400"} 
                    />
                  </button>
                </div>
              </div>
              
              <div className="mt-2 flex flex-wrap gap-1">
                {theater.amenities.map((amenity, index) => (
                  <span key={index} className="text-xs bg-gray-100 rounded px-2 py-0.5">
                    {amenity}
                  </span>
                ))}
              </div>
              
              <div className="mt-3">
                <p className="text-sm text-gray-600">{theater.moviesShowing} movies showing today</p>
                <button 
                  className="text-teal-500 text-sm font-medium mt-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTheater(theater);
                    setActiveScreen('theater');
                  }}
                >
                  See showtimes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 