import { Link } from "react-router-dom"

function Navigation() {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ternary">Ternary Example</Link></li>
                <li><Link to="/and">&& Example</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;