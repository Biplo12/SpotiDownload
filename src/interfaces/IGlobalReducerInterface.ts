interface ISongObject {
  id: string;
  title: string;
  artist: string;
}

export default interface IGlobalReducerInterface {
  spotifyAuthStatus: boolean;
  songs: ISongObject[];
  songsLoadingState: {
    isLoading: boolean;
    progress: number;
  };
}
