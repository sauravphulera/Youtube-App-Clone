
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeid } from "../utils/utilityFunctions";
import { SIDEBAR_CONTENT_DATA } from "../constants/constants";
import { closeMenu } from "../utils/appSlice";
import { useEffect } from "react";




const SideBarContent = ({ icon, name, to }) => {
	const dispatch = useDispatch();

	return (
		<Link to={to} onClick={() => {
			dispatch(closeMenu())
		}}>
			<div className="flex items-center p-2 w-[180px] text-[16px] hover:bg-gray-100 rounded-lg" key={name}>
				<div className="pr-2">
					{icon}
				</div>
				<div>{name}</div>
			</div>
		</Link>
	)
}


const Sidebar = () => {
	const isMEnuOpen = useSelector((store) => store.app.isMenuOpen);
	if (!isMEnuOpen) return null;

	const Headers = Object.keys(SIDEBAR_CONTENT_DATA) || [];
	return (
		<div className="bg-white px-4 py-2 shadow-lg h-[99vh] mt-[1.5px] absolute sm:relative">
			{
				Headers.map((key) => {
					return (
						<div key={makeid(4)}>
							<div className="text-lg font-semibold text-left">{key}</div>
							<div className="p-2 overflow-auto">

								{
									SIDEBAR_CONTENT_DATA[key].map((items) => {
										return (
											<SideBarContent name={items.name} icon={items.icon} key={makeid(4)} />
										)
									})
								}
							</div>
							<div className="my-2 border-b border-gray-400"></div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Sidebar;
