// import SpotifyWrapper from 'spotify-wrapper-api';

// const spotify = new SpotifyWrapper ({
// 	token: 'BQB2JqPn_YxaVPyGEK1-MoGg653xr2_fUtinHaMQTioZNSDTc5Y-5LtS7pfWsrNX4d2koJ1clEj1nFsQcg_kjaJRf_kk9q8gvPkfSvAHlTHnZevI0_fpAgm48pym2Fv5Z9Vt_ilYi_w5AcJfnd0EiFo'
// });
// console.log(spotify.search.artists('The Beatles'));

const spotifyWrapper = require('spotify-wrapper-api');

const spotify = new SpotifyWrapper ({
	token:'BQB2JqPn_YxaVPyGEK1-MoGg653xr2_fUtinHaMQTioZNSDTc5Y-5LtS7pfWsrNX4d2koJ1clEj1nFsQcg_kjaJRf_kk9q8gvPkfSvAHlTHnZevI0_fpAgm48pym2Fv5Z9Vt_ilYi_w5AcJfnd0EiFo'
});

console.log(spotify.search.artists('The Beatles'));

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});