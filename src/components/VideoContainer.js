import { useEffect, useState } from "react";
import { UTILS } from "../constants/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
	}, [])

	const getVideos = async () => {

		const res = await fetch(UTILS.youtubeMostPopularVideoApi);
		const data = await res.json();
		setVideos(data.items);
	}

	return (
		<div className="flex flex-wrap justify-center sm:justify-start">
			{
				[...videos].map((video) => {
					return (
						<Link to={"/watch?v=" + video.id} key={video.id}>
							<VideoCard info={video} />
						</Link>
					)
				})
			}
		</div>
	)
}

export default VideoContainer;