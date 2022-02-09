import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { timeForToday } from '../utile/script';
import { ReComment } from './ReComment'
import { getKidsStories } from '../action/reCommentAction';

export const CommentLIst = ({ story: { id, by, text, kids, time, parent}}) => {
  const [isOpen, setIsOpen] = useState(true);
  // const [reIsOpen, setReIsOpen] = useState(true);
  const desc = text;
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector(state => state.reCommentReducer);
  
  useEffect(() => {
    dispatch(getKidsStories(params.id))
  }, []);
  console.log(state)

  // function createTree(list) {
  //   // console.log('list',list)
  //   var map = {},
  //     node,
  //     roots = [],
  //     i;
  
  //   for (i = 0; i < list.length; i += 1) {
  //     map[list[i].id] = i; // initialize the map
  //     list[i].children = []; // initialize the children
  //   }
  
  //   for (i = 0; i < list.length; i += 1) {
  //     node = list[i];
  //     if (node.parentId) {
  //       // if you have dangling branches check that map[node.parentId] exists
  //       list[map[node.parentId]].children.push(node);
  //     } else {
  //       roots.push(node);
  //     }
  //   }
  //   return roots;
  // }

  const commentData = state.items.map((item) => item.data.kids);
  console.log('commentData',commentData)

  // function Comment({ comment, collapse }) {
  //   const nestedComments = (comment.children || []).map(comment => {
  //     return <Comment key={comment.id} comment={comment} />
  //   })
  
  //   return (
  //     <div style={{marginLeft: "25px", marginTop: "10px", color:"white"}}>
  //           <div style={{ display: 'flex', alignItems: 'center' }}>
  //       <div style={{fontWeight: 700}}>{comment.by}</div>
  //         <div
  //           onClick={() => collapse(comment.id)}
  //           style={{
  //             cursor: 'pointer',
  //             marginLeft: '6px',
  //             fontSize: '12px'
  //           }}
  //         >
  //         {comment.expanded ? `[-]` : `[+]`}
  //         </div>
  //           </div>
  //       {comment.expanded && (
  //         <div>
  //           <div>{comment.text}</div>
  //           {nestedComments}
  //         </div>
  //       )}
  //     </div>
  //   )
  // }

  // function App() {
  //   const [comments, setComments] = useState(commentData);
  //   const [commentTree, setCommentTree] = useState(createTree(comments));
  
  //   useEffect(() => {
  //     setCommentTree(createTree(comments));
  //   }, [comments]);

  //   // console.log(commentTree)
  
  //   const handleCommentCollapse = (id) => {
  //   const updatedComments = comments.map((c) => {
  //       if (c.id === id) {
  //         return {
  //           ...c,
  //           expanded: !c.expanded,
  //         };
  //       } else return c;
  //     });
  //     setComments(updatedComments);
  //   };
  //   return (
  //     <div style={{ padding: '16px' }}>
  //       {commentTree.map(comment => { // notice we are now using `commentTree` and not `commentData`
  //         return <Comment key={comment.id} comment={comment} collapse={handleCommentCollapse} />
  //       })}
  //     </div>
  //   )
  // }
  


  return (
    <li className="comments-list">
      <div className={isOpen ? "comments-list__wrap open" : "comments-list__wrap"}>
        <div className="comments-list__info">
          <Link to={`/user/`} className="comments-list__name">{by}</Link>
          <span className="comments-list__time">{timeForToday(time)}</span>
        </div>
        <p className="comments-list__desc" dangerouslySetInnerHTML={{__html: desc}}></p>
        {/* <App /> */}
        {/* <ReComment kids={kids}/> */}
        {/* <button className="btn btn-more-hide" onClick={() => {
          setReIsOpen(reIsOpen => !reIsOpen)
        }}>
          {reIsOpen ? "hide.." : "more.."}
        </button>
        <div className={reIsOpen ? "comments__re open" : "comments__re"}>
          <div className="comments-list__info">
            <Link to={`/user/`} className="comments-list__name">name</Link>
            <span className="comments-list__time">{timeForToday(123213123)}</span>
          </div>
          <p className="comments-list__desc" dangerouslySetInnerHTML={{__html: text}}></p>
        </div> */}
      </div>
      <button className="btn btn-dropdown" onClick={() => {
          setIsOpen(isOpen => !isOpen)
        }}>
        <span className="ir-blind">댓글 미리보기</span>
      </button>
    </li>
  )
}