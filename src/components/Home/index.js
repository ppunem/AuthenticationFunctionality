// Write your JS code here
import LogoutButton from '../LogoutButton'
import Header from '../Header'
import './index.css'

const Home=()=>
    (
        <div className="c">
          <Header/>
          <h1 className="head">Home Route</h1>
          <LogoutButton/>
        </div>
    )

export default Home
