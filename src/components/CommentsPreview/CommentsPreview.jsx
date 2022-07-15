import { Comment } from '@/components/Comment'
import { comments } from './mockupData/comments'

export const CommentsPreview = () => {
  const firstTwo = comments.slice(0, 2)
  const rest = comments.slice(2)

  return (
    <>
      <section>
        {firstTwo.map((comment) => (
          <Comment key={comment.name} name={comment.name} message={comment.message} />
        ))}
      </section>
      <div className="relative">
        <section className="blur-sm pointer-events-none">
          {rest.map((comment) => (
            <Comment key={comment.name} name={comment.name} message={comment.message} />
          ))}
        </section>
        <button className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-11/12 md:w-96 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-md uppercase text-white font-medium">
          Unlock reviews
        </button>
      </div>
    </>
  )
}
