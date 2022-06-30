
import { MetaTags } from '@redwoodjs/web'

import StoryCell from 'src/components/StoryCell'
const StoryPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Story" description="Story page" />

      <StoryCell id={id} />
    </>
  )
}

export default StoryPage
