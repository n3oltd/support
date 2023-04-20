import React from 'react';
import clsx from 'clsx';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import guides from './guides.svg';
import videos from './videos.svg';
import releaseNotes from './release-notes.svg';
import systemStatus from './system-status.svg';
import loop from './loop.svg';
import contactUs from './contact-us.svg';

type FeatureItem = {
  title: string;
  buttonText: string;
  buttonColor: string;
  buttonUrl: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Guides',
    buttonText: 'Browse Guides',
    buttonColor: '#EB3569',
    buttonUrl: '/guides/intro',
    Svg: guides,
    description: (
      <>
        Our how-to guides take you through common scenarios and are the quickest way to get started.
      </>
    ),
  },
  {
    title: 'Videos ',
    buttonText: 'Watch Videos',
    buttonColor: '#2196F3',
    buttonUrl: '/videos',
    Svg: videos,
    description: (
      <>
        Watch and learn with our free video tutorials available on YouTube.
      </>
    ),
  },
  {
    title: 'Release Notes',
    buttonText: 'View Notes',
    buttonColor: '#F5B323',
    buttonUrl: '/release-notes',
    Svg: releaseNotes,
    description: (
      <>
        Watch and learn with our free video tutorials available on YouTube.
      </>
    ),
  },
  {
    title: 'System Status',
    buttonText: 'Check Status',
    buttonColor: '#EB3569',
    buttonUrl: 'https://status.n3o.ltd',
    Svg: systemStatus,
    description: (
      <>
        Check the system status and keep informed of any ongoing issues or upcoming maintenance.
      </>
    ),
  },
  {
    title: 'N3O Loop',
    buttonText: 'Loop Me In',
    buttonColor: '#2196F3',
    buttonUrl: 'https://app.loopedin.io/n3o',
    Svg: loop,
    description: (
      <>
        Stay in the loop on new releases, upcoming features and share your product ideas.
      </>
    ),
  },
  {
    title: 'Contact Us',
    buttonText: 'Get In Touch',
    buttonColor: '#F5B323',
    buttonUrl: '/contact-us',
    Svg: contactUs,
    description: (
      <>
        Need more assistance? Speak with one our friendly team via chat, email or telephone.
      </>
    ),
  },
];

function Feature({title, buttonText, buttonColor, buttonUrl, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4 margin-top--lg margin-top--lg')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>

      <div className="text--center padding-horiz--md">
        <h3 className="margin-top--lg">{title}</h3>
        
        <p className="margin-bottom--lg">{description}</p>
        
        <p>
          <div className={styles.buttons}>
            <Link to={buttonUrl} className="button button--lg" style={{ backgroundColor: buttonColor }}>
              {buttonText}
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
