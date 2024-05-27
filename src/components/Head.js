import { useDispatch, useSelector } from "react-redux";
import { UTILS } from "../constants/constants";

import logo from './../assets/logo.svg'
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import jsonp from "jsonp";
import { searchIcon } from "../assets/icons";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
	const dispatch = useDispatch();
	const [suggetions, setSuggetions] = useState([]);
	const [query, setSearchQuery] = useState('');

	const [showSuggetions, setShowSuggetions] = useState(false);


	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	}

	const getSuggetions = async (query) => {
		console.log('api call')
		jsonp(UTILS.youtubeSuggetionAPI + query, null, (err, data) => {
			if (err) {
				console.error(err.message);
			} else {
				setSuggetions(data?.[1]);
				dispatch(cacheResults({ [query]: data?.[1] }))
			}
		});
	}

	const searchCache = useSelector((store) => store.search)

	useEffect(() => {


		if (searchCache.hasOwnProperty(query)) {
			console.log('from cache')
			setSuggetions(searchCache[query]);
			return;
		}

		/**
		 * make an api call on 
		 * if diff b/w  two api calls is less then 200ms decline the call
		 */

		const timer = setTimeout(() => { getSuggetions(query); }, 500);
		return () => {
			clearTimeout(timer)
		}
	}, [query])




	return (
		<div className="flex justify-between p-2 sm:shadow-lg shadow-md">
			<div>
				<div className="flex items-center	">
					<img alt="menu" className="w-8 h-8 cursor-pointer p-2 sm:w-10 sm:h-10" src={UTILS.menuIcon} onClick={toggleMenuHandler} />
					<div className="w-15 h-8 sm:w-21 sm:h-10">
						<img alt="menu" className="w-full h-full cursor-pointer p-2" src={logo} />
					</div>
				</div>
			</div>
			{/*<div>*/}
			<div className="w-3/6 flex relative">
				<input type="text"
					className="sm:rounded-l-full py px-2 sm:px-4 w-full border-2 border-gray text-[12px] focus:outline-none sm:py-2 sm:text-sm sm:w-3/4 rounded-xl"
					placeholder="Search your video"
					value={query}
					onChange={(e) => setSearchQuery(e.target.value)}
					onFocus={() => {
						setShowSuggetions(true);
					}}
					onBlur={() => {
						setShowSuggetions(false);
					}}
				/>
				<div className="w-10 h-12 items-center justify-center cursor-pointer rounded-r-full border-2 border-l-0 p-2 sm:flex hidden">
					<img src={UTILS.searchIcon} className="w-3/4" alt='search' />
				</div>
				{showSuggetions && query.length > 0 && <div className="text-sm absolute bg-white shadow-md p-2 top-[4rem] w-[80%] rounded-md h-[400px] overflow-y-auto">
					{
						suggetions.map((suggetion) => {
							return (
								<div className="p-2 hover:bg-gray-50 font-semibold flex cursor-pointer" key={suggetion}>
									<div>{searchIcon}</div>

									<div className="pl-4">{suggetion?.[0]}</div>
								</div>
							)
						})
					}
				</div>}
			</div>

			{/*</div>*/}
			<div>
				<img alt="user" className="sm:w-10 sm:h-10 w-8 h-8" src={UTILS.userIcon} />
			</div>
		</div>
	)
}

export default Head;