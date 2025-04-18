'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BrowseViewProps, Movie } from './types';

const SAMPLE_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    posterUrl: '/movies/inception.jpg',
    rating: 4.8,
    runtime: '2h 28m',
    genre: ['Action', 'Sci-Fi']
  },
  // Add more sample movies as needed
];

const GENRES = ['Action', 'Adventure', 'Comedy', 'Drama', 'Sci-Fi', 'Thriller'];

export function BrowseView({ onSelectMovie }: BrowseViewProps) {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filteredMovies = selectedGenre
    ? SAMPLE_MOVIES.filter(movie => movie.genre.includes(selectedGenre))
    : SAMPLE_MOVIES;

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Browse by Genre</h2>
        <div className="flex flex-wrap gap-2">
          {GENRES.map((genre, index) => (
            <button
              key={index}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-full ${
                selectedGenre === genre
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredMovies.map((movie) => (
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
                priority
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
    </div>
  );
} 