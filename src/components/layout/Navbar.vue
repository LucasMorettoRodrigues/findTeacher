<template>
    <header>
        <nav class="container">
            <h1>
                <router-link to="/">teacher<span>Finder</span></router-link>
            </h1>
            <ul>
                <li>
                    <router-link to="/register">Register</router-link>
                </li>
                <li>
                    <router-link to="/teachers">Teachers</router-link>
                </li>
                <li>
                    <router-link to="/messages">Messages</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: black;
    color: var(--primary-color);
    position: sticky;
    z-index: 100;
    top: 0;
    left: 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

nav h1 a {
    color: white;
    font-size: 40px;
    font-weight: 500;
}

nav h1 a span {
    color: var(--primary-color-1);
    font-weight: bold;
}

ul {
    display: flex;
    list-style: none;
}

li a {
    padding: 10px 2px;
    margin: 0 20px;
    font-size: 20px;
    color: white;
    border-bottom: 1px solid transparent;
    transition: all .3s ease-out;
}

li a:hover,
li a:active,
li a.router-link-active {
    color: var(--primary-color-1);
    border-color: var(--primary-color-1);
}

@media only screen and (max-width: 768px) {
    nav {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 20px;
    }

    nav h1 a {
        font-size: 30px;
    }

    ul {
        justify-content: space-evenly;
        width: 100%;
        padding: 0;
        margin-top: 10px;
    }

    li a {
        font-size: 18px;
        border: none;
    }

    li a:hover,
    li a:active,
    li a.router-link-active {
        border: none;
    }
}
</style>