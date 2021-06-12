import { useState } from 'react';
import TextBox from "../TextBox/TextBox";
import Button from "../Button/Button";
import axios from "axios";

const AddIdeas = () => {
    const [ title, setTitle ] = useState<string>(undefined);
    const [desc, changeDescription ] = useState<string>(undefined);

    const onTitleChange = (e) => { setTitle(e.target.value) };
    const onDescChange = (e) => { changeDescription(e.target.value) }
    const now = new Date();
    const addIdea = async() => {
        // Mock api post
        await axios.post("https://60bf326d97295a0017c42112.mockapi.io/ideas", {
            title: title, description: desc, epoch : Math.round(now.getTime() / 1000)
        }).then(()=> alert("value saved"));
       
    }



    return (<div className="flex flex-col">
        <TextBox placeholder="title" changeHandler={onTitleChange }/>
        <TextBox placeholder="description" changeHandler={onDescChange }/>
        <Button blabel="hit me" clickHandler={addIdea} />
    </div>);
}





export default AddIdeas;