interface TButton {
    blabel: string;
    clickHandler: () => void;
}

const Button = ({ blabel, clickHandler} : TButton) => {
    
    return (<button
        type="button"
        className='border-2 border-purple-500'
        onClick={ clickHandler}
    >{blabel}</button>);

}


export default Button;