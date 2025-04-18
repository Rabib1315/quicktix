'use client';

import Image from 'next/image';
import { TheaterViewProps } from './types';

const SAMPLE_MOVIES = [
  {
    id: '1',
    title: 'Inception',
    posterUrl: '/movies/inception.jpg',
    rating: 4.8,
    runtime: '2h 28m',
    genre: ['Action', 'Sci-Fi']
  },
  // Add more sample movies
];

export function TheaterView({ theater, onBack }: TheaterViewProps) {
  return (
    <div className="pb-20">
      <div className="sticky top-0 bg-white z-10 p-4 border-b">
        <button onClick={onBack} className="text-blue-500">
          ← Back
        </button>
        <h1 className="text-2xl font-bold mt-2">{theater.name}</h1>
        <p className="text-gray-600">{theater.location}</p>
        <div className="flex items-center mt-1">
          <span>⭐ {theater.rating}</span>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Now Playing</h2>
        <div className="grid grid-cols-2 gap-4">
          {SAMPLE_MOVIES.map((movie) => (
            <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow">
              <div className="relative w-full h-48">
                <Image
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{movie.title}</h3>
                <div className="text-sm text-gray-600">
                  <span>⭐ {movie.rating}</span>
                  <span className="mx-2">•</span>
                  <span>{movie.runtime}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {['1:00 PM', '4:30 PM', '8:00 PM'].map((time, index) => (
                    <button
                      key={index}
                      className="text-sm px-2 py-1 bg-gray-100 rounded hover:bg-blue-50 hover:text-blue-500"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 