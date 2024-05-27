
const Button = ({ name }) => {
	return (
		<div>
			<button className="m-2 py-2 px-4 bg-gray-100 hover:bg-gray-200 focus:outline-none text-sm rounded-lg">{name}</button>
		</div>
	)
}

export default Button;