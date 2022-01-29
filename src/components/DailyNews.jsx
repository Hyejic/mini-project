import '../css/daily.css'

export const DailyNews = () => {
  return (
    <div className="daily-wrap">
      <h2 className="daily-title">Daily News</h2>
      <ul className="daily-list-wrap">
        <li className="daily-list">
          <div className="daily-list__header">
            <span className="user-rank normal daily__user-rank">Normal karma</span>
            <strong className="daily-list__name">user name</strong>
            <h3 className="daily-list__tit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloribus excepturi, quisquam, consectetur aspernatur reprehenderit nobis ducimus possimus eius veniam esse, asperiores rerum aliquid voluptatem dolor velit? Minus, distinctio ducimus.</h3>
            <span className="daily-list__time">3 hours ago</span>
          </div>
          <div className="daily-list__cont cont-aside">
            <a className="cont-aside__link" href="#">linkpage</a>
            <div className="cont-aside__info">
              <span className="cont-aside__score">1234</span>
              <button className="btn btn-comment">10</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}