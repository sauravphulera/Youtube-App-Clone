import { useEffect, useState } from "react";
import { LIVE_CHATS } from "../constants/constants";
import { generateRandomNames, makeid } from "../utils/utilityFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const ChatMessage = ({ data }) => {

	const { name, msg } = data;
	return (
		<div className="p-2 my-2 flex text-sm items-center">
			<div className="w-8 h-8 bg-pink-800 flex justify-center items-center text-white rounded-full">
				<div>
					{name?.[0]}
				</div>
			</div>
			<div className="ml-2 font-semibold text-gray-700">{name}</div>
			<div className="ml-2">{msg}</div>
		</div>
	)
}


const LiveChat = () => {

	const [liveMsg, setLiveMsg] = useState('');

	const dispatch = useDispatch();

	const chatMessages = useSelector((store) => store.chat.messages)

	useEffect(() => {
		const interval = setInterval(() => {
			console.log('API Polling');
			dispatch(addMessage({
				name: generateRandomNames(),
				msg: 'Lorem ipsum dem sim emit'
			}))
		}, 10000);
		return () => {
			clearInterval(interval);
		}
	}, [])

	return (
		<div className="ml-4 border border-gray-300 rounded-xl w-[calc(100% - 2rem)] h-full">
			<div className="border-b border-gray-300 p-2 text-xl">
				Top Chat Replay
			</div>
			<div className="p-2 h-[calc(100%-118px)] overflow-y-auto overflow-x-hidden flex flex-col-reverse rounded-none">

				{
					chatMessages.map((chat) => {
						return <ChatMessage data={chat} key={makeid(3)} />
					})
				}
			</div>
			<form className="border-t border-gray-300 py-3 px-2 w-[calc(100%+1px)] rounded-xl rounded-t-none flex justify-center"
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(addMessage({
						name: 'Saurav Phulera',
						msg: liveMsg
					}))
					setLiveMsg('');
				}}>
				<input type="text"
					className="rounded-full w-[70%] bg-gray-100 focus:outline-none text-[12px] py-2 px-4"
					placeholder="Chat..."
					value={liveMsg}
					onChange={(e) => { setLiveMsg(e.target.value) }}
				/>
				<div className="pl-2">
					😁
				</div>
			</form>
		</div>

	)
}

export default LiveChat;