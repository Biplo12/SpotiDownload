import axios from 'axios';
import JSZip from 'jszip';
import React, { useState } from 'react';

import logger from '@/lib/logger';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { ISongObject } from '@/interfaces/IGlobalReducerInterface';
import { setIsPlaylistDownloaded } from '@/state/globalSlice';

const BASE_YOUTUBE_URL = 'https://www.youtube.com/watch?v=';

const DownloadSong: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const songs = useAppSelector((state) => state.global.songs);
  const playlistName = useAppSelector((state) => state.global.playlistName);
  const songsLength = songs?.length;
  const downloadSongs = async (songs: ISongObject[]) => {
    const zip = new JSZip();

    try {
      for (const song of songs) {
        const url = `/api/download?url=${BASE_YOUTUBE_URL}${song.id}`;
        const { data } = await axios.get(url, {
          responseType: 'blob',
        });

        zip.file(`${song.title} - ${song.artist}.mp3`, data);
        setProgress((prev) => prev + 1);
      }

      const zipBlob = await zip.generateAsync({ type: 'blob' });

      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(zipBlob);
      downloadLink.download = `${playlistName}.zip`;

      downloadLink.click();
      dispatch(setIsPlaylistDownloaded(true));
    } catch (error) {
      logger('Error downloading songs:', error?.toString());
    }
  };

  const handleDownloadSongs = async () => {
    setIsDownloading(true);
    await downloadSongs(songs as ISongObject[]);
    setIsDownloading(false);
  };

  return (
    <button
      className='bg-spotify-green text-spotify-black flex min-w-[325px] items-center justify-center gap-3 rounded-full px-12 py-3 text-xl font-bold shadow-lg transition-all duration-200 ease-linear hover:bg-opacity-80 disabled:cursor-not-allowed disabled:opacity-50'
      onClick={handleDownloadSongs}
      disabled={isDownloading}
    >
      {isDownloading ? `${progress}/${songsLength} Downloading...` : `Download`}
    </button>
  );
};

export default DownloadSong;
