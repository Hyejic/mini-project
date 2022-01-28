export const ListView = () => {
  return (
    <ul>
      <li className="list-item">
        <div className="list-item__tit-wrap">
          <a className="list-item__tit" href="#">
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi adipisci temporibus possimus, officiis velit minima cupiditate et fugiat animi veniam corrupti non reprehenderit quo sint repudiandae eveniet perferendis. Blanditiis, numquam?</h3>
          </a>
        </div>
        <div className="list-item__commnet comment-priview">
          <div className="comment-priview__info">
            <strong className="comment-priview__name">Cameron Williamson</strong>
            <span className="comment-priview__time">11 minutes ago</span>
          </div>
          <p className="comment-priview__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe porro sed nesciunt velit quae! Unde quam adipisci illo? Rem atque quisquam animi est officiis a debitis consectetur blanditiis dolorem earum?a debitis consectetur blanditiis dolorem earum?</p>
        </div>
        <div className="list-item__cont cont-aside">
          <a className="cont-aside__link" href="#">linkpage</a>
          <div className="cont-aside__info">
            <span className="cont-aside__score">1234</span>
            <button className="btn btn-comment">10</button>
          </div>
        </div>
        <button className="btn btn-dropdown">
          <span className="ir-blind">댓글 미리보기</span>
        </button>
      </li>
      <li className="list-item open">
        <div className="list-item__tit-wrap">
          <a className="list-item__tit" href="#">
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi adipisci temporibus possimus, officiis velit minima cupiditate et fugiat animi veniam corrupti non reprehenderit quo sint repudiandae eveniet perferendis. Blanditiis, numquam?</h3>
          </a>
        </div>
        <div className="list-item__commnet comment-priview">
        <div className="comment-priview__info">
            <strong className="comment-priview__name">Cameron Williamson</strong>
            <span className="comment-priview__time">11 minutes ago</span>
          </div>
          <p className="comment-priview__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe porro sed nesciunt velit quae! Unde quam adipisci illo? Rem atque quisquam animi est officiis a debitis consectetur blanditiis dolorem earum?a debitis consectetur blanditiis dolorem earum?</p>
        </div>
        <div className="list-item__cont cont-aside">
          <a className="cont-aside__link" href="#">linkpage</a>
          <div className="cont-aside__info">
            <span className="cont-aside__score">1234</span>
            <button className="btn btn-comment">10</button>
          </div>
        </div>
        <button className="btn btn-dropdown">
          <span className="ir-blind">댓글 미리보기</span>
        </button>
      </li>
      <li className="list-item">
        <div className="list-item__tit-wrap">
          <a className="list-item__tit" href="#">
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi adipisci temporibus possimus, officiis velit minima cupiditate et fugiat animi veniam corrupti non reprehenderit quo sint repudiandae eveniet perferendis. Blanditiis, numquam?</h3>
          </a>
        </div>
        <div className="list-item__commnet comment-priview">
        <div className="comment-priview__info">
            <strong className="comment-priview__name">Cameron Williamson</strong>
            <span className="comment-priview__time">11 minutes ago</span>
          </div>
          <p className="comment-priview__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe porro sed nesciunt velit quae! Unde quam adipisci illo? Rem atque quisquam animi est officiis a debitis consectetur blanditiis dolorem earum?a debitis consectetur blanditiis dolorem earum?</p>
        </div>
        <div className="list-item__cont cont-aside">
          <a className="cont-aside__link" href="#">linkpage</a>
          <div className="cont-aside__info">
            <span className="cont-aside__score">1234</span>
            <button className="btn btn-comment">10</button>
          </div>
        </div>
        <button className="btn btn-dropdown">
          <span className="ir-blind">댓글 미리보기</span>
        </button>
      </li>
    </ul>
  )
}