import axios from 'axios';

const useSearchForSong = () => {
  const NEXT_PUBLIC_GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  const searchForSong = async (songName: string) => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: 'snippet',
          maxResults: 1,
          q: songName,
          key: NEXT_PUBLIC_GOOGLE_API_KEY,
        },
      }
    );
    return response.data;
  };

  return { searchForSong };
};

export default useSearchForSong;
