import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
    label: string
    variant?: 'primary' | 'secondary'
    href?: string
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', href, onClick }) => {
    const className = `button btn-${variant}`

    if (href) {
        return (
            <Link to={href} className={className}>
                {label}
            </Link>
        )
    }

    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button
