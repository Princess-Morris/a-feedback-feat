import PropTypes from 'prop-types';
import { type } from "@testing-library/user-event/dist/type"
import { isDisabled } from "@testing-library/user-event/dist/utils"
import { version } from "react"

function Button ({children, version, type, isDisabled}){
    return (
        <button 
        type={type} 
        disabled={isDisabled} 
        className={`btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps =  {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes ={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button