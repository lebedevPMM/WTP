import React from 'react'
import { useParams, Link } from 'react-router-dom'

interface StepDetail {
    title: string
    subtitle: string
    intro: string
    actions: string[]
    result: string
    nextStep?: string
    nextHref?: string
}

const processData: Record<string, StepDetail> = {
    'pre-screen': {
        title: 'Pre-screen',
        subtitle: 'D: PRE-ACTION',
        intro:
            'Banking First — we assess every case through the bank\'s lens before any registration. Documents go to the banker for preliminary review. Only after a positive signal do we proceed.',
        actions: [
            'Collect KYC Light documents (passport, proof of address, source of funds)',
            'Assess the case from the bank\'s perspective: red flags, business logic, potential issues',
            'Send documents to banker for preliminary identity verification',
            'Issue verdict: ✅ proceed / ⚠ proceed with conditions / ❌ decline',
        ],
        result:
            'Clear understanding of bankability before any commitments are made. No wasted time, no false promises.',
        nextStep: 'Banking Scenario',
        nextHref: '/process/banking-scenario',
    },
    'banking-scenario': {
        title: 'Banking Scenario',
        subtitle: 'D: STRATEGY',
        intro:
            'Once the case is cleared, we design the banking strategy: which banks have a real chance, what are their requirements, and how to structure the approach.',
        actions: [
            'Determine target banks based on client profile and risk appetite',
            'Map bank-specific requirements and documentation needs',
            'Choose optimal jurisdiction and company structure (if applicable)',
            'Define the full scope and announce pricing',
        ],
        result:
            'A concrete banking strategy with realistic targets. Structure is chosen to serve the bank, not the other way around.',
        nextStep: 'Delivery',
        nextHref: '/process/delivery',
    },
    'delivery': {
        title: 'Delivery',
        subtitle: 'D: EXECUTION',
        intro:
            'Execution phase: company registration, bank account submission, visa processing — all aligned with the banking strategy from the previous step.',
        actions: [
            'Register company in the chosen zone (Free Zone / Mainland)',
            'Submit bank application with pre-approved document package',
            'Process visas and Emirates ID',
            'Respond to bank compliance questions and iterate on documentation',
            'Finalize until structure is accepted by bank and regulators',
        ],
        result:
            'Working business structure accepted by the bank, with correct compliance, tax logic, and legal foundation.',
        nextStep: 'Ongoing Support',
        nextHref: '/process/ongoing-support',
    },
    'ongoing-support': {
        title: 'Ongoing Support',
        subtitle: 'D: MAINTENANCE',
        intro:
            'Post-delivery retainer: operational stability, compliance monitoring, and long-term value creation for partner and client.',
        actions: [
            'License renewals and corporate maintenance',
            'Bank relationship management and compliance updates',
            'Visa renewals and status changes',
            'Additional services: wills, real estate, capital flows',
            'Partner referral management and commission tracking',
        ],
        result:
            'Client becomes a long-term relationship. Repeat business generates predictable revenue for the partner.',
    },
}

const ProcessPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const data = slug ? processData[slug] : null

    if (!data) {
        return (
            <section className="header-section">
                <div className="header-meta">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        ← Back to Overview
                    </Link>
                </div>
                <h1>Process Step Not Found</h1>
                <p>The requested process step does not exist.</p>
            </section>
        )
    }

    return (
        <>
            <section className="header-section">
                <div className="header-meta">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        ← Back to Overview
                    </Link>
                </div>
                <h1>{data.title}</h1>
                <div className="mono-label" style={{ marginBottom: 16 }}>{data.subtitle}</div>
                <p>{data.intro}</p>
            </section>

            <section className="grid-section">
                <h2>
                    What Happens
                    <span className="mono-label">Actions</span>
                </h2>
                <div className="list-group">
                    {data.actions.map((action, i) => (
                        <div className="list-row" key={i}>
                            <div className="row-icon" style={{ fontSize: 10 }}>{i + 1}</div>
                            <div className="row-content">
                                <div className="row-title">{action}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid-section">
                <h2>
                    Result
                    <span className="mono-label">Outcome</span>
                </h2>
                <div className="engagement-bar">
                    <p style={{ margin: 0, maxWidth: 'none' }}>{data.result}</p>
                </div>
            </section>

            {data.nextStep && data.nextHref && (
                <section className="grid-section">
                    <Link
                        to={data.nextHref}
                        className="engagement-bar"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div>
                            <strong>Next Step:</strong> {data.nextStep}
                        </div>
                        <span className="mono-label">CONTINUE →</span>
                    </Link>
                </section>
            )}
        </>
    )
}

export default ProcessPage
