import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getideas(req : NextApiRequest, res:NextApiResponse) {
	const listideas = await axios.get("https://60bf326d97295a0017c42112.mockapi.io/ideas");
	res.status(200).json(listideas.data);
}
