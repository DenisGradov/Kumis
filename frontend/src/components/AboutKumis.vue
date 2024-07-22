<template>
  <section
      class="w-full mt-[60px] p-1 470px:mt-0 470px:absolute 470px:top-1/2 470px:-translate-y-1/2 470px:max-h-[80vh] 470px:overflow-y-auto bg-custom-gradient">
    <nav>
      <ul class="my-[10px] flex flex-wrap justify-between items-center gap-y-4">
        <li
            @click="activeChapter=index"
            class="m-1 flex items-center cursor-pointer hover:scale-105 transition-transform duration-200 select-none"
            v-for="(chapter, index) in chapters"
            :key="`chapter-${chapter.id}`">
          <img src="@/assets/img/kumis.png" alt="kumis icon" class="mr-2">
          <span class="text-lg font-semibold text-gray-800">{{ localizeText(chapter.title) }}</span>
        </li>
      </ul>
    </nav>
    <h1 class="my-5 text-center text-2xl font-bold">{{ localizeText(chapters[activeChapter].title) }}</h1>
    <div class="flex items-center justify-center flex-wrap 470px:flex-nowrap">
      <img class="p-2 w-[45vw]" :src="require(`@/assets/img/${chapters[activeChapter].img}.png`)"
           :alt="`img for ${chapters[activeChapter].title}`">
      <p class="text-lg p-2 font-bold text-gray-800">{{ localizeText(chapters[activeChapter].text) }}</p>
    </div>
  </section>
</template>

<script>
import { getText } from "@/utiles/utiles";

export default {
  name: "AboutKumis",
  props: {
    activeLanguage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      activeChapter: 0,
      chapters: [
        {
          id: 0,
          title: "aboutKumisTitle",
          text: "aboutKumisText",
          img: "aboutKumisImg",
        },
        {
          id: 1,
          title: "historyKumisTitle",
          text: "historyKumisText",
          img: "historyKumisImg",
        },
        {
          id: 2,
          title: "productionProcessTitle",
          text: "productionProcessText",
          img: "productionProcessImg",
        },
        {
          id: 3,
          title: "healthBenefitsTitle",
          text: "healthBenefitsText",
          img: "healthBenefitsImg",
        },
        {
          id: 4,
          title: "recipesTitle",
          text: "recipesText",
          img: "recipesImg",
        },
        {
          id: 5,
          title: "milkingGuideTitle",
          text: "milkingGuideText",
          img: "milkingGuideImg",
        }
      ]
    }
  },
  methods: {
    localizeText(text) {
      return getText(this.activeLanguage, text);
    }
  }
}
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}
</style>
