
interface IList  {
    idea: string;
    description: string;
}
const Idea = ({ idea, description }:IList) => {
    return (<div style={{ color: "white", marginTop: 10, width: '100%', background: "black", padding: "5px" }}>
        {idea}+{description}</div>)
}

export default Idea;