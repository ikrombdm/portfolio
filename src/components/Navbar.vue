<template>
    <nav>
        <div class="im-logo">
            <a href="#"><span class="im-color">I</span>krombek</a>
        </div>

        <ul :class="{ links: menuActive }" class="im-links">
            <li>
                <a href="#" class="m-head-link active">Home</a>
            </li>
            <li>
                <a href="#about" class="m-head-link">About</a>
            </li>
            <li>
                <a href="#projects" class="m-head-link">Projects</a>
            </li>
            <li>
                <a href="#services" class="m-head-link">Services</a>
            </li>
            <!-- <li class="photos">
                <a href="#" class="m-head-link">Blogs</a>
            </li> -->
        </ul>


        <!-- MENU -->
        <svg :class="{ activeBtn: menuActive }" @click="menuActive = !menuActive" class="im-menu"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path v-if="menuActive === false" stroke-linecap="round" stroke-linejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>



    </nav>
</template>

<script>

export default {
    data() {
        return {
            menuActive: false
        }
    }

}

</script>

<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.2rem 0;
    font-weight: 650;

    .im-menu {
        display: none;
        z-index: 99;
        width: 30px;
        height: 30px;
        cursor: pointer;
        color: #fff;

        &:hover {
            color: #ffffff72;
        }
    }

    .im-logo {
        a {
            font-size: 1.3rem;
            color: #fff;
            font-weight: 800;
            animation: LogoAnim 1s ease-in !important;
        }

        a:hover {
            color: #b5b5b5;
        }
    }

    ul {
        display: flex;
        gap: .8rem;

        a {
            color: #eee;
            padding: 0.4rem 1rem;
            font-size: 15.5px;
            transition: 0.2s ease-out;
        }

        a:hover {
            color: #FF4E05;
        }

        li {
            animation: href2 0.7s ease-in !important;
        }

        .active {
            color: #FF4E05 !important;
        }

        .photos {
            a {
                color: #fff;
                border: 2px solid #FF4E05;
                border-radius: 50px;
                padding: 0.5rem 1.4rem;
            }

            a:hover {
                color: #fff;
                border: 2px solid #fff;
            }
        }
    }
}

.activeBtn {
    color: #d3d6dac4 !important;
    transition: 0.5s;
}
</style>