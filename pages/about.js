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
      <Nav />
      <main>
        <h1>關於科大劇社</h1>
        <section>
          <p>香港科技大學學生會劇社(簡稱科大劇社)成立於1993年，本著其宗旨：提高同學對藝術欣賞的興趣和水平，組織戲劇表演及推廣原創作，服務同學至今。多年來，科大劇社積極參與表演戲劇，曾公開演出逾數十次，包括：</p>
        </section>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
