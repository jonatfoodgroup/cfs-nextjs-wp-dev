import Head from 'next/head';

const PageMeta = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} key="title" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} key="description" />
  </Head>
);

export default PageMeta;