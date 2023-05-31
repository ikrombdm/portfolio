<template>
    <section id="services" class="sider">
        <h1 class="-title"><span class="im-color">S</span>ervices</h1>


        <div class="im-services-section">
            <Tilt class="box">
                <h1>Frontend</h1>
                <p>development</p>
            </Tilt>
            <Tilt class="box">
                <h1>Backend</h1>
                <p>development</p>
            </Tilt>
            <Tilt class="box">
                <h1>UI/UX</h1>
                <p>Designs</p>
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

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