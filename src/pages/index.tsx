import axios from "axios";
import AddIdeas from "../components/Add/AddIdeas";
import ListIdeas from "../components/ListIdeas/ListIdeas";
import nookies from 'nookies';


const Home = ({listofideas,username}) => {
	
	return (
		<div className="flex flex-col items-center py-2 " >
			<div className="text-red-600">Welcome {username}</div>
			<div className='text-4xl text-center'>HACK IDEAS!!</div>
			{username ? <AddIdeas /> : <a href="/login">Login to add idea</a>}
				<div className='my-8' >
					<ListIdeas list={listofideas} />
				</div>
			
		</div>
	);
}



export const getServerSideProps = async(ctx:object) => {
	const cookies = nookies.get(ctx)

	const listofideas = await axios.get("http://localhost:3000/api/getideas");
	return {
		props: {
			listofideas: listofideas.data,
			username: cookies.username || null
		}
	}

}

export default Home;
