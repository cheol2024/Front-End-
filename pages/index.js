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

      {/*
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
            <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              
            </div>
          </div>
        </div>
      </section>

      */}
    </Layout>
  );
}
