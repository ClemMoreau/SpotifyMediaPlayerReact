import "./App.css";

import SpotifyWebApi from "spotify-web-api-node";
import SPOTIFY_MEDIA_PLAYER_CONSTANT from "./config/env";
import { createContext } from "react";

const spotifyApi = new SpotifyWebApi({
	clientId: SPOTIFY_MEDIA_PLAYER_CONSTANT.CLIENT_ID,
	clientSecret: SPOTIFY_MEDIA_PLAYER_CONSTANT.CLIENT_SECRET,
	redirectUri: SPOTIFY_MEDIA_PLAYER_CONSTANT.REDIRECT_URI,
});

export const SpotifyApiContext = createContext(spotifyApi);

function App() {
	return (
		<SpotifyApiContext.Provider value={spotifyApi}>
			<div></div>
		</SpotifyApiContext.Provider>
	);
}

export default App;
