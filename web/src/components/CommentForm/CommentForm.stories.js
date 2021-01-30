import CommentForm from './CommentForm'

mockGraphQLMutation('CreateCommentMutation', (variables, { ctx }) => {
  const id = parseInt(Math.random() * 1000)
  ctx.delay(1000)
  return {
    comment: {
      id,
      name: variables.input.name,
      body: variables.input.body,
      createdAt: new Date().toISOString(),
    },
  }
})

export const generated = () => {
  return (
    <div className="m-4">
      <CommentForm />
    </div>
  )
}

export default { title: 'Components/CommentForm' }
