export interface ISong {
  videoId: string;
  ownerText: {
    runs: {
      text: string;
    }[];
  };
}
