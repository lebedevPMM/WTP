import { createHashRouter } from 'react-router-dom'
import Layout from './components/Layout'
import {
    HomePage,
    HomePageOriginal,
    PartnerKitPage,
    SubmitCasePage,
    EngagementPage,
    ContactPage,
    UpdatesPage,
    TermsPage,
    ProcessPage,
    ProductPage,
} from './pages'

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'v1', element: <HomePageOriginal /> },
            { path: 'partner-kit', element: <PartnerKitPage /> },
            { path: 'submit-case', element: <SubmitCasePage /> },
            { path: 'engagement', element: <EngagementPage /> },
            { path: 'contact', element: <ContactPage /> },
            { path: 'updates', element: <UpdatesPage /> },
            { path: 'process/terms', element: <TermsPage /> },
            { path: 'process/:slug', element: <ProcessPage /> },
            { path: 'products/:slug', element: <ProductPage /> },
        ],
    },
])

export default router
