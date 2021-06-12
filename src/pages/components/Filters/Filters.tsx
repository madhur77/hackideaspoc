const Filter = ({filter , handler}) => {

    return <button type="button" className="border-4" onClick={ handler}>{ filter}</button>


}

export default Filter;