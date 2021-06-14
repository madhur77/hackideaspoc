const Filter = ({filter , handler}) => {

    return <button key={ filter} type="button" className="border-4" onClick={ handler}>{ filter}</button>
}

export default Filter;