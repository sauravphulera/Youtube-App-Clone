import ButtonsList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
	return (
		<div className="px-4 py h-[93vh] overflow-y-auto">
			<ButtonsList />
			<VideoContainer />
		</div>
	)
}

export default MainContainer;