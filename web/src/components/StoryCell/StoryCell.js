import { Link, routes } from '@redwoodjs/router'
export const QUERY = gql`
  query FindStoryQuery($id: Int!) {
    story: post(id: $id) {
      id
      title
      story
      writer
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div id="story-empty">gak ada apa apa</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ story }) => {
  return (
    <div id="story-container">
      <div id="story">
        <h1>{story.title}</h1>
        <p id="story-text">{story.story}</p>
        <p id="story-writer">{story.writer}</p>
        <p id="story-createdAt">{story.createdAt}</p>
        <Link
          to={routes.editPost({ id: story.id })}
          className="rw-button rw-button-green"
        >
          edit
        </Link>
      </div>
    </div>
  )
}
