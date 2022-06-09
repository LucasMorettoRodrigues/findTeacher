<template>
    <footer>
        <div>
            <p>Developed by </p>
            <a href="https://github.com/LucasMorettoRodrigues/">
                l.m.r
                <i class="fa fa-github icon" style="font-size:36px"></i>
            </a>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: black;
    width: 100%;
}

footer div {
    padding: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

footer div a {
    color: white;
    margin-left: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
}

footer div a:hover {
    color: var(--primary-color-1);
}

.icon {
    margin-left: 15px;
}
</style>