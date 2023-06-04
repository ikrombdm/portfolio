<template>
    <section id="projects" class="main-section sider">
        <h1 class="-title"><span class="im-color">P</span>rojects</h1>


        <!-- === = PROJECTS = === -->
        <div class="im-projects">

            <div data-aos="fade-up" data-aos-once="true" data-aos-delay="200"
             data-aos-anchor-placement="top-bottom" class="im-project-item"
                v-for="project in projects" :key="project.id">

                <div class="web-image">
                    <img v-if="project.primg" class="image-item" :src="project.primg">
                    <img v-else class="else-image" :src="noImage">
                </div>


                <div class="web-contents">
                    <h2>{{ project.title }}</h2>
                    <article>
                        {{ project.content }}
                    </article>

                    <div class="links">
                        <a v-if="project.live" :href="project.live" target="_blank">
                            <p>Live</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>

                        </a>
                        <a v-else>
                            <p>Demo</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </a>

                        <a v-if="project.demo" :href="project.demo" target="_blank">
                            <p>Demo</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>

                        </a>
                        <a v-else>
                            <p>Demo</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <!-- === = PROJECTS = === -->




        <!-- === = BRAND = === -->

        <div class="im-my-projects-brand">
            <img src="https://allgoodnasiya.uz/assets/images/allgood_imgs/Logo_final.png" alt="">
            <img src="https://allgoodnasiya.uz/assets/images/allgood_imgs/Logo_final.png" alt="">
            <img src="https://allgoodnasiya.uz/assets/images/allgood_imgs/Logo_final.png" alt="">
            <img src="https://allgoodnasiya.uz/assets/images/allgood_imgs/Logo_final.png" alt="">
            <img src="https://allgoodnasiya.uz/assets/images/allgood_imgs/Logo_final.png" alt="">
        </div>

        <!-- === = END BRAND = === -->





        <!-- === = PROGRESS SKILLS = === -->
        <div class="im-about-skills">
            <div class="im-info">
                <div class="txt">
                    <h2 data-aos-once="true" data-aos="fade-right" data-aos-delay="100">My first job as a front-end
                        developer began in summer of 2021. Since then, I've been building:</h2>
                    <p data-aos-once="true" data-aos="fade-right" data-aos-delay="100">
                        Single page applications (SPAs) with vue js following a reactive and declarative pattern using RxJs.
                    </p>
                    <p data-aos-once="true" data-aos="fade-right" data-aos-delay="150">
                        JAMstack sites built with Nuxt.js (Vue.js framework), Storyblok as content management system (CMS)
                        and Netlify deployment in order to obtain the best web performance and lighthouse scores.
                    </p>
                    <p data-aos-once="true" data-aos="fade-right" data-aos-delay="200">
                        Outside of programming I have a passion for
                        <a href="https://www.pexels.com/@ikrombek-540243926/" class="extra-link"
                            target="_blank">photography</a> since I was a teenager.
                    </p>
                </div>
            </div>
            <div class="progress-section" data-aos="fade-left" data-aos-once="true">
                <div class="task-progress">
                    <p>Frontend
                        <span>80%</span>
                    </p>
                    <progress class="progress progress1" max="100" value="80"></progress>
                </div>
                <div class="task-progress">
                    <p>Backend
                        <span>50%</span>
                    </p>
                    <progress class="progress progress2" max="100" value="50"></progress>
                </div>
                <div class="task-progress">
                    <p>UI/UX
                        <span>75%</span>
                    </p>
                    <progress class="progress progress3" max="100" value="75"></progress>
                </div>
            </div>
        </div>
        <!-- === = END PROGRESS SKILLS = === -->

    </section>
</template>

<script>
import projects from "@/ps.json"
import noImage from "@/assets/svg/no-image.svg"

export default {
    setup() {
        return {
            projects,
            noImage
        }
    }
}

</script>

