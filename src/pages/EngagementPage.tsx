import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components'

const EngagementPage: React.FC = () => {
    return (
        <>
            <section className="header-section">
                <div className="header-meta">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        ← Back to Overview
                    </Link>
                </div>
                <h1>Engagement Models</h1>
                <div className="mono-label" style={{ marginBottom: 16 }}>COLLABORATION</div>
                <p>
                    WTP offers two partnership modes. Choose based on your business model,
                    client relationship, and preferred level of visibility.
                </p>
            </section>

            {/* Two-column comparison */}
            <section className="grid-section">
                <div className="grid-2">
                    {/* Referral */}
                    <div className="engagement-card">
                        <div className="mono-label" style={{ marginBottom: 12 }}>MODE 1</div>
                        <h2 style={{ fontSize: 24, marginBottom: 16 }}>Referral</h2>
                        <p className="section-subtitle" style={{ marginBottom: 24 }}>
                            Partner introduces the client. WTP leads end-to-end execution.
                            Partner is protected and earns commission.
                        </p>

                        <div className="detail-block">
                            <div className="detail-label">How it works</div>
                            <ol className="detail-list">
                                <li>Partner makes official intro (Telegram / CRM)</li>
                                <li>Client ownership is fixed to partner</li>
                                <li>WTP runs pre-screen & banking analysis</li>
                                <li>Scope & commission confirmed with partner</li>
                                <li>Client pays WTP directly</li>
                                <li>WTP delivers, partner gets regular status updates</li>
                                <li>Commission paid upon completion</li>
                            </ol>
                        </div>

                        <div className="detail-block">
                            <div className="detail-label">Payment flow</div>
                            <p className="detail-text">Client → WTP → Commission → Partner</p>
                        </div>

                        <div className="detail-block">
                            <div className="detail-label">Best for</div>
                            <ul className="detail-list">
                                <li>Active client introductions</li>
                                <li>HNWI clients</li>
                                <li>Scaling partner networks</li>
                            </ul>
                        </div>
                    </div>

                    {/* White-Label */}
                    <div className="engagement-card">
                        <div className="mono-label" style={{ marginBottom: 12 }}>MODE 2</div>
                        <h2 style={{ fontSize: 24, marginBottom: 16 }}>White-Label</h2>
                        <p className="section-subtitle" style={{ marginBottom: 24 }}>
                            Partner is the face. WTP operates as back-office.
                            Client may not know about WTP.
                        </p>

                        <div className="detail-block">
                            <div className="detail-label">How it works</div>
                            <ol className="detail-list">
                                <li>Partner transfers case with scope definition</li>
                                <li>WTP runs analysis, results go to partner</li>
                                <li>Partner confirms with client</li>
                                <li>Contract: Partner ↔ Client, WTP as subcontractor</li>
                                <li>Client pays partner, partner pays WTP</li>
                                <li>WTP executes, all communication via partner</li>
                                <li>Completion report delivered to partner</li>
                            </ol>
                        </div>

                        <div className="detail-block">
                            <div className="detail-label">Payment flow</div>
                            <p className="detail-text">Client → Partner → WTP (agreed fee)</p>
                        </div>

                        <div className="detail-block">
                            <div className="detail-label">Best for</div>
                            <ul className="detail-list">
                                <li>Private bankers</li>
                                <li>Family offices</li>
                                <li>Consultants with strong brand</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shared rules */}
            <section className="grid-section">
                <h2>
                    Shared Rules
                    <span className="mono-label">Both Modes</span>
                </h2>
                <div className="rules-list">
                    <div className="rule-item">
                        <span className="rule-icon">◆</span>
                        Client ownership is fixed and recorded
                    </div>
                    <div className="rule-item">
                        <span className="rule-icon">◆</span>
                        Scope of services agreed before start
                    </div>
                    <div className="rule-item">
                        <span className="rule-icon">◆</span>
                        No promises without defined scope
                    </div>
                    <div className="rule-item">
                        <span className="rule-icon">◆</span>
                        All changes in writing only
                    </div>
                    <div className="rule-item">
                        <span className="rule-icon">◆</span>
                        Compliance over speed — always
                    </div>
                </div>
            </section>

            {/* Partner guarantees */}
            <section className="grid-section">
                <h2>
                    Partner Guarantees
                    <span className="mono-label">Protection</span>
                </h2>
                <div className="grid-2">
                    <Card
                        icon="🛡"
                        title="Non-Circumvention"
                        description="Direct contact with client without partner is prohibited. Even if initiated by client, partner stays in the loop."
                        iconBorderRadius="4px"
                        minHeight={180}
                    />
                    <Card
                        icon="⏳"
                        title="12–24 Month Protection"
                        description="Partner protection remains active for the entire engagement and 12–24 months after last activity."
                        iconBorderRadius="4px"
                        minHeight={180}
                    />
                    <Card
                        icon="📋"
                        title="Ownership Fixed"
                        description="Client ownership is recorded in CRM. Changes only with written consent from the partner."
                        iconBorderRadius="4px"
                        minHeight={180}
                    />
                    <Card
                        icon="💰"
                        title="Transparent Payments"
                        description="Commission structure agreed upfront. No hidden upsells. We earn together, not instead of the partner."
                        iconBorderRadius="4px"
                        minHeight={180}
                    />
                </div>
            </section>
        </>
    )
}

export default EngagementPage
