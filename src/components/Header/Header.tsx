import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {

    return (
      <>
        <header>
            <span><Link to="/">Мы💗</Link></span>
            <ul>
                <li>
                    <Link to="/movies">Фильмы и сериалы</Link>
                </li>
                <li>
                    <Link to="/places">Места</Link>
                </li>
            </ul>
        </header>
      </>
    )
}

export default Header
