import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgClassName = isDarkTheme ? 'about-dark' : 'about-light'
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const homeTextClassName = isDarkTheme ? 'about-light' : 'about-dark'

      return (
        <div className={`${homeBgClassName}`}>
          <Navbar />
          <div>
            <img src={homeImageUrl} alt="home" />
            <h1 className={`${homeTextClassName}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
