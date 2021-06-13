import axios from "axios";
import { useState } from "react";
import Button from "../Button/Button"
import { parseCookies, setCookie, destroyCookie } from 'nookies'
interface IList  {
    id: string;
    idea: string;
    description: string;
    votes: number;
    tags: string;
}


const Idea = ({ id, idea, description , votes,tags}: IList) => {
    const [tvotes, reviseVote] = useState<number>(votes);
    const upVote = async (e) => {
        const cookies = parseCookies()
        if (!cookies.username) { alert("Please login to vote"); return } 


    // hit the api
     await axios.put("https://60bf326d97295a0017c42112.mockapi.io/ideas/" + id, {

         votes: votes + 1
     }).then(() => {
         
         alert("vote submitted")
         reviseVote(tvotes + 1);
     });


    }


    return (<div>
        <div
            className="bg-green-800 text-white  inline-block text-center p-2 m-2"
            data-testid='idea'
        >{idea} => {description}</div>
        <div className=' mx-4 inline-block'>
            <Button blabel="vote up" clickHandler={upVote} id={id} votes={tvotes} /></div>
        <div className="bg-red-500 text-white p-2">{ tags}</div>
        </div>)
}

export default Idea;