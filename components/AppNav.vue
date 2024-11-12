<template>
    <nav class="v-app-nav"
         :class="{
          'menu-is-open' : showMenu().value
         }"
    >
        <svg
                @click="scrollToTop"
                class="v-app-nav__logo"
                width="970"
                height="300"
                viewBox="0 0 970 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="970" height="300" fill="none"/>
            <path d="M150.658 87.6912C140.946 71.9574 124.885 63.925 102.113 63.925C88.7276 63.925 69.9695 71.9574 58.9217 87.6912V67.9386H0V154.314H58.9217V146.949C58.9217 128.874 68.2937 117.49 82.6932 117.49C95.7548 117.49 104.12 128.536 104.12 145.948V240.697H163.049V146.949C163.049 128.874 172.421 117.49 186.482 117.49C199.875 117.49 207.916 128.536 207.916 145.948V240.697H266.838V140.922C266.838 91.3739 244.404 63.9251 206.24 63.9251C183.468 63.9251 165.724 71.9574 150.658 87.6912Z" fill="url(#paint0_linear_6_16)"/>
            <path d="M288.687 154.314H348.278C348.285 133.219 363.346 117.49 383.097 117.49C403.186 117.49 418.247 133.219 418.254 154.314H477.852C477.845 102.749 436.667 63.925 383.097 63.925C329.534 63.925 288.694 102.749 288.687 154.314Z" fill="url(#paint1_linear_6_16)"/>
            <path d="M627.691 5V87.6914C617.981 72.2903 601.575 63.9252 580.148 63.9252C533.943 63.9252 498.138 101.756 498.131 154.315H557.721C557.729 133.219 572.79 117.49 592.541 117.49C612.573 117.49 627.599 133.141 627.684 154.153H627.656V213.645C627.656 262.863 661.475 295 714.046 295C766.278 295 800.428 262.863 800.428 213.645V118.221H741.501V211.3C741.501 229.713 730.452 241.768 714.046 241.768C697.301 241.768 686.585 229.713 686.585 211.3V154.315H686.62V5H627.691Z" fill="url(#paint2_linear_6_16)"/>
            <path d="M827.488 174.136C827.488 196.568 839.874 217.996 877.707 225.03L896.794 228.704C905.499 230.382 908.181 234.064 908.181 238.085C908.181 243.105 901.816 247.797 891.775 247.797C874.024 247.797 847.908 239.762 825.817 224.016V274.242C835.52 281.607 859.294 295 891.775 295C940.994 295 967.77 274.911 967.77 238.754C967.77 213.306 955.717 190.873 920.56 183.177L895.789 177.818C888.761 176.487 885.741 173.127 885.741 169.117C885.741 163.759 891.775 159.736 900.809 159.736C917.215 159.736 941.654 165.764 959.738 177.48V130.277C946.014 120.574 923.912 114.207 900.14 114.207C865.661 114.207 827.488 127.269 827.488 174.136Z" fill="url(#paint3_linear_6_16)"/>
            <defs>
                <linearGradient id="paint0_linear_6_16" x1="-1.82126e-06" y1="152.811" x2="266.781" y2="152.811" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00883D"/>
                    <stop offset="1" stop-color="#004C3B"/>
                </linearGradient>
                <linearGradient id="paint1_linear_6_16" x1="288.412" y1="154.614" x2="477.683" y2="154.614" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00883D"/>
                    <stop offset="1" stop-color="#004C3B"/>
                </linearGradient>
                <linearGradient id="paint2_linear_6_16" x1="497.511" y1="149.206" x2="800.344" y2="149.206" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00883D"/>
                    <stop offset="1" stop-color="#004C3B"/>
                </linearGradient>
                <linearGradient id="paint3_linear_6_16" x1="825.58" y1="205.086" x2="967.983" y2="205.086" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00883D"/>
                    <stop offset="1" stop-color="#004C3B"/>
                </linearGradient>
            </defs>
        </svg>


      <div style="display: flex; align-items: center; gap: 1rem">
        <transition name="app-transition-default">
          <div class="app__icon" v-if=" !showMenu().value ">
            <a href="https://ch.linkedin.com/company/fondation-modus" target="_blank">
                <svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <g id="Calque_1-2" data-name="Calque 1">
                        <path d="M52,52h-10.684375762939453v-18.197883605957031c0-4.989360809326172-1.895832061767578-7.777584075927734-5.844921112060547-7.777584075927734-4.296092987060547,0-6.540626525878906,2.901576995849609-6.540626525878906,7.777584075927734v18.197883605957031h-10.296743392944336V17.333333969116211h10.296743392944336v4.669595718383789s3.095966339111328-5.728713989257812,10.452476501464844-5.728713989257812c7.353122711181641,0,12.617446899414062,4.490255355834961,12.617446899414062,13.776996612548828v21.948787689208984ZM6.349348068237305,12.794013977050781c-3.507290840148926,0-6.349348068237305-2.864356994628906-6.349348068237305-6.397006988525391S2.842057228088379,0,6.349348068237305,0c3.507291793823242,0,6.34765625,2.864356994628906,6.34765625,6.397006988525391s-2.840364456176758,6.397006988525391-6.34765625,6.397006988525391ZM1.032551765441895,52h10.736849784851074V17.333333969116211H1.032551765441895v34.666666030883789Z" style="fill: white; fill-rule: evenodd;"/>
                    </g>
                </svg>
            </a>
          </div>
        </transition>

        <div class="v-app-nav__menu"
             @click="toggleNav"
        >
          <img alt="ouvrir le menu"
               draggable="false"
               src="@/assets/menu_icon.svg"
          />
        </div>
      </div>

    </nav>
</template>





<script lang="ts" setup>

import {arrayOfH2TitleIdInCurrentPage, showMenu, siteInfo} from "~/composable/main";

const h2TitleIdInCurrentPage = arrayOfH2TitleIdInCurrentPage()

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
    useRouter().push('/')
}

function toggleNav() {
    showMenu().value = !showMenu().value
}

</script>


<style lang="scss" scoped>
.v-app-nav {
  pointer-events: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--app-nav__height);
  box-sizing: border-box;
  position: relative;
  user-select: none;

  transition: padding .5s .0s ease-in-out;
  padding: calc(var(--app-gutter) / 2) calc(var(--app-gutter) / 1) 0;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    pointer-events: none;
    z-index: -1;
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(10px);
    transition: height .25s ease-in-out;
    height: 0;
  }

  &.menu-is-open {
    &:before {
      background: rgba(255, 255, 255, 0);
      backdrop-filter: blur(0px);
    }
  }

  .is-intersected & {
    padding: calc(var(--app-gutter) / 4) calc(var(--app-gutter) / 1) 0;

    &:before {
      height: 100%;
    }
  }
}


.v-app-nav__logo {
  display: block;
  height: 2rem;
  width: auto;
  fill: var(--app-color-main);
  cursor: pointer;
  pointer-events: all;

  .is-intersected & {
  }
}

.v-app-nav__menu {
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  pointer-events: all;
}

.app__icon {
    pointer-events: all;
}
</style>
