import styles from "../style";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg ">

            <div className={`container-fluid `} >
                <a className="navbar-brand" href="#">Mardel News Network</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className={`collapse justify-content-end navbar-collapse`} id="navbarNav" >
                    <ul className="text-light navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Articles</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar