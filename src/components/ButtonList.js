import Button from "./Button";

const ButtonsList = () => {
	return (
		<div className="flex">
			<Button name="all" />
			<Button name="Gaming" />
			<Button name="Cooking" />
		</div>
	)
}

export default ButtonsList;