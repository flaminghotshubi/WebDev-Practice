export default function Navbar() {
    return (
        <div className="App">
            <nav className='navbar navbar-expand-lg main-color py-3'
                data-bs-theme="dark">
                <div className='container-fluid'>
                    <span className='navbar-brand'>
                        Luv 2 Read
                    </span>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls='navbarNavDropdown'
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Search Books</a>
                            </li>
                        </ul>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item m-1'>
                                <a type='button' className='btn btn-outline-light' href='#'>Sign In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}