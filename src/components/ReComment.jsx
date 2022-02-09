import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { timeForToday } from '../utile/script';
import { getKidsStories } from '../action/reCommentAction';
import '../css/comments.css';

export const ReComment = () => {
  const params = useParams();
  console.log(params.id)
  
  // const getDtailStory = async (id) => {
  //   try {
  //     const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
  //     return story;
  //   } catch (error) {
  //     console.log('Error while getting a story.');
  //   }
  // };
  // const useDataFetcher = (params) => {
  //   const [stories, setStories] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
    
  //   useEffect(() => {
  //     setIsLoading(true);
  //     getDtailStory(params)
  //     .then((stories) => {
  //       setStories(stories);
  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       setIsLoading(false);
  //     });
  //   }, [params]);
    
  //   return { isLoading, stories };
  // };
  // const { isLoading, stories } = useDataFetcher(params.id);

  // const Component = () => {
  //   if ( stories.data ) {
  //     return <DetailCont story={stories.data} />
  //   } 
  //   return null;
  // } 
  const dispatch = useDispatch();
  const state = useSelector(state => state.commnetsReducer);
  
  useEffect(() => {
    dispatch(getKidsStories(params.id))
  }, []);

  function createTree(list) {
    // console.log('list',list)
    var map = {},
      node,
      roots = [],
      i;
  
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
  
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId) {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parentId]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }

  console.log('state',state)
  const commentData = state.items.map((item) => item.data.kids);
  console.log('commentData',commentData)

  function Comment({ comment, collapse }) {
    const nestedComments = (comment.children || []).map(comment => {
      return <Comment key={comment.id} comment={comment} />
    })
  
    return (
      <div style={{marginLeft: "25px", marginTop: "10px", color:"white"}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{fontWeight: 700}}>{comment.by}</div>
          <div
            onClick={() => collapse(comment.id)}
            style={{
              cursor: 'pointer',
              marginLeft: '6px',
              fontSize: '12px'
            }}
          >
          {comment.expanded ? `[-]` : `[+]`}
          </div>
            </div>
        {comment.expanded && (
          <div>
            <div>{comment.text}</div>
            {nestedComments}
          </div>
        )}
      </div>
    )
  }

  function App() {
    const [comments, setComments] = useState(commentData);
    const [commentTree, setCommentTree] = useState(createTree(comments));
  
    useEffect(() => {
      setCommentTree(createTree(comments));
    }, [comments]);

    // console.log(commentTree)
  
    const handleCommentCollapse = (id) => {
    const updatedComments = comments.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            expanded: !c.expanded,
          };
        } else return c;
      });
      setComments(updatedComments);
    };
    return (
      <div style={{ padding: '16px' }}>
        {commentTree.map(comment => { // notice we are now using `commentTree` and not `commentData`
          return <Comment key={comment.id} comment={comment} collapse={handleCommentCollapse} />
        })}
      </div>
    )
  }
  

  // const [isOpen, setIsOpen] = useState(true);
  // const [reIsOpen, setReIsOpen] = useState(true);
  // const text = `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis doloremque tenetur tempore voluptatibus porro quisquam. In, alias eaque commodi quae odit porro iure consectetur, modi totam pariatur ratione tempore explicabo?</p>`
  
  return (
    <App />
    // <section className="layer comments">
    //   <div className="layer__inner">
    //     <div className="layer__back-wrap">
    //       <Link to={`/`} className="btn layer__btn-back" ><span className="ir-blind">뒤로가기</span></Link>
    //     </div>
    //     <h3 className="comments__tit">Comments</h3>
    //     <ul>
    //       <li className="comments-list">
    //         <div className={isOpen ? "comments-list__wrap open" : "comments-list__wrap"}>
    //           <div className="comments-list__info">
    //             <Link to={`/user/`} className="comments-list__name">name</Link>
    //             <span className="comments-list__time">{timeForToday(123213123)}</span>
    //           </div>
    //           <p className="comments-list__desc" dangerouslySetInnerHTML={{__html: text}}></p>
    //           <button className="btn btn-more-hide" onClick={() => {
    //             setReIsOpen(reIsOpen => !reIsOpen)
    //           }}>
    //             {reIsOpen ? "hide.." : "more.."}
    //           </button>
    //           <div className={reIsOpen ? "comments__re open" : "comments__re"}>
    //             <div className="comments-list__info">
    //               <Link to={`/user/`} className="comments-list__name">name</Link>
    //               <span className="comments-list__time">{timeForToday(123213123)}</span>
    //             </div>
    //             <p className="comments-list__desc" dangerouslySetInnerHTML={{__html: text}}></p>
    //           </div>
    //         </div>
    //         <button className="btn btn-dropdown" onClick={() => {
    //             setIsOpen(isOpen => !isOpen)
    //           }}>
    //           <span className="ir-blind">댓글 미리보기</span>
    //         </button>
    //       </li>
    //     </ul>
    //   </div>
    // </section>
  )
}