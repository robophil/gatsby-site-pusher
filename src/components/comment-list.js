import React from 'react'

export default ({comments}) => {
  comments = comments.map((comment, i) => (
    <div key={i} style={{
      padding: '5px',
      border: '1px solid grey'
    }}>
      <p><strong>{comment.author}:</strong></p>
      <p>{comment.message}</p>
    </div>
  ))
  return (
    <section>
      <strong>Comments: </strong>{comments}
    </section>
  )
}
