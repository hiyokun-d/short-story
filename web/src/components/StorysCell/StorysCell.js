import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query StorysQuery {
    storys: posts {
      id
      title
      story
      writer
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ storys }) => {
  return (
    <ul>
      {storys.map((item) => {
        return (
          <li key={item.id} id="storys-list">
            <h2 id="storys-title">
              <Link to={routes.story({ id: item.id })}>
                {item.title} by {item.writer}
              </Link>
            </h2>
          </li>
        )
      })}
    </ul>
  )
}
