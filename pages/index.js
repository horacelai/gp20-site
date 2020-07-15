import Head from 'next/head';
import Nav from '../components/nav';

export default function Home() {
  const assetPath = process.env.ASSET_PREFIX;
  return (
    <div className="home">
      <Head>
        <title>她他她的戀愛守則 | 科大劇社畢業匯演 2020</title>
        <link rel="icon" href={`${assetPath}favicon.ico`} />
      </Head>
      {/* <div className="alert-bar noise">
        <div>受疫情影響，演出日期可能會被延遲或取消，請留意劇社社交網站以取得最新資訊</div>
      </div> */}
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

      <section className="bottom noise">
        <div className="container">
          <h2>演出詳情</h2>
          <div className="details">
            <div><span className="title">日期</span> 8月29日 8月30日</div>
            <div><span className="title">時間</span> 下午 8 時</div>
            <div><span className="title">地點</span> 西灣河文娛中心</div>
          </div>
          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="call-to-action-btn">立即訂票</a>
          <div className="remarks">
            <p>不設劃位，座位先到先得</p>
            <p>受疫情影響，演出日期可能會被延遲或取消，請留意劇社社交網站以取得最新資訊</p>
          </div>
        </div>
      </section>

      <footer>
        香港科技大學學生會劇社
      </footer>
    </div>
  )
}
