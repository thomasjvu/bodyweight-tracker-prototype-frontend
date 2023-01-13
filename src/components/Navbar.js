import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/" onClick="window.location.reload()"># Bodyweight Tracker</Link>
            </div>
        </header>
    )
}

export default Navbar
