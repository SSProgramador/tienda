import './styles.css';
import { CartWidget } from '../cartWidgetComponent/index.jsx';
export const NavBar = () => {
    return <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Bahia Car Wash</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Shampoo</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Ceras</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Guantes</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Interior
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Dressing Mate</a></li>
                            <li><a class="dropdown-item" href="#">Dressing Brillante</a></li>
                            <li><a class="dropdown-item" href="#">APC</a></li>
                        </ul>
                        </li>

                    </ul>
                </div>
            </div>
            <CartWidget/>
        </nav>
    </>
}