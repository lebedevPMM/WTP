import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceholderPage from './PlaceholderPage'

const productData: Record<string, { title: string; subtitle: string; description: string }> = {
    'banking': {
        title: 'Banking',
        subtitle: 'PRODUCT LINE',
        description: 'Personal & corporate banking, payments infrastructure, and compliance-ready account structures.',
    },
    'business-setup': {
        title: 'Business Setup',
        subtitle: 'PRODUCT LINE',
        description: 'Company registration, trade licensing, tax registration, and corporate structuring in the UAE.',
    },
    'residency': {
        title: 'Residency',
        subtitle: 'PRODUCT LINE',
        description: 'Residence visas, Emirates ID processing, and associated government services.',
    },
    'assets-wealth': {
        title: 'Assets & Wealth',
        subtitle: 'PRODUCT LINE',
        description: 'Real estate acquisition, wills, foundations, and wealth structuring services.',
    },
}

const ProductPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const data = slug ? productData[slug] : null

    if (!data) {
        return (
            <PlaceholderPage
                title="Product Not Found"
                description="The requested product line does not exist."
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

export default ProductPage
