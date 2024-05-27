import { home, musicIcon, shortsIcon, subsIcon, userIcon } from "../assets/icons";



// ideally do not store api key like this
export const APIKEY = 'AIzaSyCIE2fW43mppXB7VbYjCBbE48pF7WaYeEY'

export const UTILS = {
	menuIcon: 'https://cdn.icon-icons.com/icons2/2469/PNG/512/hamburger_menu_icon_149466.png',
	logo: 'https://cdn3d.iconscout.com/3d/free/preview/youtube-5562364-4642766@0.png?f=webp&h=700',
	userIcon: 'https://openclipart.org/download/247319/abstract-user-flat-3.svg',
	searchIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OmiU_4JvmqoT3pw1yRa6Qq2YoYTyApRjSxUS8Q94CQ&s',
	youtubeMostPopularVideoApi: "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=10&key=" + APIKEY,
	youtubeSuggetionAPI: 'https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=',
}

export const LIVE_CHATS = [
	{
		name: 'Saurav Phulera',
		msg: 'Waah modi ji waah'
	},
	{
		name: 'Samarth Gupta',
		msg: 'nothing is better than chess'
	},
	{
		name: 'Lav Rai',
		msg: 'aaj mera tuesday hai'
	},
	{
		name: 'Lav Rai',
		msg: 'Mai chicken ni Kha paunga, or beer b nhi'
	}
]

export const LIVE_CHAT_OFFSET = 11;

export const SIDEBAR_CONTENT_DATA = {
	" ": [
		{
			name: 'Home', icon: home, to: "/"
		},
		{
			name: 'Shorts', icon: shortsIcon, to: "/"
		},
		{
			name: 'Subscriptions', icon: subsIcon, to: "/"
		},
		{
			name: 'Youtube Music', icon: musicIcon, to: "/"
		}
	],
	"Explore": [
		{
			name: 'Trending', icon: musicIcon, to: "/"
		},
		{
			name: 'Shoping', icon: subsIcon, to: "/"
		},
		{
			name: 'Music', icon: home, to: "/"
		},
		{
			name: 'Movies', icon: shortsIcon, to: "/"
		}
	],

	"Subscriptions": [
		{
			name: 'Gotham chess', icon: userIcon, to: "/"
		},
		{
			name: 'Akshay Saini Saini', icon: userIcon, to: "/"
		},
		{
			name: 'StarTalk', icon: userIcon, to: "/"
		},
		{
			name: 'Samay Raina', icon: userIcon, to: "/"
		}
	]
}