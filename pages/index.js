import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';
import Icon from '../components/home/icon';
import Animation from '../components/home/animation';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>202244034 한희철</title>
        <meta name="description" content="안녕하세요" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Icon />
        </div>
      </section>
    </Layout>
  );
}
