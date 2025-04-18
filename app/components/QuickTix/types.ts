export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  rating: number;
  runtime: string;
  genre: string[];
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  rating: number;
}

export interface HeaderProps {
  title?: string;
}

export interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export interface SearchViewProps {
  onSelectMovie: (movie: Movie) => void;
}

export interface BrowseViewProps {
  onSelectMovie: (movie: Movie) => void;
}

export interface MapViewProps {
  onSelectTheater: (theater: Theater) => void;
}

export interface MovieViewProps {
  movie: Movie;
  onBack: () => void;
}

export interface TheaterViewProps {
  theater: Theater;
  onBack: () => void;
}

export interface BookingViewProps {
  movie: Movie;
  theater: Theater;
}

export interface WatchlistViewProps {
  onSelectMovie: (movie: Movie) => void;
}

export interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}
