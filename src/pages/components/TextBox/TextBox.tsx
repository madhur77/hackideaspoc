interface ITitle  {
    placeholder: string;
    changeHandler : ( string) => void;
}

const TextBox = ({ placeholder , changeHandler}:ITitle) => {
    
    return (<input type="text"
        placeholder={placeholder}
        className="border-b-2 cursor-auto my-2 focus:border-b-4"
        onChange={ changeHandler}
    />);
}

export default TextBox;