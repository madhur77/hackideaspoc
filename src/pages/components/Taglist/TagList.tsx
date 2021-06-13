
const listoftags = ['feature', 'tech', 'bacaklog', 'moonshot'];

const TagList = ({ clickHandler }) => {
    

    return (<div>
        {listoftags && listoftags.map(tag => (<label>  <input type="checkbox" value={ tag} onClick={clickHandler} />{tag}</label>  ))
        }
    </div>)


}


export default TagList;