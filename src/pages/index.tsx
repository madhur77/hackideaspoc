import axios from "axios";
import AddIdeas from "./components/Add/AddIdeas";
import ListIdeas from "./components/ListIdeas/ListIdeas";



const Home = ({listofideas}) =>{
	
	return (
		<div className="flex flex-col items-center justify-center  py-2 ">
			<h1 className="bg-red-600">HACK IDEAS!!</h1>
			<AddIdeas />
			<div>
				<ListIdeas list={listofideas} />
			</div>
		</div>
	);
}


export const getServerSideProps = async () => {
	
	const listofideas = await axios.get("http://localhost:3000/api/getideas");
	return {
		props: {
			listofideas: listofideas.data
		}
	}

}

export default Home;
