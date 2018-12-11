import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/portfolio"><a><span onClick={props.onToggleMenu}>Portfolio</span></a></Link></li>
                <li><Link href="/webexperiments"><a><span onClick={props.onToggleMenu}>Web Experiments</span></a></Link></li>
                <li><Link href="/projects"><a><span onClick={props.onToggleMenu}>Projects</span></a></Link></li>
                <li><Link href="/experience"><a><span onClick={props.onToggleMenu}>Work Experience</span></a></Link></li>
                <li><Link href="/skills"><a><span onClick={props.onToggleMenu}>Skills</span></a></Link></li>
                <li><Link href="/hobby"><a><span onClick={props.onToggleMenu}>Hobby & Inspiration</span></a></Link></li>
                
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
