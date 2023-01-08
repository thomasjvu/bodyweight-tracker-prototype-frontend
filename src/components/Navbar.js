import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/"># Bodyweight Tracker</Link>
            </div>
        </header>
    )
}

export default Navbar
