import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
    return (
        <>
            <Helmet>
                <title>Ng Zhun Onn - Always learn, discover, and try new things</title>
                <meta name="url" content="https://zhon12345.github.io/" />
                <meta name="title" content="Ng Zhun Onn - Always learn, discover, and try new things" />
                <meta name="description" content="Ng Zhun Onn - A full-time student from Kuala Lumpur, Malaysia. Who is always learning, discovering, and trying new things!" />
                <meta name="image" content="https://i.imgur.com/9mVpqHn.png" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zhon12345.github.io/" />
                <meta property="og:title" content="Ng Zhun Onn - Always learn, discover, and try new things" />
                <meta property="og:description" content="Ng Zhun Onn - A full-time student from Kuala Lumpur, Malaysia. Who is always learning, discovering, and trying new things!" />
                <meta property="og:image:url" content="https://i.imgur.com/9mVpqHn.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://zhon12345.github.io/" />
                <meta property="twitter:title" content="Ng Zhun Onn - Always learn, discover, and try new things" />
                <meta property="twitter:description" content="Ng Zhun Onn - A full-time student from Kuala Lumpur, Malaysia. Who is always learning, discovering, and trying new things!" />
                <meta property="twitter:image" content="https://i.imgur.com/9mVpqHn.png" />
            </Helmet>
            <App />
        </>
    );
};
