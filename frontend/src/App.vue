<template>
  <div :class="darkModeClass">
    <div :class="['absolute h-[100vh] w-[100vw]', bgGradientClass]"></div>
    <div class="absolute z-[99999] max-w-[1280px] h-full w-full left-1/2 transform -translate-x-1/2">
      <header class="p-2 flex justify-between items-center w-full">
        <img class="cursor-pointer hover:scale-105 duration-200 select-none h-[40px] 470px:h-[65px]"
             src="@/assets/img/logo.png"
             alt="Kumis logo">
        <nav>
          <ul class="flex items-center">
            <li @click="activeTab = index" v-for="(tab, index) in tabs" :key="tab"
                class="470px:m-5 m-2 cursor-pointer hover:scale-105 duration-200 select-none 470px:text-[24px] text-[15px]"
                :class="[mainStyles.textButtons, textClass, { 'font-bold 470px:text-[24px] text-[16px]': index === activeTab }]">
              {{ getText(tab) }}
            </li>
          </ul>
        </nav>
        <section class="flex items-start">
          <div class="flex flex-col justify-start items-start">
            <div class="flex items-center">
              <div ref="btnOpenLanguageList" class="w-[50px] flex cursor-pointer" @click="toggleLanguageList">
                <img class="w-[30px] h-[30px] select-none"
                     :src="require(`@/assets/img/flags/${languageList[activeLanguage]}.png`)" alt="language flag">
                <h4 :class="[textClass, 'ml-1 font-bold text-[18px] select-none']">
                  {{ languageList[activeLanguage] }}</h4>
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
                  <SunIcon v-if="!isDarkMode" class="text-[#fff] w-[20px] h-[20px]"/>
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
                   class="z-[99999] fixed flex flex-col items-start mt-[40px] bg-[#3f4f5a] w-[100px] rounded">
                <div v-for="(lang, index) in filteredLanguages" @click="setActiveLanguage(index)"
                     :key="`languageFlag-${lang}`"
                     class="p-2 flex items-center hover:bg-[#59666f] w-full select-none cursor-pointer">
                  <img :src="require(`@/assets/img/flags/${lang}.png`)" :alt="`language ${lang}`"
                       class="w-[20px] h-[20px] mr-2"/>
                  <span class="text-white">{{ lang }}</span>
                </div>
              </div>
            </Transition>
          </div>
        </section>
      </header>
      <main>
        <about-kumis v-if="activeTab === 0" :active-language="activeLanguage" :is-dark-mode="isDarkMode"/>
        <about-us v-else :active-language="activeLanguage" :is-dark-mode="isDarkMode" :counter="counter"/>
      </main>
    </div>
  </div>
</template>

<script>
import {SunIcon, MoonIcon} from '@heroicons/vue/24/solid'
import AboutKumis from "@/components/AboutKumis.vue";
import AboutUs from "@/components/AboutUs.vue";
import {getText} from '@/utiles/utiles.js';
import {languageList} from '@/constants/constants';
import axios from "axios";

export default {
  name: 'App',
  components: {
    AboutUs,
    AboutKumis,
    SunIcon,
    MoonIcon,
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    const language = localStorage.getItem('language')
    const theme = localStorage.getItem('theme')
    const firstOnSite = localStorage.getItem('firstOnSite')
    if (firstOnSite === null) {
      this.activeLanguage = languageList.indexOf(this.getBrowserLanguage())
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      localStorage.setItem('firstOnSite', 'true');
      localStorage.setItem('language', this.activeLanguage);
      localStorage.setItem('theme', this.isDarkMode);
      //Тут должен быть запрос на бек, как вход уникального юзера
    } else {
      this.activeLanguage = language != null ? parseInt(language) : 0
      this.isDarkMode = theme === 'true'
    }
    this.updateMetaTags();
    axios
        .post(`https://backend.kumis.top/api/hello`, {})
        .then((response) => {
          console.log(response.data)
          this.counter = response.data
        })
        .catch((error) => {
          console.error("request to back is error", error);
        })
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  data() {
    return {
      activeTab: 0,
      activeLanguage: 2,  // Индекс начального языка (en),
      counter: {
        "dailyVisitors": 0,
        "monthlyVisitors": 0,
        "totalVisitors": 0
      },
      isDarkMode: false,
      isLanguageListOpen: false,
      languageList, // используем импортированный список языков
      tabs: ['aboutKumis', 'aboutUs'],
      mainStyles: {
        textButtons: 'text-main-text font-roboto text-[20px]',
      },
    }
  },
  computed: {
    darkModeClass() {
      return this.isDarkMode ? 'dark' : '';
    },
    bgGradientClass() {
      return this.isDarkMode ? 'bg-custom-gradient-dark' : 'bg-custom-gradient';
    },
    textClass() {
      return this.isDarkMode ? 'text-main-text-dark' : 'text-main-text-light';
    },
    filteredLanguages() {
      return this.languageList.filter((_, index) => index !== this.activeLanguage);
    }
  },
  methods: {
    changeDarkMode() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('theme', this.isDarkMode);
      this.updateMetaTags();
    },
    toggleLanguageList() {
      this.isLanguageListOpen = !this.isLanguageListOpen;
    },
    setActiveLanguage(index) {
      const newLanguage = this.filteredLanguages[index];
      this.activeLanguage = this.languageList.indexOf(newLanguage);
      localStorage.setItem('language', this.activeLanguage);
      this.isLanguageListOpen = false;
      this.updateMetaTags();
    },
    handleClickOutside(event) {
      const languageList = this.$refs.LanguageList;
      const btnOpenLanguageList = this.$refs.btnOpenLanguageList;
      if (languageList && !languageList.contains(event.target) && btnOpenLanguageList && !btnOpenLanguageList.contains(event.target)) {
        this.isLanguageListOpen = false;
      }
    },
    getBrowserLanguage() {
      return (navigator.language || navigator.userLanguage).slice(0, 2);
    },
    getText(text) {
      return getText(this.activeLanguage, text);
    },
    localizeText(text) {
      return getText(this.activeLanguage, text);
    },
    updateMetaTags() {
      const description = this.localizeText('siteDescription');
      const keywords = this.localizeText('siteKeywords');
      document.getElementById('meta-description').setAttribute('content', description);
      document.getElementById('meta-keywords').setAttribute('content', keywords);
      document.title = this.localizeText('siteTitle');
    }
  }
}
</script>
