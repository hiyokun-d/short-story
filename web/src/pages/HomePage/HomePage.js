import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import StoryCells from 'src/components/StorysCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="home" />

      <div id="homePage">
        <h1>cerita rakyat</h1>
        <p>
          <strong>silahkan pilih cerita yang kamu suka:</strong>
        </p>
        <StoryCells />

        <Link to={routes.newPost()} className="rw-button-blue rw-button">
          Create New story
        </Link>
      </div>
    </>
  )
}

export default HomePage
