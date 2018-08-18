import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href }) => {

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <li className={router.pathname === href ? 'uk-active' : ''}>
        <a href={href}>
        {children}
        </a>
    </li>
  )
}

export default withRouter(ActiveLink)