import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Motivation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The Gray Foundation is focused on accelerating cancer research to study BRCA-associated precancer and early cancerous lesions in order to develop new prevention, early detection, and interception approaches.

      </>
    ),
  },
  {
    title: 'Collaboration',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        In BRCA-associated cancer, no one team can provide the entirety of the big picture. Teams are encouraged to share data and work together.
      </>
    ),
  },
  {
    title: 'Data Coordination',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The Gray Foundation Data Coordinating Center (GF-DCC) provide these documents to help researchers interact with the portal, data, metadata, and other resources.

      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
