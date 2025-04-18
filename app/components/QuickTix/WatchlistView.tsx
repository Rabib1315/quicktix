'use client';

import Image from 'next/image';
import { WatchlistViewProps, Movie } from './types';

const SAMPLE_WATCHLIST: Movie[] = [
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

export function WatchlistView({ onSelectMovie }: WatchlistViewProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Watchlist</h1>
      {SAMPLE_WATCHLIST.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <p>Your watchlist is empty</p>
          <p className="text-sm mt-2">Add movies you&apos;d like to watch later</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {SAMPLE_WATCHLIST.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg overflow-hidden shadow"
              onClick={() => onSelectMovie(movie)}
            >
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 