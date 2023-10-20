import './App.css'
import { Contact } from './components/contact-me/contact'
import { Education } from './components/education/education'
import { Experience } from './components/experience/experience'
import { Nav } from './components/nav/nav'
import { Portfolio_Info } from './components/portfolio-info/portfolio'
import { Skills } from './components/skills/skills'

const App = () => {

  return (
    <>
      <div className="snowflakes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <Nav />
      <Portfolio_Info />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}

export default App
