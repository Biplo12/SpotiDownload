import axios from 'axios';
import JSZip from 'jszip';
import { useState } from 'react';

import logger from '@/lib/logger';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { ISongObject } from '@/interfaces/IGlobalReducerInterface';
import { setIsPlaylistDownloaded } from '@/state/globalSlice';

const BASE_YOUTUBE_URL = 'https://www.youtube.com/watch?v=';

const useDownloadPlaylist = () => {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const dispatch = useAppDispatch();
  const playlistName = useAppSelector((state) => state.global.playlistName);

  const downloadPlaylist = async (songs: ISongObject[]) => {
    setIsDownloading(true);
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
      setIsDownloading(false);
    } catch (error) {
      logger('Error downloading songs:', error?.toString());
      setIsDownloading(false);
    }
  };

  return { downloadPlaylist, progress, isDownloading };
};

export default useDownloadPlaylist;
