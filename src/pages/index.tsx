import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title="Welcome"
            description="We're here to help">
            <HomepageHeader/>
            <main>
                <div className="margin-top--lg">
                    <div className="col col--6 col--offset-3">
                        <div className="alert alert--info" role="alert">
                            Welcome to the <strong>brand new N3O support site</strong>. Our team are still busy migrating
                            content here so please bear with us if there are any temporary broken links or missing
                            pages.
                            These should all be resolved shortly.
                        </div>
                    </div>
                </div>

                <HomepageFeatures/>

                {/*<MailchimpSignUp />*/}
            </main>
        </Layout>
    );
}