<style lang="scss" scoped>
section {
    margin-top: 15rem;
    overflow: hidden;


    // PROJECTS
    .im-projects {
        position: relative;
        margin-top: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;

        .im-project-item {
            width: 100%;
            padding: 1.2rem 1.2rem 1rem 1.2rem;
            background: #00000044;
            border-radius: 3rem;
            transition: 0.2s ease-in;

            // &:hover {
            //     transform: translateY(-5px);
            // }

            .web-image {
                position: relative;
                width: 100%;
                max-height: 160px;
                margin-bottom: 0.2rem;

                img {
                    border-radius: 2.5rem;
                    height: 160px;
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    width: 100%;
                    object-fit: cover;
                    user-select: none;
                }
            }


            .web-contents {
                h2 {
                    color: #FF4E05;
                    margin-top: 0.2rem;
                }

                article {
                    position: relative;
                    margin-bottom: 0.5rem;
                    max-height: 100px;
                    height: 100px;
                    overflow: scroll;
                    line-height: 25px;
                    color: #eee;
                    border-bottom: 0.1px dotted #eeeeee11;
                }

                article::-webkit-scrollbar {
                    width: 0;
                    height: 0 !important;
                    background: transparent;
                }

                .links {
                    display: flex;
                    justify-content: space-around;
                    gap: 0.8rem;

                    a {
                        width: 100%;
                        padding: 6px;
                        color: #fff;
                        border: 2px solid transparent;
                        border-radius: 20px;
                        text-align: center !important;
                        font-size: 15.5px;
                        display: flex;
                        justify-content: center;
                        gap: 6px;
                        transition: 0.3s ease;

                        svg {
                            width: 17px;
                            opacity: 0;
                            transform: scale(0.5);
                            transition: 0.2s ease;
                            color: #FF4E05;
                        }

                        &:hover svg {
                            opacity: 1;
                            transform: scale(1);
                        }

                        &:hover {
                            color: #FF4E05;
                            background: #eeeeee02;
                        }
                    }
                }
            }
        }
    }




    // BRANDS
    .im-my-projects-brand {
        margin-top: 10rem;
        display: flex;
        align-items: center;
        overflow: scroll;
        gap: 5rem;
        background: #00000022;
        padding: 1rem;
        height: 130px;
        border-radius: 20px;
        border: 2px solid #000;

        img {
            height: 50%;
        }
    }

    .im-my-projects-brand::-webkit-scrollbar {
        width: 0;
        height: 0;
    }





    // SKILLS PROGRESS
    .im-about-skills {
        margin-top: 15rem;
        display: flex;
        gap: 5rem;
        justify-content: space-between;

        .im-info {
            max-width: 45%;

            .txt {


                h2 {
                    color: #FF4E05;
                    margin-bottom: 1.5rem;
                    font-size: 1.2rem;
                }

                p {
                    color: #ffffffea;
                    margin-top: 20px;
                    font-weight: normal;
                }
            }
        }

        .progress-section {
            width: 100%;
            border-radius: 15px;
            background: #00000022;
            padding: 1rem 2rem;

            .task-progress {
                margin: 1.5rem 0;
            }

            .task-progress p {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #eee;
            }

            span {
                color: #eee;
            }

            .progress {
                width: 100%;
                -webkit-appearance: none;
                appearance: none;
                border: none;
                border-radius: 10px;
                height: 10px;
            }

            .progress::-webkit-progress-bar {
                background-color: #f0f0f0;
            }

            .progress::-webkit-progress-bar,
            .progress::-webkit-progress-value {
                border-radius: 10px;
            }

            .progress::-moz-progress-bar {
                border-radius: 10px;
            }

            .progress1::-webkit-progress-value {
                background: #56b6ff;
            }

            .progress2::-webkit-progress-value {
                background: #ffb453;
            }

            .progress3::-webkit-progress-value {
                background: #3fff76;
            }

        }
    }

}
</style>