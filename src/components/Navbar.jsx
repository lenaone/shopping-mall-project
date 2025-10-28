import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = [ 'Women', 'Men', 'Baby', 'Kids', 'H&M HOME', 'Sport', 'Sale', '지속가능성' ];

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleHomeClick = () => {
        navigate('/');
    }
  return (
    <div>
        <div className="login-button" onClick={handleLoginClick}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
        </div>
        <div className="nav-section" onClick={handleHomeClick}>
            <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"/>
        </div>
        <div className="menu-area">
            <ul className="menu-list"> 
                {menuList.map((menu) => <li key={menu}>{menu}</li>)}
            </ul>
        <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} />
            <input className='search-bar-input' type="text" placeholder="Search..." />
        </div>
        </div>
    </div>
  )
}

export default Navbar