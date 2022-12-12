import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <menu>
                <nav>
                    <ul>
                        <Link to='/about'>
                            <li>Haqqında</li>
                        </Link>
                        <Link to='/contact'>
                            <li>Əlaqə məlumatları</li>
                        </Link>
                        <Link to='/portfolio'>
                            <li>İş nümunələri</li>
                        </Link>
                    </ul>
                </nav>
            </menu>
        </>
    )
}
export default Menu;