class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
        }

    render() {
        this.innerHTML = `
        <div class="menu">
            <div class="burger" id="menu">
            <a tabindex="0" href="#">&#9776;</a>
        </div>
            <div class="logo">RESTAURANT FINDER</div>
            <div class="logo">&nbsp;</div>
        </div>
        <nav id="drawer">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#/favorites">Favorites</a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/darian-gunawan-9aa33419a/">About Us</a></li>
            </ul>
        </nav>
        <!-- Desktop Navbar -->
        <nav>
            <a class="logo" href="">Restaurant Finder</a>
            <ul>
                <li class="nav_items"><a href="/">Home</a></li>
                <li class="nav_items"><a href="#/favorites">Favorites</a></li>
                <li class="nav_items"><a target="_blank" href="https://www.linkedin.com/in/darian-gunawan-9aa33419a/">About Us</a></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);