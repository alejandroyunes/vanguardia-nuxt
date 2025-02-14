<script setup lang="ts">
import HTML from "~/components/icons/tools/HtmlSvg.vue"
import JavaScript from "~/components/icons/tools/JavaScriptSvg.vue"
import Linux from "~/components/icons/tools/LinuxSvg.vue"
import Node from "~/components/icons/tools/NodeSvg.vue"
import Systems from "~/components/icons/tools/SystemsSvg.vue"
import Windows from "~/components/icons/tools/WindowsSvg.vue"
import React from "~/components/icons/tools/ReactSvg.vue"

const toolComponents: Record<string, Component> = {
  HTML,
  JavaScript,
  Linux,
  Node,
  Systems,
  Windows,
  React,
}

import './tools.scss'

type Props = {
  tools: string[] | undefined
}

const { tools } = defineProps<Props>()

</script>

<template>

  <section class="tools" v-for="(tool, index) in tools" :key="index">

    <div class="icon-svg">
      <component :is="toolComponents[tool]" />
    </div>

    <p class="text">
      {{ tool }}
    </p>

  </section>
  
</template>
