import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import useUserTokens from '@/hooks/useUserTokens';

const useFetchPlaylist = (playlistId: string) => {
  const { access_token } = useUserTokens();

  const { refetch } = useQuery({
    queryKey: ['fetchPlaylist'],
    queryFn: async () =>
      await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    enabled: false,
  });

  return { fetchPlaylist: refetch };
};

export default useFetchPlaylist;
