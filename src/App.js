import RoutesContainer from "./routes/routes";
import { Helmet } from "react-helmet";

const App = () => {
	return (
		<>
			<Helmet
				title={"Marktodo"}
			/>
			<RoutesContainer/>
		</>
	);
}

export default App;
