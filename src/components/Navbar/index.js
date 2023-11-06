// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }

      const navbarWebsiteImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navbarBgClassName = isDarkTheme ? 'navbar-dark' : 'navbar-light'

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navItemClassName = isDarkTheme ? 'nav-dark' : 'nav-light'

      return (
        <div className={`${navbarBgClassName}`}>
          <div>
            <img src={navbarWebsiteImageUrl} alt="website logo" />
            <ul>
              <li>
                <Link to="/" className={`${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button data-testid="theme" type="button" onClick={onToggleTheme}>
              <img src={themeImageUrl} alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
