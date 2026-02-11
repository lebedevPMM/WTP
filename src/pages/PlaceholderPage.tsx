import React from 'react'
import { Link } from 'react-router-dom'

interface PlaceholderPageProps {
    title: string
    subtitle?: string
    description?: string
    backLabel?: string
    backTo?: string
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
    title,
    subtitle,
    description,
    backLabel = '← Back to Overview',
    backTo = '/',
}) => {
    return (
        <section className="header-section">
            <div className="header-meta">
                <Link to={backTo} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {backLabel}
                </Link>
            </div>
            <h1>{title}</h1>
            {subtitle && (
                <div className="mono-label" style={{ marginBottom: 16 }}>
                    {subtitle}
                </div>
            )}
            {description && <p>{description}</p>}

            <div
                style={{
                    marginTop: 48,
                    padding: 48,
                    border: '1px dashed var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                }}
            >
                <div className="mono-label" style={{ marginBottom: 8 }}>
                    CONTENT PLACEHOLDER
                </div>
                <p style={{ margin: '0 auto', maxWidth: 400 }}>
                    This page content will be provided later. The structure and navigation are ready.
                </p>
            </div>
        </section>
    )
}

export default PlaceholderPage
