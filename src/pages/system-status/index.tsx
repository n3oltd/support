import React from 'react';
import Layout from '@theme/Layout';

export default function Videos(): JSX.Element {
    return (
        <Layout
            title="System Status"
            description="View details of any upcoming maintenance or incidents in progress">
            <iframe src="https://status.n3o.ltd" height="900" width="100%" frameBorder="0"></iframe>
        </Layout>
    );
}
