import Head from 'next/head';
import Nav from '../components/nav';

export default function Home() {
  const assetPath = process.env.ASSET_PREFIX;
  return (
    <div className="container">
      <Head>
        <title>她他她的戀愛守則 | 科大劇社畢業匯演 2020</title>
        <link rel="icon" href={`${assetPath}favicon.ico`} />
      </Head>

      <main>
        <Nav />
        <div className="landing noise">
          <div className="landing-img">
            <img src={`${assetPath}background.jpg`} alt="GP20"/>
          </div>
          <div className="landing-desc">
            <img src={`${assetPath}title.svg`} alt="香港科技大學學生會劇社主辦：科大劇社畢業匯演 2020"/>
          </div>
          <div className="landing-title">
            <img src={`${assetPath}logo.svg`} alt="她他她的戀愛守則"/>
          </div>
          <div className="landing-down">
            <img src={`${assetPath}down.svg`} alt="Scroll Down"/>
          </div>
        </div>
      </main>

      <section className="landing-quote noise">
        <div>
        「如果有個女仔走嚟同妳講佢鍾意妳呢？」
        </div>
      </section>

      <footer>
        香港科技大學學生會劇社
      </footer>
    </div>
  )
}
