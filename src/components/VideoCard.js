const VideoCard = ({ info }) => {

	if (!info) return <>error</>
	const { snippet, statistics } = info;
	const { channelTitle, title, thumbnails } = snippet;

	return (
		<div className="p-2 w-[22rem] cursor-pointer sm:w-70">
			<img className="rounded-xl" src={thumbnails?.high?.url} alt="thumbnail" />
			<div className="text-sm py-2 px flex">
				<div className="w-[18%]">
					<img src={thumbnails?.default?.url} alt='desc-img' className="rounded-[50%] w-[120px] h-[65px]" />
				</div>
				<div className="ml-2 w-[82%]">
					<div className="font-semibold">{title}</div>
					<div className="text-gray-500 mt-2">{channelTitle}</div>
					<div className="text-gray-500 mt">{(statistics.viewCount) / 1000}K views</div>
				</div>
			</div>
		</div>
	)
}

export default VideoCard;