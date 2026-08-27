import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]

function Nav() {
  return (
    <header className="flex items-center justify-between bg-neutral-900 px-8 py-5 max-md:px-5 max-md:py-4">
      <Link
        to="/"
        className="text-lg font-medium tracking-tight text-neutral-100 no-underline transition-colors hover:text-white"
      >
        Jacob Fenwick
      </Link>
      <nav>
        <ul className="m-0 flex list-none gap-7 p-0 max-sm:gap-4">
          {links.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className="text-base text-neutral-300 no-underline transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
