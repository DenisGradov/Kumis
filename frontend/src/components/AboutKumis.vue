<template>

  <section
      class=" w-full mt-[60px] p-1 470px:mt-0 470px:absolute 470px:top-1/2 470px:-translate-y-1/2 470px:max-h-[80vh] 470px:overflow-y-auto bg-custom-gradient">
    <nav>
      <ul class="my-[10px] flex flex-wrap justify-between items-center gap-y-4">
        <li
            @click="activeChapter=index"
            class="m-1 flex items-center cursor-pointer hover:scale-105 transition-transform duration-200 select-none"
            v-for="(chapter, index) in chapters"
            :key="`chapter-${chapter.id}`"
        >
          <img src="@/assets/img/kumis.png" alt="kumis icon" class="mr-2">
          <span class="text-lg font-semibold text-gray-800">{{ chapter.title }}</span>
        </li>
      </ul>
    </nav>
    <h1 class="my-5 text-center text-2xl font-bold">{{ chapters[activeChapter].title }}</h1>
    <div class="flex items-center justify-center flex-wrap 470px:flex-nowrap">
      <img class="p-2 w-[45vw]" :src="require(`@/assets/img/${chapters[activeChapter].img}.png`)"
           :alt="`img for ${chapters[activeChapter].title}`">
      <p class="text-lg p-2 font-bold text-gray-800">{{ chapters[activeChapter].text }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutKumis",
  data() {
    return {
      activeChapter: 0,
      chapters: [
        {
          id: 0,
          title: "aboutKumisTitle",
          text: "Кумыс – это традиционный напиток, который появился тысячи лет назад среди кочевых народов Центральной Азии, таких как башкиры, казахи и монголы. Первые упоминания о кумысе встречаются в древнегреческих источниках, датируемых V веком до нашей эры, где историк Геродот описывал его как напиток, приготовленный из кобыльего молока. Производство кумыса включало доение кобыл и ферментацию молока в кожаных мешках или деревянных бочках с использованием закваски. Башкирский кумыс особенно знаменит своим уникальным рецептом и высокими стандартами качества. С течением времени кумыс завоевал популярность благодаря своим многочисленным полезным свойствам, включая улучшение пищеварения и укрепление иммунной системы, что сделало его важной частью культуры и медицины этих народов.",
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
  }
}
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
}

</style>
