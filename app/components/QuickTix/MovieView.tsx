'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Share, Plus, Check } from 'lucide-react';
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

const SAMPLE_SHOWTIMES = ['10:00 AM', '1:30 PM', '4:00 PM', '7:30 PM', '10:00 PM'];

export function MovieView({ movie, onBack }: MovieViewProps) {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  return (
    <div className="pb-20">
      <div className="relative h-64 bg-gray-800">
        <Image 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="object-cover opacity-50"
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
          <button onClick={onBack} className="absolute top-4 left-4 text-white">
            ← Back
          </button>
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <div className="flex items-center mt-2">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="ml-1 mr-3">{movie.rating}</span>
            <span className="mr-3">{movie.runtime}</span>
            <div className="flex">
              {movie.genre.map((g, index) => (
                <span key={index} className="text-xs bg-black bg-opacity-50 rounded mr-1 px-2 py-0.5">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <button 
            className="flex items-center justify-center bg-blue-500 text-white rounded-lg px-4 py-2 flex-1 mr-2"
          >
            <Ticket size={18} className="mr-1" />
            Get Tickets
          </button>
          <button 
            className="flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg p-2"
            onClick={() => setIsInWatchlist(!isInWatchlist)}
          >
            {isInWatchlist ? (
              <Check size={20} />
            ) : (
              <Plus size={20} />
            )}
          </button>
          <button className="flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg p-2 ml-2">
            <Share size={20} />
          </button>
        </div>
        
        <div className="mb-4">
          <h2 className="font-bold text-lg mb-2">Synopsis</h2>
          <p className="text-gray-700">
            A mind-bending journey through the architecture of dreams, where a skilled thief must plant an idea in someone&apos;s mind.
          </p>
        </div>
        
        <div className="mb-4">
          <h2 className="font-bold text-lg mb-2">Why we think you&apos;ll like it</h2>
          <p className="text-gray-700">Based on your interest in action and sci-fi movies with high ratings, we recommend this title.</p>
        </div>
        
        <div>
          <h2 className="font-bold text-lg mb-2">Showtimes</h2>
          <div className="bg-white rounded-lg shadow mb-4 p-4">
            <div className="flex flex-wrap gap-2">
              {SAMPLE_SHOWTIMES.map((time, index) => (
                <button 
                  key={index} 
                  className="border border-gray-300 rounded px-3 py-1 text-sm hover:bg-blue-50 hover:border-blue-500"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 