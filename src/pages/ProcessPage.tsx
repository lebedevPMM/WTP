import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceholderPage from './PlaceholderPage'

const processData: Record<string, { title: string; subtitle: string; description: string }> = {
    'pre-screen': {
        title: 'Pre-screen',
        subtitle: 'D: PRE-ACTION',
        description: 'Document collection, KYC verification, and risk mapping before proceeding with any case.',
    },
    'banking-scenario': {
        title: 'Banking Scenario',
        subtitle: 'D: STRATEGY',
        description: 'Routing analysis, bank requirements selection, and scenario design for optimal bankability.',
    },
    'delivery': {
        title: 'Delivery',
        subtitle: 'D: EXECUTION',
        description: 'Company setup, bank account opening, visa processing, and all operational steps.',
    },
    'ongoing-support': {
        title: 'Ongoing Support',
        subtitle: 'D: MAINTENANCE',
        description: 'Retainer-based support, operational stability monitoring, and long-term value creation.',
    },
}

const ProcessPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const data = slug ? processData[slug] : null

    if (!data) {
        return (
            <PlaceholderPage
                title="Process Step Not Found"
                description="The requested process step does not exist."
            />
        )
    }

    return (
        <PlaceholderPage
            title={data.title}
            subtitle={data.subtitle}
            description={data.description}
        />
    )
}

export default ProcessPage
