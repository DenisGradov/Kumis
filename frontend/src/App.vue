<template>
  <div>
    <div class="absolute h-[100vh] w-[100vw] bg-custom-gradient"></div>
    <div class="absolute z-[99999] max-w-[1280px] w-full left-1/2 transform -translate-x-1/2">
      <header class="p-2 flex justify-between items-center w-full">
        <img class="cursor-pointer hover:scale-105 duration-200 select-none h-[40px] 470px:h-[90px]" src="@/assets/img/logo.png"
             alt="Kumis logo">
        <nav>
          <ul class="flex items-center">
            <li @click="activeTab = index" v-for="(tab, index) in tabs" :key="tab"
                class="470px:m-5 m-1 cursor-pointer hover:scale-105 duration-200 select-none 470px:text-[24px] text-[16px]"
                :class="[mainStyles.textButtons, { 'font-bold 470px:text-[24px] text-[16px]': index === activeTab }]">
              {{ tab }}
            </li>
          </ul>
        </nav>
        <section class="flex items-start">
          <div class="flex flex-col justify-start items-start">
            <div class="flex items-center">
              <div ref="btnOpenLanguageList" class="w-[50px] flex cursor-pointer" @click="toggleLanguageList">
                <img class="w-[30px] h-[30px] select-none" :src="require(`@/assets/img/flags/${languageList[activeLanguage]}.png`)" alt="language flag">
                <h4 class="ml-1 font-bold text-[18px] select-none">{{ languageList[activeLanguage]}}</h4>
              </div>
              <div @click="changeDarkMode"
                   class="ml-[20px] w-[30px] h-[30px] rounded-[50%] bg-[#3e515b] cursor-pointer hover:scale-105 duration-200 flex items-center justify-center">
                <Transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0">
                  <SunIcon v-if="isDarkMode" class="text-[#fff] w-[20px] h-[20px]"/>
                  <MoonIcon v-else class="text-[#fff] w-[20px] h-[20px]"/>
                </Transition>
              </div>
            </div>

            <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform translate-y-[-150px] scale-95 opacity-0"
                enter-to-class="transform translate-y-[0px] scale-100 opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform translate-y-[0px] scale-100 opacity-100"
                leave-to-class="transform translate-y-[-150px] scale-95 opacity-0">
              <div ref="LanguageList" v-if="isLanguageListOpen"
                   class="absolute flex flex-col items-start mt-[40px] bg-[#3f4f5a] w-[100px] rounded">
                <div v-for="(lang, index) in filteredLanguages" @click="setActiveLanguage(index)" :key="`languageFlag-${lang}`" class="p-2 flex items-center hover:bg-[#59666f] w-full select-none cursor-pointer">
                  <img :src="require(`@/assets/img/flags/${lang}.png`)" :alt="`language ${lang}`" class="w-[20px] h-[20px] mr-2"/>
                  <span class="text-white">{{ lang }}</span>
                </div>
              </div>
            </Transition>
          </div>
        </section>
      </header>
    </div>
  </div>
</template>


<script>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'App',
  components: {
    SunIcon,
    MoonIcon,
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    const language = localStorage.getItem('language')
    const firstOnSite = localStorage.getItem('firstOnSite')
    console.log()
    if (firstOnSite===null){
      this.activeLanguage = this.languageList.indexOf(this.getBrowserLanguage())
      localStorage.setItem('firstOnSite', 'true');
      localStorage.setItem('language', this.activeLanguage);
      //Тут должен быть запрос на бек, как вход уникального юзера
    } else {
      this.activeLanguage = language!=null?language:0
    }
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  data() {
    return {
      activeTab: 0,
      activeLanguage: 2,  // Индекс начального языка (en)
      isDarkMode: false,
      isLanguageListOpen: false,
      languageList: ['ru', 'ua', 'en', 'kz', 'nl'],
      tabs: ['О кумысе', 'О нас'],
      mainStyles: {
        textButtons: 'text-main-text font-roboto text-[20px]',
      },
    }
  },
  computed: {
    filteredLanguages() {
      return this.languageList.filter((_, index) => index !== this.activeLanguage);
    }
  },
  methods: {
    changeDarkMode() {
      this.isDarkMode = !this.isDarkMode
    },
    toggleLanguageList() {
      this.isLanguageListOpen = !this.isLanguageListOpen;
    },
    setActiveLanguage(index) {
      const newLanguage = this.filteredLanguages[index];
      this.activeLanguage = this.languageList.indexOf(newLanguage);
      localStorage.setItem('language', this.activeLanguage);
      this.isLanguageListOpen = false;
    },
    handleClickOutside(event) {
      const languageList = this.$refs.LanguageList;
      const btnOpenLanguageList = this.$refs.btnOpenLanguageList;
      if (languageList && !languageList.contains(event.target) && btnOpenLanguageList && !btnOpenLanguageList.contains(event.target)) {
        this.isLanguageListOpen = false;
      }
    },
    getBrowserLanguage(){
      return (navigator.language || navigator.userLanguage).slice(0, 2);
    }
  }
}

</script>

<style scoped>
.icon-size {
  width: 20px;
  height: 20px;
  color: #FFD700; /* Цвет иконки солнышка */
}
</style>
