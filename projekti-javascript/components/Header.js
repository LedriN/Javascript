export function Header() {
    const current_page = window.location.pathname
    return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container">
            <a class="navbar-brand" href="#">LOSY</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="favourites.html">Favourites</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
            </ul>
            ${
                (current_page === '/home.html') ?
                `<button class="btn btn-outline-success ms-4" id="search-btn">
                    <i class="bi bi-search"></i>
                </button>` : ''
            }
            </div>
        </div>
    </nav>
    `
}