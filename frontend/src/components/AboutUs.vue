<template>
  <section class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <div>
      <h2 class="text-[20px] font-semibold text-gray-800">{{localizeText("uniqueSiteVisitors:")}}</h2>
      <nav class="mt-1">
        <ul>
          <li class="text-lg font-bold text-gray-800">{{localizeText("perDay")}} <span class="text-[#6068B0]">0</span></li>
          <li class="text-lg font-bold text-gray-800">{{localizeText("perMonth")}} <span class="text-[#6068B0]">0</span></li>
          <li class="text-lg font-bold text-gray-800">{{localizeText("perAllTime")}} <span class="text-[#6068B0]">0</span></li>
        </ul>
      </nav>
    </div>
    <div class="mt-[40px]">
      <h2 class="text-lg font-bold text-gray-800">{{localizeText("authorsTelegram")}} - <a href="https://t.me/Stenford" target="_blank" class="text-[#6068B0]">{{localizeText("link")}}</a></h2>
      <h2 class="text-lg font-bold text-gray-800">{{localizeText("authorsGithub")}} - <a href="https://github.com/DenisGradov" target="_blank" class="text-[#6068B0]">{{localizeText("link")}}</a></h2>
    </div>
  </section>
</template>

<script>
import {getText} from "@/utiles/utiles";

export default {
  name: "AboutUs",
  props: {
    activeLanguage: {
      type: Number,
      required: true
    }
  },
  methods: {
    localizeText(text) {
      return getText(this.activeLanguage, text);
    }
  }
}
</script>