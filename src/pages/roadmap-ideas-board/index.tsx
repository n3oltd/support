import React from 'react';
import Layout from '@theme/Layout';

const style = {
    "minHeight" : "100vh"
}

export default function Content(): JSX.Element {
    return (
        <Layout
            title="Roadmap & Ideas Board"
            description="View the status of planned product features and submit new ideas">
            <iframe src="https://app.loopedin.io/n3o" style={style} width="100%" frameBorder="0"></iframe>
        </Layout>
    );
}