import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
    <div className="about">
      <h1>
        About this project
      </h1>
      <p>This is a feedback app</p>
      <p>
        <Link to ='/'>Home Page</Link>
      </p>
    </div>
    </Card>
  )
}

export default AboutPage