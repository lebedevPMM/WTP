import React from 'react'
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom'

interface FeedItem {
    meta: string
    title: string
    href: string
}

const navItems = [
    { to: '/', anchor: '#intro', label: 'Overview' },
    { to: '/', anchor: '#benefits', label: 'Benefits' },
    { to: '/', anchor: '#process', label: 'Process' },
    { to: '/engagement', anchor: '#models', label: 'Engagement', badge: '2' },
    { to: '/', anchor: '#risk', label: 'Risk Policy' },
    { to: '/', anchor: '#products', label: 'Products' },
]

const feedItems: FeedItem[] = [
    { meta: 'Pilot Program', title: 'Get the Partner Kit and run a case', href: '/partner-kit' },
    { meta: 'Contact', title: 'Telegram / Email', href: '/contact' },
    { meta: 'Update', title: 'New Banking Scenarios added', href: '/updates' },
]

const Layout: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const isHome = location.pathname === '/'

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
        // Engagement always navigates to its own page
        if (item.to !== '/') {
            e.preventDefault()
            navigate(item.to)
            return
        }

        if (isHome) {
            // On home page — smooth scroll to anchor
            e.preventDefault()
            const el = document.querySelector(item.anchor)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            // On subpages — navigate home, then scroll after render
            e.preventDefault()
            navigate('/')
            // Small delay to let the page render before scrolling
            setTimeout(() => {
                const el = document.querySelector(item.anchor)
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        }
    }

    const isNavActive = (item: typeof navItems[0]) => {
        if (item.to !== '/') {
            return location.pathname === item.to
        }
        // On home page, Overview is always "active" by default
        if (isHome && item.anchor === '#intro') return true
        return false
    }

    return (
        <div className="app-container">
            <aside className="sidebar">
                <div>
                    <Link to="/" className="brand-icon" style={{ textDecoration: 'none', color: 'inherit' }} />

                    <nav className="nav-group">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.to === '/' ? item.anchor : item.to}
                                className={`nav-item${isNavActive(item) ? ' active' : ''}`}
                                onClick={(e) => handleNavClick(e, item)}
                            >
                                {item.label}
                                {item.badge && <span className="nav-badge">{item.badge}</span>}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="sidebar-feed">
                    {feedItems.map((item, i) => (
                        <Link to={item.href} className="feed-item" key={i} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                            <span className="feed-meta">{item.meta}</span>
                            <div className="feed-title">{item.title}</div>
                        </Link>
                    ))}
                </div>
            </aside>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
