import React from 'react'
import { BsSortUp } from 'react-icons/bs';
import Comment from './Comment';

const CommentsContainer = ({comments}) => {
  return (
    <div>
      <div className='flex gap-8 items-center'>
        <div className='font-extrabold text-lg'>{`${comments.items.length} Comments`}</div>
        <div className='flex items-center'><BsSortUp size={28}/> Sort by</div>
      </div>
      <div className='mt-8'>{comments.items.map((comment)=>{
        return <Comment comment={comment} key={comment.id}/>
      })}</div>
    </div>
  );
}

export default CommentsContainer
