<template>
    <section id="about" class="im-about-section sider main-section">

        <!-- LEFT main -->
        <div class="im-about-avatar" data-aos-once="true" data-aos="fade-right">
            <img :src="avatar">
        </div>



        <!-- RIGHT main -->
        <div class="im-about-txt" data-aos-once="true" data-aos="fade-left">
            <div class="txt">
                <h3 data-aos="fade-left" data-aos-once="true" data-aos-delay="100">My name is Ikrom.</h3>

                <p data-aos="fade-left" data-aos-once="true" data-aos-delay="150">
                    I am an independent developer currently based in Uzbekistan.
                    Most of my work is creating landing page , SPA, CMS and publicly
                    available code on
                    <a href="https://github.com/ikrombdm" target="_blank" class="extra-link">GitHub.</a> and you can
                    see more bellow cv link.
                </p>
            </div>
            <a :href="cv" data-aos="fade-left" data-aos-once="true" data-aos-delay="200" class="cv-link" target="_blank">
                <p>Read more in my CV</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </span>
            </a>
        </div>
    </section>
</template>
<script>
import cv from "@/assets/CV_Ikrom_Urazaliyev_en.pdf";
import avatar from "@/assets/image/avatar.png";

export default {
    data() {
        return {
            cv,
            avatar
        }
    }
}
</script>

<style lang="scss" scoped>
.im-about-section {
    padding-top: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;


    .im-about-avatar {
        img {
            background: #fff;
            width: 180px;
            height: 180px;
            object-fit: cover;
            border-radius: 50%;
            user-select: none !important;
        }
    }

    .im-about-txt {
        max-width: 600px;

        .txt {
            padding: 1.7rem 2rem;
            background: #00000022;
            margin-bottom: 2.2rem;
            border-radius: 10px;
            position: relative;

            &::after {
                position: absolute;
                content: "";
                top: 20px;
                left: -24px;
                height: 35px;
                min-width: 18px;
                background: #00000022;
                border-radius: 50px 10px 10px 50px;
                z-index: -1;
            }

            h3 {
                color: #FF4E05;
                margin-bottom: 0.5rem;
                text-transform: capitalize;
            }

            p {
                color: #ddd;
            }
        }

        .cv-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #eee;
            margin-left: 35px;

            &:hover span {
                margin-left: 10px;

                svg {
                    opacity: 1;
                }
            }


            span {

                transition: 0.5s cubic-bezier(0.7, 0.30, 0.10, 1.90);

                svg {
                    width: 15px;
                    margin-top: 7px;
                    opacity: 0;
                }
            }
        }

    }
}
</style>
