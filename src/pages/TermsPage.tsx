import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components'

const TermsPage: React.FC = () => {
    return (
        <>
            <section className="header-section">
                <div className="header-meta">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        ← Back to Process
                    </Link>
                </div>
                <h1>Delivery Terms</h1>
                <div className="mono-label" style={{ marginBottom: 16 }}>DELIVERY PROCESS</div>
                <p>
                    Our delivery principles, risk framework, and operating rules that
                    govern every engagement.
                </p>
            </section>

            {/* Core Principles */}
            <section className="grid-section">
                <h2>
                    Core Principles
                    <span className="mono-label">Foundation</span>
                </h2>
                <div className="grid-2">
                    <Card
                        icon="B"
                        title="Banking First"
                        description="We assess every case through the bank's lens before any registration. Structure is chosen to serve the bank, not the other way around."
                        iconBorderRadius="4px"
                        minHeight={160}
                    />
                    <Card
                        icon="C"
                        title="Compliance Over Speed"
                        description="We never cut corners. Quality of compliance documentation matters more than delivery speed."
                        iconBorderRadius="4px"
                        minHeight={160}
                    />
                    <Card
                        icon="S"
                        title="Scope Before Promises"
                        description="No scope — no promises. Services, timelines, and pricing are fixed before work begins."
                        iconBorderRadius="4px"
                        minHeight={160}
                    />
                    <Card
                        icon="T"
                        title="Written Changes Only"
                        description="All scope changes, additional services, and modifications must be confirmed in writing."
                        iconBorderRadius="4px"
                        minHeight={160}
                    />
                </div>
            </section>

            {/* Risk Verdict */}
            <section className="grid-section">
                <h2>
                    Risk Verdict Framework
                    <span className="mono-label">Gatekeeping</span>
                </h2>
                <div className="grid-3">
                    <div className="engagement-card">
                        <div className="detail-label" style={{ color: '#2d8a4e' }}>✅ We Accept</div>
                        <ul className="detail-list">
                            <li>Multi-service potential clients</li>
                            <li>Partners and repeat clients</li>
                            <li>Transparent business logic</li>
                            <li>Long-term orientation</li>
                        </ul>
                    </div>
                    <div className="engagement-card">
                        <div className="detail-label" style={{ color: '#b5851b' }}>⚠ Conditions Apply</div>
                        <ul className="detail-list">
                            <li>Complex banking cases</li>
                            <li>No guarantee of result</li>
                            <li>Complex structures or jurisdictions</li>
                        </ul>
                        <div className="detail-text" style={{ fontSize: 13, marginTop: 12, color: 'var(--text-meta)' }}>
                            → Higher pricing, fixed scope, no result guarantee
                        </div>
                    </div>
                    <div className="engagement-card">
                        <div className="detail-label" style={{ color: '#cd3e30' }}>❌ We Decline</div>
                        <ul className="detail-list">
                            <li>Sanctioned persons</li>
                            <li>"Do it without documents" requests</li>
                            <li>No prepayment readiness</li>
                            <li>One-off tasks without continuation</li>
                            <li>Concierge requests outside partnership</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* What We Never Do */}
            <section className="grid-section">
                <h2>
                    What We Never Do
                    <span className="mono-label">Red Lines</span>
                </h2>
                <div className="list-group">
                    {[
                        'Promise impossible outcomes',
                        'Minimize or hide compliance risks',
                        'Improvise in gray areas',
                        'Bypass partner in client communication',
                        'Share client data with third parties',
                        'Make undocumented agreements',
                    ].map((rule, i) => (
                        <div className="list-row" key={i}>
                            <div className="row-icon" style={{ background: '#cd3e30', color: '#fff', fontSize: 12 }}>✕</div>
                            <div className="row-content">
                                <div className="row-title">{rule}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Communication Policy */}
            <section className="grid-section">
                <h2>
                    Communication Policy
                    <span className="mono-label">Standards</span>
                </h2>
                <div className="grid-2">
                    <div className="engagement-card">
                        <div className="detail-label" style={{ color: '#2d8a4e' }}>✔ Permitted</div>
                        <ul className="detail-list">
                            <li>Communication with client in partner's presence</li>
                            <li>Agreed communication channels</li>
                            <li>Shared work chats with partner included</li>
                        </ul>
                    </div>
                    <div className="engagement-card">
                        <div className="detail-label" style={{ color: '#cd3e30' }}>✕ Prohibited</div>
                        <ul className="detail-list">
                            <li>Private messages to client</li>
                            <li>Parallel calls without partner</li>
                            <li>Undocumented arrangements</li>
                            <li>Direct service offers bypassing partner</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsPage
