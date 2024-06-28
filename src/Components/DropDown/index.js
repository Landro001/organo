import './DropDown.css'

const DropDown = (props) => {
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDown