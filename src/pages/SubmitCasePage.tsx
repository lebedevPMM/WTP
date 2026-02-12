import React from 'react'
import { Link } from 'react-router-dom'

const SubmitCasePage: React.FC = () => {
    return (
        <>
            <section className="header-section">
                <div className="header-meta">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        ← Back to Overview
                    </Link>
                </div>
                <h1>Submit Case</h1>
                <div className="mono-label" style={{ marginBottom: 16 }}>NEW CASE</div>
                <p>
                    Submit your client case for pre-screening and bankability assessment.
                    Below is the minimum information and documents we need to start.
                </p>
            </section>

            {/* KYC Light */}
            <section className="grid-section">
                <h2>
                    KYC Light
                    <span className="mono-label">Intake Qualification</span>
                </h2>
                <p className="section-subtitle">
                    Before starting any service, we need to understand the client's profile
                    through a quick pre-qualification check.
                </p>

                <div className="list-group" style={{ marginTop: 24 }}>
                    <div className="list-row">
                        <div className="row-icon dark">1</div>
                        <div className="row-content">
                            <div className="row-title">Purpose & Context</div>
                            <div className="row-meta">
                                Residency / Banking / Business / Real Estate / Tax / Family — select applicable
                            </div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="row-icon">2</div>
                        <div className="row-content">
                            <div className="row-title">Personal Profile</div>
                            <div className="row-meta">
                                Citizenship, tax residency, prior bank refusals or enhanced due diligence
                            </div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="row-icon">3</div>
                        <div className="row-content">
                            <div className="row-title">Source of Funds</div>
                            <div className="row-meta">
                                Business / Salary / Asset sale / Investment / Heritage — with supporting documents
                            </div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="row-icon">4</div>
                        <div className="row-content">
                            <div className="row-title">Payment & Banking Profile</div>
                            <div className="row-meta">
                                Transaction types, geography of payments, expected monthly volume
                            </div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="row-icon">5</div>
                        <div className="row-content">
                            <div className="row-title">Business Details</div>
                            <div className="row-meta">
                                Industry, client/supplier countries, sensitive sectors (crypto, forex, gambling, defense)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="grid-section">
                <h2>
                    Required Documents
                    <span className="mono-label">Start Pack</span>
                </h2>
                <div className="grid-2">
                    <div className="engagement-card">
                        <div className="detail-label">Individual</div>
                        <ol className="detail-list">
                            <li>Passport (all pages with visas)</li>
                            <li>Proof of address (utility bill / bank statement, ≤ 3 months)</li>
                            <li>CV or brief description of activity</li>
                            <li>Source of funds confirmation (contracts, dividends, sale agreements)</li>
                        </ol>
                    </div>
                    <div className="engagement-card">
                        <div className="detail-label">Business (if applicable)</div>
                        <ol className="detail-list">
                            <li>Business description (1 page)</li>
                            <li>Ownership structure (UBO chart)</li>
                            <li>Registration documents (if existing company)</li>
                            <li>Key client/supplier contracts (if available)</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Urgency */}
            <section className="grid-section">
                <h2>
                    Urgency Level
                    <span className="mono-label">Timeline</span>
                </h2>
                <div className="list-group">
                    <div className="list-row">
                        <div className="row-icon">S</div>
                        <div className="row-content">
                            <div className="row-title">Standard</div>
                            <div className="row-meta">1–3 months processing time</div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="row-icon accent">A</div>
                        <div className="row-content">
                            <div className="row-title">Accelerated</div>
                            <div className="row-meta">Priority processing, adjusted pricing</div>
                        </div>
                    </div>
                    <div className="list-row">
                        <div className="row-icon" style={{ background: '#cd3e30', color: '#fff' }}>C</div>
                        <div className="row-content">
                            <div className="row-title">Critical</div>
                            <div className="row-meta">Deadline-driven, requires immediate assessment</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="grid-section">
                <div className="engagement-bar">
                    <p style={{ margin: 0, maxWidth: 'none' }}>
                        Ready to submit? Contact your WTP partner manager or reach out directly.
                    </p>
                    <Link to="/contact" className="mono-label" style={{ textDecoration: 'none', color: 'inherit' }}>
                        CONTACT →
                    </Link>
                </div>
            </section>
        </>
    )
}

export default SubmitCasePage
