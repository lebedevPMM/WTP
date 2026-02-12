import React from 'react'
import { Card, ListRow, Button } from '../components'

const benefitCards = [
    {
        icon: '⊞',
        iconVariant: 'dashed' as const,
        title: 'Ownership Protection',
        description: "We never bypass the partner. We don't sell directly around you.",
        number: '01',
    },
    {
        icon: '::',
        iconVariant: 'default' as const,
        title: 'Transparency',
        description: 'Clear status updates, scope change control, and defined checkpoints.',
        number: '02',
    },
    {
        icon: '○',
        iconVariant: 'dotted' as const,
        title: 'Control',
        description: 'Decisions made upfront: can we proceed, and under what conditions?',
        number: '03',
    },
    {
        icon: '✦',
        iconVariant: 'default' as const,
        title: 'Quality',
        description: 'Optimized for banks and regulators, not "speed at any cost."',
        number: '04',
    },
]

const processSteps = [
    { icon: '1', iconVariant: 'dark' as const, title: 'Pre-screen', meta: 'Docs / KYC / Risk Map', action: 'D: PRE-ACTION', href: '/process/pre-screen' },
    { icon: '2', iconVariant: 'default' as const, title: 'Banking Scenario', meta: 'Routing / Requirements Selection', action: 'D: STRATEGY', href: '/process/banking-scenario' },
    { icon: '3', iconVariant: 'default' as const, title: 'Delivery', meta: 'Setup / Accounts / Visas', action: 'D: EXECUTION', href: '/process/delivery' },
    { icon: '4', iconVariant: 'default' as const, title: 'Ongoing Support', meta: 'Retainer / Stability / LTV', action: 'D: MAINTENANCE', href: '/process/ongoing-support' },
]

const productLines = [
    { icon: 'B', iconVariant: 'accent' as const, title: 'Banking', meta: 'Personal & Corporate, Payments, Compliance', action: 'VIEW', href: '/products/banking' },
    { icon: 'S', iconVariant: 'default' as const, title: 'Business Setup', meta: 'Registration, Licensing, Tax', action: 'VIEW', href: '/products/business-setup' },
    { icon: 'R', iconVariant: 'default' as const, title: 'Residency', meta: 'Visas, Emirates ID', action: 'VIEW', href: '/products/residency' },
    { icon: 'A', iconVariant: 'default' as const, title: 'Assets & Wealth', meta: 'Real Estate, Wills, Foundations', action: 'VIEW', href: '/products/assets-wealth' },
]

const HomePageOriginal: React.FC = () => {
    return (
        <>
            {/* Hero */}
            <section id="intro" className="header-section">
                <div className="header-meta">
                    <span>UAE EXECUTION PARTNER</span>
                    <span>:::</span>
                    <span>BROKERS &amp; ADVISORS</span>
                </div>
                <h1>Reliable execution from intent to outcome.</h1>
                <p>
                    WTP is an on-the-ground operator in the UAE. We run a banking-first
                    process built around bankability, compliance, and predictable
                    delivery without reputational risk.
                </p>
                <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
                    <Button label="Request Partner Kit" variant="primary" href="/partner-kit" />
                    <Button label="Submit Case" variant="secondary" href="/submit-case" />
                </div>
            </section>

            {/* Partner Benefits */}
            <section id="benefits" className="grid-section">
                <h2>
                    Partner Benefits
                    <span className="mono-label">Why WTP</span>
                </h2>
                <div className="grid-4">
                    {benefitCards.map((card) => (
                        <Card key={card.number} {...card} />
                    ))}
                </div>
            </section>

            {/* Delivery Process */}
            <section id="process" className="grid-section">
                <h2>
                    Delivery Process
                    <a href="/process/terms" className="see-all">
                        See full terms
                    </a>
                </h2>
                <div className="list-group">
                    {processSteps.map((step) => (
                        <ListRow key={step.icon} {...step} />
                    ))}
                </div>
            </section>

            {/* Risk Policy */}
            <section id="risk" className="grid-section">
                <h2>
                    Risk Policy
                    <span className="mono-label">Gatekeeping</span>
                </h2>
                <div className="grid-2">
                    <Card
                        icon="✓"
                        title="We Accept"
                        description="Transparent rationale, document readiness, realistic expectations."
                        iconBorderRadius="4px"
                        minHeight={200}
                    />
                    <Card
                        icon="⚠"
                        iconVariant="dashed"
                        title="Conditions Apply"
                        description="High risk or complex structures require enhanced control and fixed scope."
                        iconBorderRadius="4px"
                        minHeight={200}
                    />
                </div>

                <div className="engagement-bar">
                    <div>
                        <strong>Engagement Models:</strong> Referral (Commission) or
                        White-label (Subcontractor)
                    </div>
                    <a href="/engagement" className="mono-label" style={{ textDecoration: 'none', color: 'inherit' }}>SELECT MODEL →</a>
                </div>
            </section>

            {/* Product Lines */}
            <section id="products" className="grid-section">
                <h2>
                    Product Lines
                    <span className="mono-label">Scope</span>
                </h2>
                <div className="list-group">
                    {productLines.map((product) => (
                        <ListRow key={product.icon} {...product} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default HomePageOriginal
