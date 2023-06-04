<template>
    <section id="services" class="xy main-section sider">
        <h1 class="-title"><span class="im-color">S</span>ervices</h1>


        <div class="im-services-section" data-aos-once="true" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Tilt class="box">
                <div>
                    <h1 data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom"
                        data-aos-delay="100">Frontend</h1>
                    <p data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom"
                        data-aos-delay="200">development</p>
                </div>
            </Tilt>
            <Tilt class="box">
                <div>
                    <h1 data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom"
                        data-aos-delay="100">Backend</h1>
                    <p data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom"
                        data-aos-delay="200">development</p>
                </div>
            </Tilt>
            <Tilt class="box">
                <div>
                    <h1 data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom"
                        data-aos-delay="100">UI/UX</h1>
                    <p data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom"
                        data-aos-delay="200">Designs</p>
                </div>
            </Tilt>
        </div>

    </section>
</template>

<script setup>
import Tilt from 'vanilla-tilt-vue';

</script>




<style lang="scss" scoped>
section {
    padding-top: 15rem;

    .im-services-section {
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        .box {
            height: 200px;
            width: 200px;
            min-width: 200px;
            background: #fff;
            border-radius: 50%;

            div {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            h1 {
                color: #FF4E05;
                font-size: 1.8rem;
            }

            p {
                font-size: 1.1rem;
            }
        }
    }

    .im-services-section::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
}
</style>