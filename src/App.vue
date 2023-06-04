<template>
  <main>
    <header :class="{ 'onScroll': !view.topOfPage }">
      <Navbar></Navbar>
    </header>
    <a href="#" v-if="imAbove" class="im-above">
      <h1><span class="im-color">to </span>top</h1>
    </a>

    <div class="main-content">
      <router-view></router-view>
    </div>


    <div id="g-cursor" :class="['g-cursor', { 'g-cursor_hover': hover }, { 'g-cursor_hide': hideCursor }]">
      <div class="g-cursor__point" ref="point" :style="cursorPoint"></div>
      <div :style="cursorCircle" class="g-cursor__circle"></div>
      <div :style="cursorCircle2" class="g-cursor__circle2"></div>
    </div>



    <footer>
      <p>© 2023 | Ikrombek Urazaliyev</p>
    </footer>
  </main>
</template>


<script>
import Navbar from "@/components/Navbar.vue"

export default {


  // COMPONENTS
  components: {
    Navbar
  },


  // DATA
  data() {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      yParentLarge: 0,
      xParentLarge: 0,
      hover: false,
      hideCursor: true,

      view: {
        topOfPage: true,
      },
      imAbove: false,
    }
  },


  // METHODS
  methods: {
    // NAVBAR AND SHIFT BUTTON
    handleScroll() {
      if (window.pageYOffset > 150) {
        if (this.view.topOfPage) {
          this.view.topOfPage = false
          this.imAbove = true;
        };
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
        this.imAbove = false;
      }
    },

    // CURSOR 
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(() => {
        this.xParent = e.clientX - 14.5;
        this.yParent = e.clientY - 14.5;
      }, 50);
      setTimeout(() => {
        this.xParentLarge = e.clientX - 22;
        this.yParentLarge = e.clientY - 22;
      }, 20);
    }
  },


  // COMPUTED
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px)
      translateY(${this.yParent}px)
      translateZ(0)
      translate3d(0, 0, 0)
      scale(0.5);
      `
    },

    cursorCircle2() {
      return `transform: translateX(${this.xParentLarge}px)
      translateY(${this.yParentLarge}px)
      translateZ(0)
      translate3d(0, 0, 0)
      scale(0.5);
      `
    },
    cursorPoint() {
      return `transform:
      translateX(${this.xChild - 3}px)
      translateY(${this.yChild - 3}px)
      translateZ(0)
      translate3d(0, 0, 0);`
    }
  },

  // BEFOREMOUNT
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  // MOUNTED
  mounted() {
    const navLi = document.querySelector("nav ul li a");

    window.onscroll = () => {
      navLi.classList.remove("active")
      if (window.pageYOffset < 550) {
        navLi.classList.add("active")
      }
    };



    const hovered_me = document.querySelectorAll("a");

    hovered_me.forEach(hovereds_me => {
      hovereds_me.addEventListener('mouseenter', () => {
        this.hover = true;
        this.hideCursor = true;
      });
    });
    hovered_me.forEach(hovereds_me => {
      hovereds_me.addEventListener('mouseleave', () => {
        this.hover = false;
        this.hideCursor = false;
      })
    })

    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener('mouseleave', e => {
      this.hideCursor = true;
    });
    document.addEventListener('mouseenter', e => {
      this.hideCursor = false;
    });


  },
}
</script>

<style lang="scss">
footer {
  text-align: center;
  padding: 1.5rem;
  border-top: 1px solid #ffffff28;
  color: #eee;
}

.main-content {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  position: fixed;
  width: 100%;
  border-top: 3px solid #FF4E05;
  transition: .4s ease;
  z-index: 10;

  &.onScroll {
    background: transparent;
    box-shadow: 0 10px 1.5rem #10233bc8;
    backdrop-filter: blur(15px) saturate(100%);
    background: #10233bc1;
  }

}

.im-above {
  position: fixed;
  bottom: 80px;
  right: 20px;
  display: flex;
  transform: rotate(90deg);
  animation: act 1.2s ease-out;
  cursor: pointer;
  z-index: 22;

  &::after {
    position: absolute;
    content: '';
    width: 65px;
    height: 65px;
    bottom: -23px;
    right: -8px;
    border: 1px solid #FF4E05;
    border-radius: 50%;
    transform: scale(0.2);
    opacity: 0;
    transition: .5s;
  }

  &:active::after {
    transform: scale(1);
    opacity: 1;
    transition: 0s;
  }

  &::before {
    position: absolute;
    content: '';
    width: 30px;
    height: 2px;
    bottom: 10px;
    right: -40px;
    background: #ffffff45;
  }

  h1 {
    text-transform: uppercase;
    font-size: 0.9rem !important;
    font-weight: 500;
    color: #fff;
  }
}

@keyframes act {
  0% {
    right: -20%;
  }
}
</style>