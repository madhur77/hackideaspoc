import axios from "axios";
import AddIdeas from "./components/Add/AddIdeas";
import ListIdeas from "./components/ListIdeas/ListIdeas";



const Home = ({listofideas}) => {
	
	return (
		<div className="flex flex-col items-center py-2 " >
			<div className='text-4xl text-center'>HACK IDEAS!!</div>
				<AddIdeas /> 
				<div className='my-8' >
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
