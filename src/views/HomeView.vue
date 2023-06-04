<template>
  <main>

    <!-- ==== HOME SIDE ==== -->
    <div class="im-home">
      <div class="home-section">
        <div class="im-avatar">
          <img :src="avatar">
        </div>
        <div class="im-name">
          <h1>Ikrom Urazaliyev</h1>
          <p>I am a <span class="im-color">web developer</span></p>
        </div>
        <ul class="im-socials">

          <li>
            <a href="https://t.me/peculiarofplaceofpeculiarworld" target="_blank">
              <img :src="telegram" alt="">
              <img :src="telegram" alt="">
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ikrombdm/" target="_blank">
              <img :src="instagram" alt="">
              <img :src="instagram" alt="">
            </a>
          </li>
          <li>
            <a href="https://codepen.io/ikrombdm" target="_blank">
              <img :src="codepen" alt="">
              <img :src="codepen" alt="">
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ikrombek/" target="_blank">
              <img :src="linkedin" alt="">
              <img :src="linkedin" alt="">
            </a>
          </li>
        </ul>
      </div>
      <a href="#about" class="im-mouse"></a>
    </div>
    <!-- ==== END HOME SIDE ==== -->




    <!-- ==== ABOUT SIDE ==== -->
    <div class="im-about">
      <About></About>
    </div>
    <!-- ==== END ABOUT SIDE ==== -->





    <!-- ==== PROJECTS SIDE ==== -->
    <div class="im-projects">
      <Projects></Projects>
    </div>
    <!-- ==== END PROJECTS SIDE ==== -->





    <!-- ==== SERVICES SIDE ==== -->
    <div class="im-services">
      <Services></Services>
    </div>
    <!-- ==== END SERVICES SIDE ==== -->

    <div class="im-cv" data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="top-bottom">
      <a :href="cv" target="_blank">
        <h1 data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom" data-aos-delay="100">
          <span class="im-color">C</span>urriculum
        </h1>
        <h1 data-aos="fade-up" data-aos-once="true" data-aos-anchor-placement="center-bottom" data-aos-delay="200"><span
            class="im-color">V</span>itae</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </div>

  </main>
</template>




<script>
// ===== SVG =====
import instagram from "@/assets/svg/instagram.svg";
import github from "@/assets/svg/github.svg";
import linkedin from "@/assets/svg/linkedin.svg";
import codepen from "@/assets/svg/codepen.svg";
import telegram from "@/assets/svg/telegram.svg";
import cv from "@/assets/CV_Ikrom_Urazaliyev_en.pdf";
// ===== IMAGES =====
import avatar from "@/assets/image/avatar.png";

// ===== COMPONENTS =====
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Services from "@/components/Services.vue";


export default {
  components: {
    About,
    Projects,
    Services,
  },
  data() {
    return {
      github,
      linkedin,
      codepen,
      telegram,
      instagram,
      avatar,
      cv

    }
  },
  mounted() {

  }
}
</script>





<style lang="scss" scoped>
// ==== ABOUT SIDE  ==== 




// ==== BOTTOM CV  ====

.im-cv {
  margin-top: 20rem;
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    height: 250px;
    background: #ccc;
    border-radius: 50%;
    transition: 0.5s;

    &:hover {
      background: #eee;
    }

    &:hover h1 {
      opacity: 0;
      transform: scale(0.5);
    }

    &:hover svg {
      opacity: 1;
      transition: 0.8s;
    }

    svg {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      color: #FF4E05;
      opacity: 0;
      transition: 0.5s;
    }

    h1 {
      text-align: center;
      color: #000;
      transition: 0.5s;
    }
  }
}

// ==== HOME SIDE  ==== 
.im-home {
  position: relative;
  height: 100vh;
  width: 100%;


  .home-section {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 2rem;
    gap: 2rem;


    .im-avatar {
      height: 100px;
      width: 100px;
      background: #FF4E05;
      border-radius: 50%;
      overflow: hidden;
      animation: avatar 1.4s ease-in !important;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        user-select: none !important;
      }
    }

    .im-name {
      color: #eee;
      text-align: center;

      h1 {
        font-size: 1.6rem;
        margin-bottom: 0.6rem;
        animation: avatar 1.7s ease-in !important;
      }

      p {
        font-size: 1.1rem;
        animation: avatar 2s ease-in !important;
      }
    }

    .im-socials {
      margin-top: 0.2rem;
      display: flex;
      gap: 0.8rem;

      a {
        position: relative;
        width: 38px;
        height: 38px;
        padding: 8px !important;
        background: #eeeeee0d;
        display: flex;
        justify-content: center;
        border-radius: 0.9rem;
        align-items: center;
        overflow: hidden;
        transition: 0.3s ease;


        &:hover {
          background: #cccccc;
          box-shadow: 0 5px 15px #00000022;

          img {
            filter: none;
            margin-right: -100px;
          }

          img:nth-child(2) {
            margin-right: 0 !important;
          }
        }

        img {
          position: absolute;
          -webkit-user-drag: none !important;
          user-select: none;
          filter: invert(5);
          width: 25px;
          transition: 0.2s ease-in;
        }

        img:nth-child(2) {
          position: absolute;
          margin-right: 300%;
          transition: 0.2s ease-out;
        }

      }

      li:nth-child(1) {
        animation: href1 2.5s ease !important;
      }

      li:nth-child(2) {
        animation: href1 2.9s ease !important;
      }

      li:nth-child(3) {
        animation: href1 3.3s ease !important;
      }

      li:nth-child(4) {
        animation: href1 3.7s ease !important;
      }

    }

  }

  .im-mouse {
    position: absolute;
    height: 33px;
    width: 27px;
    border: 2px solid #eee;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
    transition: .1s ease-in-out;
    animation: wheelBlock 4.2s ease-out;

    &:after {
      position: absolute;
      content: "";
      height: 7px;
      width: 3px;
      background: #fff;
      left: 50%;
      top: 8px;
      border-radius: 5px;
      transform: translateX(-50%);
      animation: wheel 1.1s ease-out infinite;
    }

    @keyframes wheel {

      0%,
      100% {
        top: 8px;
      }

      38% {
        top: 15px;
        background: #FF4E05;
      }
    }

    &:active {
      opacity: 0;
    }

  }
}
</style>