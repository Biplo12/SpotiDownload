# Spotify to YouTube Playlist Converter App Documentation

## 1. Introduction

The Spotify to YouTube Playlist Converter App is a web application built using Next.js, TypeScript, and Tailwind CSS. This app allows users to log in with their Spotify accounts, input a playlist ID, search for the corresponding songs on YouTube, and finally generate a downloadable ZIP package containing the selected songs in either video or audio format.

## 2. Features

- Spotify Login: Users can log in to the app using their Spotify accounts.
- YouTube Search: The app searches for songs from the entered Spotify playlist on YouTube.
- ZIP Package Generation: The app generates a downloadable ZIP package containing the songs from selected playlist.

## 3. Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/Biplo12/spotify-playlist-scrapper.git
   ```

2. Navigate to the project directory:

   ```
   cd spotify-to-youtube-converter
   ```

3. Install dependencies using Yarn:

   ```
   yarn install
   ```

## 4. Usage

1. Access the application in your browser at [spotify-playlist-scrapper.vercel.app](spotify-playlist-scrapper.vercel.app).

2. Click on the "Login with Spotify" button to authenticate with your Spotify account.

3. After logging in, you'll be redirected to the main page.

4. Enter a Spotify playlist ID in the provided field.

5. Click on the "Search on YouTube" button to search for the playlist's songs on YouTube.

6. Once the search is complete, a list of matched songs will be displayed.

7. Select the desired format (video or audio) for the downloaded songs.

8. Click on the "Generate ZIP Package" button to create a downloadable ZIP package with the selected songs.

## 5. Future Enhancements

- **Batch Processing**: Enhance the app to support batch processing for multiple playlists.
- **Playlist Customization**: Allow users to customize the order of songs before generating the ZIP package.
- **Error Handling**: Implement better error handling for cases like unavailable songs on YouTube.
- **Choose from Trending Playlists**: Add a feature that allows users to choose from a list of trending Spotify playlists as a source for song conversion.
