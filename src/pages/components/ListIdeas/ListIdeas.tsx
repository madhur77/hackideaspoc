import Idea from "./Idea";
import Filter from "../Filters/Filters";
import { useState } from "react";

interface IListItem {
    
    id: number;
    title: string;
    description: string;
    votes: number;
    tags: string;

}

const ListIdeas = ({ list }) => {
    const [locallist, setLocalList] = useState<Array<IListItem>>(list);

    // sorting by the latest of the epoch
    const sortNewFirst = () => {
        const sortList = [...list].sort((a, b) => b.epoch - a.epoch);
        setLocalList(sortList);
     
    }

    const sortHighestvotesFirst = () => {
        
        const sortList = [...list].sort((a, b) => b.votes - a.votes);
        setLocalList(sortList);
    }


    return (<div>
        <Filter filter="Sort newest first" handler={sortNewFirst} />
        <Filter filter="Highest votes first" handler={sortHighestvotesFirst} />
        {locallist.map(idea => <Idea
            key={idea.id}
            id={idea.id}
            idea={idea.title}
            description={idea.description}
            votes={idea.votes}
            tags={ idea.tags}
        />)}
    </div>);
    
};


export default ListIdeas;