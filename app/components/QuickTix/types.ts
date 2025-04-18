export interface Movie {
  id: number;
  title: string;
  rating: number;
  duration: string;
  genres: string[];
  image: string;
  description: string;
  showTimes: string[];
}

export interface Theater {
  id: number;
  name: string;
  distance: string;
  moviesShowing: number;
  address: string;
  amenities: string[];
  movies: number[];
}

export interface HeaderProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

export interface TabBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface SearchViewProps {
  popularSearches: string[];
}

export interface BrowseViewProps {
  genres: string[];
  movies: Movie[];
  setSelectedMovie: (movie: Movie) => void;
  setActiveScreen: (screen: string) => void;
  watchlist: number[];
  toggleWatchlist: (movieId: number) => void;
}

export interface MapViewProps {
  theaters: Theater[];
  setSelectedTheater: (theater: Theater) => void;
  setActiveScreen: (screen: string) => void;
  bookmarkedTheaters: number[];
  toggleBookmarkTheater: (theaterId: number) => void;
}

export interface MovieViewProps {
  movie: Movie;
  theaters: Theater[];
  watchlist: number[];
  toggleWatchlist: (movieId: number) => void;
  setActiveScreen: (screen: string) => void;
  bookmarkedTheaters: number[];
  toggleBookmarkTheater: (theaterId: number) => void;
}

export interface TheaterViewProps {
  theater: Theater;
  movies: Movie[];
  setSelectedMovie: (movie: Movie) => void;
  setActiveScreen: (screen: string) => void;
  bookmarkedTheaters: number[];
  toggleBookmarkTheater: (theaterId: number) => void;
}

export interface BookingViewProps {
  movie: Movie;
}

export interface WatchlistViewProps {
  movies: Movie[];
  watchlist: number[];
  toggleWatchlist: (movieId: number) => void;
  setSelectedMovie: (movie: Movie) => void;
  setActiveScreen: (screen: string) => void;
}

export interface BottomNavProps {
  activeScreen: string;
  activeTab: string;
  setActiveScreen: (screen: string) => void;
  setActiveTab: (tab: string) => void;
  watchlist: number[];
}
