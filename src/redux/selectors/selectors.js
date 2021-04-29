import { useSelector, shallowEqual } from "react-redux";

function useName() {
	return useSelector((state) => state.name, shallowEqual);
}

export { useName };
