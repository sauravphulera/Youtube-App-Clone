import { UTILS } from "../constants/constants";
import { makeid } from "../utils/utilityFunctions";

const comments = [
	{
		name: "Saurav Phulera",
		text: "Hikaru is the best player after magnus",
		replies: [
			{
				name: "Samarth Gupta",
				text: "Well there are a lot of players like Fabiano, Alireja Firouza and prodigies like Gukesh etc"
			},
			{
				name: "Lav Rai",
				text: "What the fuck??",
				replies: [
					{
						name: "Samarth Gupta",
						text: "Well there are a lot of players like Fabiano, Alireja Firouza and prodigies like Gukesh etc"
					},
					{
						name: "Samarth Gupta",
						text: "Well there are a lot of players like Fabiano, Alireja Firouza and prodigies like Gukesh etc"
					},
					{
						name: "Samarth Gupta",
						text: "Well there are a lot of players like Fabiano, Alireja Firouza and prodigies like Gukesh etc"
					},
				]
			}
		]
	},
	{
		name: "Saurav Phulera",
		text: "Lorem ipsum dolar sit amet."
	},
	{
		name: "Saurav Phulera",
		text: "Lorem ipsum dolar sit amet."
	},
	{
		name: "Saurav Phulera",
		text: "Lorem ipsum dolar sit amet."
	},
	{
		name: "Saurav Phulera",
		text: "Lorem ipsum dolar sit amet."
	},
]
const CommentUI = ({ comment }) => {
	if (!comment) return;
	const { name, text } = comment;

	return <div className="flex p-2 bg-gray-100 rounded-lg mt-2">
		<div>
			<img alt="user" className="w-10 h-10" src={UTILS.userIcon} />
		</div>
		<div className="text-sm px-2">
			<div className="font-bold">{name}</div>
			<div>{text}</div>
		</div>
	</div>
}



const CommentsList = (({ data }) => {
	if (!data) return;
	return (
		<div className="mt-2">
			<CommentUI comment={data} key={makeid(4)} />
			{
				data?.replies &&
				<div className="pl-5">
					{
						data?.replies?.map((reply) => {
							return <CommentsList data={reply} key={makeid(3)} />;
						})
					}
				</div>
			}
		</div>

	)
})




const CommentsContainer = () => {
	return (
		<div className="p-2">
			<h1 className="text-2xl font-bold"> {comments.length} Comments: </h1>
			{
				comments.map((data) => {
					return <CommentsList data={data} key={makeid(6)} />
				})
			}
		</div>
	)
}

export default CommentsContainer;