import { Link, routes } from '@redwoodjs/router'

const NavigatorbarLayout = ({ children }) => {
  return (
    <>
      <Link to={routes.home()} className="rw-button rw-button-blue">
        <header className="rw-header shadow-indigo-50 hover:shadow-indigo-100 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4  place-items-center">
          Back
        </header>
      </Link>
      {children}
    </>
  )
}

export default NavigatorbarLayout
