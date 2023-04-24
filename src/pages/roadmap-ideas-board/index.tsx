import React from 'react';
import Layout from '@theme/Layout';

export default function Content(): JSX.Element {
    return (
        <Layout
            title="Roadmap & Ideas Board"
            description="View the status of planned product features and submit new ideas">
            <iframe src="https://app.loopedin.io/n3o" height="900" width="100%" frameBorder="0"></iframe>
        </Layout>
    );
}
