export type MeApi = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: { filter_enabled: boolean; filter_locked: boolean };
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  product: string;
  type: string;
  uri: string;
};

type ArtistItem = {
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  genres: string[];
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type FollowingsApi = {
  artists: {
    cursors: { after: string };
    href: string;
    items: ArtistItem[];
    limit: number;
    next: string;
    total: number;
  };
};

type BaseDataApi = {
  href: string;
  limit: number;
  next: number;
  offset: number;
  previous: number;
  total: number;
};

export type PlaylistItem = {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  owner: MeApi;
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: { href: string; total: number };
  type: string;
  uri: string;
};

export type PlaylistsApi = BaseDataApi & {
  items: PlaylistItem[];
};

export type ArtistsApi = BaseDataApi & {
  items: ArtistItem[];
};

type AblumApi = {
  album_type: string;
  artists: ArtistItem[];
  available_markets: string[];
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

type TrackItemApi = {
  album: AblumApi;
  artists: ArtistItem[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: { spotify: string };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type TracksApi = BaseDataApi & {
  items: TrackItemApi[];
};

export type RecentlyPlayedTracksApi = BaseDataApi & {
  items: {
    context: {
      external_urls: { spotify: string };
      spotify: string;
      href: string;
      type: string;
      uri: string;
    };
    played_at: string;
    track: TrackItemApi;
  }[];
};

export type TopListTimeRange = 'short_term' | 'medium_term' | 'long_term';
