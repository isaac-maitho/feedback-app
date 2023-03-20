import PropTypes from 'prop-types'
import React, { version } from 'react'

function Button({children, version, type, isDisabled}) {
  return (
    <Button type ={type} disabled={isDisabled} className ={`btn btn-${version}`}>
        {children}
    </Button>
    )
}
Button.defaultProps ={
    version: 'primary',
    type: 'button',
    isDisabled: false
}
Button.propTypes ={
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button