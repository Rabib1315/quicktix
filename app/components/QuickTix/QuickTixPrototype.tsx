'use client';

import { useState } from 'react';
import { Header } from './Header';
import { TabBar } from './TabBar';
import { SearchView } from './SearchView';
import { BrowseView } from './BrowseView';
import { MapView } from './MapView';
import { MovieView } from './MovieView';
import { TheaterView } from './TheaterView';
import { WatchlistView } from './WatchlistView';
import { BottomNav } from './BottomNav';
import type { Movie, Theater } from './types';

export default function QuickTixPrototype() {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedTheater, setSelectedTheater] = useState<Theater | null>(null);

  const renderContent = () => {
    if (selectedMovie) {
      return <MovieView movie={selectedMovie} onBack={() => setSelectedMovie(null)} />;
    }
    if (selectedTheater) {
      return <TheaterView theater={selectedTheater} onBack={() => setSelectedTheater(null)} />;
    }

    switch (activeTab) {
      case 'search':
        return <SearchView onSelectMovie={setSelectedMovie} />;
      case 'browse':
        return <BrowseView onSelectMovie={setSelectedMovie} />;
      case 'map':
        return <MapView onSelectTheater={setSelectedTheater} />;
      case 'watchlist':
        return <WatchlistView onSelectMovie={setSelectedMovie} />;
      default:
        return <BrowseView onSelectMovie={setSelectedMovie} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
} 