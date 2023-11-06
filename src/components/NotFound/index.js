import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBg = isDarkTheme ? 'dark' : 'light'

      const notFoundHeading = isDarkTheme ? 'dark' : 'light'

      const notFoundContent = isDarkTheme ? 'light' : 'dark'

      return (
        <div className={`${notFoundBg}`}>
          <Navbar />
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className={`${notFoundHeading}`}>Lost Your way?</h1>
              <p className={`${notFoundContent}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
