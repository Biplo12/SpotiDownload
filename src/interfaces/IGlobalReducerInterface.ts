export interface ISongObject {
  id: string;
  title: string;
  artist: string;
}

export default interface IGlobalReducerInterface {
  spotifyAuthStatus: boolean;
  songs: ISongObject[];
  playlistName: string;
  songsLoadingState: {
    isLoading: boolean;
    songsInPlaylist: number;
  };
  isPlaylistDownloaded: boolean;
  dialog: {
    isOpen: boolean;
    title: string;
    actions: {
      text: string;
      onClick: () => void;
    }[];
  };
}
