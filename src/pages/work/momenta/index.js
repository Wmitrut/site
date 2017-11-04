import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import TweetEmbed from 'react-tweet-embed';

import Article from '~/src/components/Article';
import Block from '~/src/components/Block';
import Figure from '~/src/components/Figure';

import share1 from './share-1.webp';
import homepage from './homepage.webm';

export const data = {
  isWork: true,
  title: 'Capture your moments as pictures with sound.',
  subtitle: 'Momenta',
  date: '2017-07-01T10:00:00.284Z',
  path: '/work/momenta',
  cover: '/covers/webp/momenta.webp',
  contain: false,
  background: '#6B476B',
  details: [
    {
      title: 'Responsibility',
      description: 'Co-Founder, Design & Development',
    },
    {
      title: 'Date',
      description: '2013 – 2014',
    },
  ],
};

export default () => (
  <Article {...data}>
    <Block>
      <p>
        During my internship at{' '}
        <a href="https://www.door2door.io/">Door2Door</a> in Berlin, I joined{' '}
        <a href="https://twitter.com/herrhaase">Alex</a>,{' '}
        <a href="https://twitter.com/Jl_Ugia">Jose</a> and{' '}
        <a href="https://twitter.com/kirstyllee">Kirsty</a> as a co-founder of
        Momenta. My focus was on all things web, allowing me to work on both the
        design and development of the product.
      </p>
    </Block>

    <Block align="right">
      <p>
        <a href="http://www.momenta.io/">Momenta</a> is a simple yet beautiful
        way to capture and remember life’s special moments. Through the powerful
        combination of pictures and sound, it allows you to share a special
        moment of your life with the people you care about.
      </p>
    </Block>

    <hr />

    <Block align="center" pull>
      <h2>Landing Page</h2>
      <p>
        Previously to the launch of the iPhone App, I designed and coded the{' '}
        <a href="http://www.momenta.io/">landing page</a> for Momenta.
      </p>
    </Block>

    <Block align="center">
      <Figure video src={homepage} />
    </Block>

    <Block align="center">
      <Figure
        src={share1}
        caption={
          <p>
            We launched Momenta for the web, which enabled{' '}
            <a href="http://www.momenta.io/m/Hfyb0pHLXt1wlVBSepvZ">
              sharing and embedding moments
            </a>{' '}
            outside of the App.
          </p>
        }
        background
      />
    </Block>

    <Block vc>
      <p>
        Apple ended up adding a similar feature to iOS in September 2015:{' '}
        <a href="http://tcrn.ch/1Mc1L7u">Live Photos</a>. It was &mdash;
        together with our growing userbase &mdash; a welcome validation of our
        concept.
      </p>
    </Block>

    <Block align="right">
      <TweetEmbed id="641689604815462400" align="center" />
    </Block>
  </Article>
);
