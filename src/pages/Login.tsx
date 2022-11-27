import * as React from "react";
import { useContext } from "react";
import { SpotifyApiContext } from "../App";

const Login = () => {
	const spotifyApi = useContext(SpotifyApiContext);

	const handleLogin = () => {
		console.log(typeof spotifyApi);

		const scopes = [
			"streaming",
			"user-read-email",
			"user-read-private",
			"user-library-read",
			"user-library-modify",
			"user-read-playback-state",
			"user-modify-playback-state",
		];
		const state = Date.now().toString();

		const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
		console.log(authorizeURL);
	};

	return <div></div>;
};
export default Login;
