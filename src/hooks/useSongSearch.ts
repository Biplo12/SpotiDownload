import axios from 'axios';

const YOUTUBE_BASE_URL = 'https://www.youtube.com/results';

const useSongSearch = () => {
  const searchSong = async (songName: string, artist: string) => {
    const url = `https://corsproxy.io/?${encodeURIComponent(
      `${YOUTUBE_BASE_URL}?search_query=${songName + ' ' + artist}`
    )}`;
    const { data } = await axios.get(url);
    const parsedData = data.split('ytInitialData = ')[1].split(';</script>')[0];
    const parsedDataJson = JSON.parse(parsedData);
    return parsedDataJson.contents.twoColumnSearchResultsRenderer
      .primaryContents.sectionListRenderer.contents[0].itemSectionRenderer
      .contents[0].videoRenderer;
  };

  return { searchSong };
};

export default useSongSearch;
