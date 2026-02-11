import React from 'react'
import { Link } from 'react-router-dom'

interface ListRowProps {
    icon: string
    iconVariant?: 'default' | 'dark' | 'accent'
    title: string
    meta: string
    action: string
    href?: string
}

const ListRow: React.FC<ListRowProps> = ({
    icon,
    iconVariant = 'default',
    title,
    meta,
    action,
    href,
}) => {
    const iconClass = `row-icon${iconVariant !== 'default' ? ` ${iconVariant}` : ''}`

    const content = (
        <>
            <div className={iconClass}>{icon}</div>
            <div className="row-content">
                <div className="row-title">{title}</div>
                <div className="row-meta">{meta}</div>
            </div>
            <div className="row-action">{action}</div>
        </>
    )

    if (href) {
        return (
            <Link to={href} className="list-row">
                {content}
            </Link>
        )
    }

    return <div className="list-row">{content}</div>
}

export default ListRow
