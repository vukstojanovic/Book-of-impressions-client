import { useState } from 'react'
import { Comment } from '@/components/Comment'
import { comments } from './mockupData/comments'

export const CommentsPreview = () => {
  const firstTwo = comments.slice(0, 2)
  const rest = comments.slice(2)
  const [blurClass, setBlurClass] = useState('blur-sm pointer-events-none')

  function showAllComments() {
    setBlurClass('')
  }

  return (
    <>
      <section>
        {firstTwo.map((comment) => (
          <Comment key={comment.name} name={comment.name} message={comment.message} />
        ))}
      </section>
      <div className="relative">
        <section className={`${blurClass}`}>
          {rest.map((comment) => (
            <Comment key={comment.name} name={comment.name} message={comment.message} />
          ))}
        </section>
        {rest.length > 0 && blurClass && (
          <button
            onClick={showAllComments}
            className="absolute top-60 left-1/2 -translate-x-2/4 w-11/12 md:w-96 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-md uppercase text-white font-medium"
          >
            Unlock reviews
          </button>
        )}
      </div>
    </>
  )
}
