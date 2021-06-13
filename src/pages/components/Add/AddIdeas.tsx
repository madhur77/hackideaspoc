import { useState } from 'react';
import TextBox from "../TextBox/TextBox";
import Button from "../Button/Button";
import axios from "axios";
import TagList from '../Taglist/TagList';

const AddIdeas = () => {
    const [ title, setTitle ] = useState<string>(undefined);
    const [desc, changeDescription ] = useState<string>(undefined);
    const tags = [];


    const onTitleChange = (e) => { setTitle(e.target.value) };
    const onDescChange = (e) => { changeDescription(e.target.value) }
    const onTagClick = (e) => {
        let tag = e.target.value as string;
        if (e.target.checked) {
            //@ts-ignore
            tags.push(tag);
            console.log(tags);

        }
        else {
            //@ts-ignore
            tags.pop(tag);
            console.log(tags);
        }
    }
    const now = new Date();
    const addIdea = async() => {
        // Mock api post
        await axios.post("https://60bf326d97295a0017c42112.mockapi.io/ideas", {
            title: title, description: desc, epoch: Math.round(now.getTime() / 1000), votes : 0, tags : tags.toString()
        }).then(()=> alert("value saved"));
       
    }



    return (<div className="flex flex-col">
        <TextBox placeholder="title" changeHandler={onTitleChange }/>
        <TextBox placeholder="description" changeHandler={onDescChange} />
        <TagList clickHandler={onTagClick}/>
        <Button blabel="Submit you genius idea!" clickHandler={addIdea} />
    </div>);
}





export default AddIdeas;