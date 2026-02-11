import React from 'react'

interface NavItem {
    href: string
    label: string
    badge?: string
    active?: boolean
}

interface FeedItem {
    meta: string
    title: string
}

interface SidebarProps {
    navItems: NavItem[]
    feedItems: FeedItem[]
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, feedItems }) => {
    return (
        <aside className="sidebar">
            <div>
                <div className="brand-icon" />

                <nav className="nav-group">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`nav-item${item.active ? ' active' : ''}`}
                        >
                            {item.label}
                            {item.badge && <span className="nav-badge">{item.badge}</span>}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="sidebar-feed">
                {feedItems.map((item, i) => (
                    <div className="feed-item" key={i}>
                        <span className="feed-meta">{item.meta}</span>
                        <div className="feed-title">{item.title}</div>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default Sidebar
