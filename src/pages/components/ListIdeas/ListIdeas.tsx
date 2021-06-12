import Idea from "./Idea";
import Filter from "../Filters/Filters";
import { useState } from "react";

interface IListItem {
    
    id: string;
    title: string;
    description: string;

}

const ListIdeas = ({ list }) => {
    const [locallist, setLocalList] = useState<Array<IListItem>>(list);

    // sorting by the latest of the epoch
    const sortNewFirst = () => {
        list.sort((a, b) => a.epoch - b.epoch);
        setLocalList(list);
     
    }
    return (<div>
        <Filter filter="Newest first" handler={sortNewFirst}/>
        
        {locallist.map(idea => <Idea key={idea.id} idea={idea.title} description={ idea.description}/>)}
    </div>);
    
};


export default ListIdeas;