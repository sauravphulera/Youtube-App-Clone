import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {

	const [searchParams] = useSearchParams();
	const videoId = searchParams.get('v');

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(closeMenu())
	}, [])

	return (
		<div className="p-4 w-full sm:flex">
			<div className="basis-[70%]">
				<div className="">
					<iframe className="w-full sm:h-[600px]"
						src={"https://www.youtube.com/embed/" + videoId}
						title="YouTube video player" frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen>
					</iframe>
				</div>
				<div>
					<CommentsContainer />
				</div>
			</div>
			<div className="h-[600px] basis-[30%]">
				<LiveChat />
			</div>
		</div>
	)

}

export default WatchPage;