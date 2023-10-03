function Header({setlog,loged}) {
    return (
        <div className="header">
            <input className="btn" placeholder="Search here"></input>
            <button className="btn" onClick={() => setlog(true)}>{loged?'Le Minh Hieu':'Connect to wallet'}</button>
        </div>
    );
}

export default Header;
