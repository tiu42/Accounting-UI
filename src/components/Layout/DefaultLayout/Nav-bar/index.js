import { Link } from 'react-router-dom';
import { useState } from 'react';
function Nav({ setlog }) {
    const [active, setActive] = useState('');
    return (
        <div className="nav-bar">
            <div className="logo">
                <Link to="/" onClick={() => setActive('')}>
                    EZCrypto
                </Link>
            </div>
            <ul>
                <Link to="../explore" onClick={() => setActive('explore')}>
                    <li
                        style={
                            active === 'explore'
                                ? {
                                      color: '#fff',
                                      fontSize: '2rem',
                                      backgroundImage: 'linear-gradient(to right, #9747ff,#6200ee)',
                                  }
                                : {}
                        }
                    >
                        Explore
                    </li>
                </Link>
                <Link to="../passport-nft" onClick={() => setActive('passport-nft')}>
                    <li
                        style={
                            active === 'passport-nft'
                                ? {
                                      color: '#fff',
                                      fontSize: '2rem',
                                      backgroundImage: 'linear-gradient(to right, #9747ff,#6200ee)',
                                  }
                                : {}
                        }
                    >
                        Passport NFT
                    </li>
                </Link>
                <li
                    onClick={() => setActive('create-a-space')}
                    style={
                        active === 'create-a-space'
                            ? {
                                  color: '#fff',
                                  fontSize: '2rem',
                                  backgroundImage: 'linear-gradient(to right, #9747ff,#6200ee)',
                              }
                            : {}
                    }
                >
                    Create a space
                </li>
            </ul>
            <div className="log-out" onClick={() => setlog(false)}>
                Logout
            </div>
        </div>
    );
}

export default Nav;
