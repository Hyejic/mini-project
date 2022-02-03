import { Link } from "react-router-dom";
import { timeForToday } from '../utile/script'
import '../css/detail.css';

export const DetailCont = ({story}) => {
  console.log(story)
  return (
    <section className="layer detail">
      <div className="layer__inner detail__inner">
        <button className="btn layer__btn-back"><span className="ir-blind">뒤로가기</span></button>
        <div className="detail__header">
          <span className="user-rank super detail__user-rank">Super karma</span>
          <strong className="detail__user-name">Cameron Williamson</strong>
          <strong className="detail__post-time">posted 15 minutes ago</strong>
        </div>
        <h3 className="detail__title"> title </h3>
        <p className="detail__desc">
          I have the habit of looking at the date of things I consume online, it gives me a sense of relevance and context, both when I'm looking for things that are "from now" but more importantly when I'm looking for things given a temporal context, for instance, programming for an old compiler, finding out how to do something with an old piece of hardware or electronics. I feel like I'm encountering more and more sites and articles where I can't seem to find the date. Google will return irrelevant results from today rather than relevant results from 10 years ago. I feel it's getting worse, is it just me?
        </p>
        <div className="detail__btn-wrap">
          <button className="btn detail__btn-commont">32 commemts</button>
          <a className="btn detail__btn-link" href=""><span className="ir-blind">link</span></a>
          {/* <button className="btn detail__btn-link"><span className="ir-blind">link</span></button> */}
        </div>
      </div>
    </section>
  )
}