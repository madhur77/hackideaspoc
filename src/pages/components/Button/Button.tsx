interface TButton {
    id?: string;
    blabel: string;
    clickHandler?: (any) => Promise<void> ;
    votes?: number;
}

const Button = ({ id, blabel, clickHandler, votes} : TButton) => {
    
    return (<div><button
        id={id}
        type="button"
        className='border-2 border-purple-500 px-2 rounded-xl'
        onClick={clickHandler}
    >{blabel} </button> {votes ? ' votes so far='+votes : ''}</div>);

}


export default Button;