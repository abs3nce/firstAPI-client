<template>
    <nav class="navbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-list"></i>
                    <span class="link-text">GET</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fab fa-telegram-plane"></i>
                    <span class="link-text">POST</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-times-circle"></i>
                    <span class="link-text">DELETE</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
//UPRATAT A UROBIT RESPONZIVNE CEZ MEDIA QUERY
.navbar {
    width: 5rem;
    height: 100vh;
    position: fixed;

    background-color: var(--bg-primary);
    transition: width 250ms ease;

    .navbar-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        .nav-item {
            width: 100%;
            margin-left: 3rem;
            .nav-link {
                display: flex;
                align-items: center;
                height: 5rem;
                text-decoration: none;
                color: var(--bg-secondary);
                .link-text {
                    display: none;
                    margin: 1rem;
                    transition: var(--transition-speed) ease;
                }
                i {
                    font-size: 2rem;
                    transition: var(--transition-speed) ease;
                }
            }
        }
        .nav-item:hover {
            .nav-link {
                .link-text {
                    color: var(--accent-primary);
                }
                i {
                    color: var(--accent-primary);
                }
            }
        }
    }
}
.navbar:hover {
    width: 16rem;
    .navbar-nav {
        display: flex;
        justify-content: flex-start;
        .nav-link {
            .link-text {
                display: block;
            }
        }
    }
}
</style>
