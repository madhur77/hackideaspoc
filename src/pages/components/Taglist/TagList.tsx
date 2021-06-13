
const listoftags = ['feature', 'tech', 'bacaklog', 'moonshot'];

const TagList = ({ clickHandler }) => {
    

    return (<div>
        {listoftags && listoftags.map(tag => (<label>  <input data-testid="cb" type="checkbox" value={ tag} onClick={clickHandler} />{tag}</label>  ))
        }
    </div>)


}


export default TagList;