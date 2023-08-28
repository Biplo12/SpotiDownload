import useFetchPlaylist from '@/hooks/useFetchPlaylist';
import useSearchForSong from '@/hooks/useSearchForSong';

import { useAppDispatch } from '@/store/store-hooks';

import { IPlaylist } from '@/interfaces/IPlaylist';
import { ISong } from '@/interfaces/ISong';
import { setSong, setSongsLoadingState } from '@/state/globalSlice';

const useFetchSongs = (playlistId: string) => {
  const { searchForSong } = useSearchForSong();
  const dispatch = useAppDispatch();
  const { fetchPlaylist } = useFetchPlaylist(playlistId);
  const fetchPlaylistHandler = async () => {
    dispatch(setSongsLoadingState({ isLoading: true, progress: 0 }));
    const response = await fetchPlaylist();
    const data = response?.data?.data as IPlaylist | undefined;
    const songNames = data?.tracks?.items?.map((item) => item.track.name) ?? [];
    for (let i = 0; i < 5; i++) {
      const songName = songNames[i];
      const songArtist = data?.tracks?.items?.[i]?.track?.artists?.[0]?.name;
      const song = (await searchForSong(
        songName as string,
        songArtist as string
      )) as ISong;
      const songId = song?.videoId;
      const artist = song?.ownerText?.runs[0]?.text;
      if (songId) {
        dispatch(
          setSong({
            id: songId,
            title: songName as string,
            artist: artist as string,
          })
        );
        dispatch(
          setSongsLoadingState({
            isLoading: true,
            progress: Math.round((i / songNames.length) * 100),
          })
        );
      }
    }
    dispatch(setSongsLoadingState({ isLoading: false, progress: 100 }));
  };
  return { fetchPlaylistHandler };
};

export default useFetchSongs;
