import React, { useMemo } from 'react'
import { InlineButton, RegularButton } from './Button.css'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const Button = ({ variant, children, ...props }) => {
    const { to } = props
    const Component = useMemo(() => {
        switch (variant) {
            case 'inline':
                return InlineButton
            case 'regular':
                return RegularButton
        
            default:
                return RegularButton
        }
    }, [variant])

    const content = useMemo(() => (
        <Component {...props}>
            { children } 
        </Component>
    ), [props, children])

    return to ? (
        <Link {...props}>
            { content }
        </Link>
    ): (
        <>
            { content }
        </>
    )
}

Button.propTypes = {
    variant: PropTypes.oneOf(['inline', 'regular'])
}

export default Button