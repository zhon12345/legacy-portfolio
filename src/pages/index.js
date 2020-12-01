import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
    return (
        <>
            <Helmet>
                <title>Ng Zhun Onn - A Full Time Student and a JavaScript Developer</title>
                <meta name="url" content="https://zhon12345.github.io/" />
                <meta name="title" content="Ng Zhun Onn - A Full Time Student and a JavaScript Developer" />
                <meta name="description" content="Ng Zhun Onn - A full-time student from Kuala Lumpur, Malaysia. Who has created projects such as Tavern Keeper, a Snake Game replica and a simple Calculator." />
                <meta name="image" content="https://i.imgur.com/vyxCtv2.png" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://zhon12345.github.io/" />
                <meta property="og:title" content="Ng Zhun Onn - A Full Time Student and a JavaScript Developer" />
                <meta property="og:description" content="Ng Zhun Onn - A full-time student from Kuala Lumpur, Malaysia. Who has created projects such as Tavern Keeper, a Snake Game replica and a simple Calculator." />
                <meta property="og:image:url" content="https://i.imgur.com/vyxCtv2.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://zhon12345.github.io/" />
                <meta property="twitter:title" content="Ng Zhun Onn - A Full Time Student and a JavaScript Developer" />
                <meta property="twitter:description" content="Ng Zhun Onn - A full-time student from Kuala Lumpur, Malaysia. Who has created projects such as Tavern Keeper, a Snake Game replica and a simple Calculator." />
                <meta property="twitter:image" content="https://i.imgur.com/vyxCtv2.png" />
            </Helmet>
            <App />
        </>
    );
};
