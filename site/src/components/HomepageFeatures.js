import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Skyrats',
    Svg: require('../../static/img/logoBrancoTransparente.svg').default,
    description: (
      <>
        Nós somos a equipe de Drones Inteligentes da Escola Politécnica da Universidade de São Paulo.
      </>
    ),
  },
  {
    title: 'Knowledge Base',
    Svg: require('../../static/img/logoBrancoTransparente.svg').default,
    description: (
      <>
        Essa é a nossa Knowledge Base, criada com o objetivo de documentar e difundir o conhecimento
        gerado na equipe.
      </>
    ),
  },
  {
    title: 'Falta algo aqui',
    Svg: require('../../static/img/logoBrancoTransparente.svg').default,
    description: (
      <>
        versão beta
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
