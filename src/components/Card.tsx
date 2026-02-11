import React from 'react'

interface CardProps {
    icon: string
    iconVariant?: 'default' | 'dashed' | 'dotted'
    iconBorderRadius?: string
    title: string
    description: string
    number?: string
    minHeight?: number
}

const Card: React.FC<CardProps> = ({
    icon,
    iconVariant = 'default',
    iconBorderRadius,
    title,
    description,
    number,
    minHeight,
}) => {
    const iconClass = `card-icon-box${iconVariant !== 'default' ? ` ${iconVariant}` : ''}`

    return (
        <div className="card" style={minHeight ? { minHeight } : undefined}>
            <div
                className={iconClass}
                style={iconBorderRadius ? { borderRadius: iconBorderRadius } : undefined}
            >
                {icon}
            </div>
            <div className="card-content">
                <div className="card-title">{title}</div>
                <p className="card-desc">{description}</p>
            </div>
            {number && <div className="card-number">{number}</div>}
        </div>
    )
}

export default Card
