// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBgClassName = isDarkTheme ? 'about-dark' : 'about-light'
      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutTextClassName = isDarkTheme ? 'about-light' : 'about-dark'

      return (
        <div className={`${aboutBgClassName}`}>
          <Navbar />
          <div>
            <img src={aboutImageUrl} alt="about" />
            <h1 className={`${aboutTextClassName}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
