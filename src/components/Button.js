import PropType from 'prop-types'

const Button =({color, text, onClick}) =>{
    return(
        <button className='btn' onClick={onClick} style={{background: color}}>{text}</button>
    )
}

Button.defaultProps ={
    color: 'steelblue'
}

Button.propType ={
    text: PropType.string,
    color: PropType.string,
    onClick: PropType.func
}

export default Button