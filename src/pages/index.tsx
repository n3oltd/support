import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import MailchimpSignUp from '@site/src/components/MailchimpSignUp';
import Admonition from '@theme/Admonition';

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
      <HomepageHeader />
      <main>
        <Admonition type="note">
          <p>Welcome to our new support site. Please bear with us whilst we iron out the rough edges.</p>
        </Admonition>

        <HomepageFeatures />

        {/*<MailchimpSignUp />*/}
      </main>
    </Layout>
  );
}
