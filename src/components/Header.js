import React from 'react';
import '../Styles/Header.css';

import { Link } from 'react-router-dom';

const Header = () => {

    return (
            <div className = "NavBar">
                
                <div className = "NavBar-Content">

                    <div className = "Logo-box">

                        <Link to = '/' className = "Logo"><i className = "fab fa-researchgate"></i></Link>

                    </div>

                    <ul className = "NavBar-Links">

                        <li>
                            <Link to = '/playedlist' className = "NBL"> Game List </Link>
                        </li>

                        <li>
                            <Link to = '/played' className = "NBL"> Played </Link>
                        </li>

                        <li>
                            <Link to = '/add' className = "NBL-BTN" > + Add </Link>
                        </li>

                    </ul>

                </div>

            </div>
    )
}

export default Header;
