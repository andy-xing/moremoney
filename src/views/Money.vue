<template>
  <div class="nav-wrapper">
    <layout>
      <tags/>
      <notes/>
      <types/>
      <number-pad/>
    </layout>
  </div>
</template>

<script>

import NumberPad from "@/components/Money/NumberPad"
import Types from "@/components/Money/Types"
import Notes from "@/components/Money/Notes"
import Tags from "@/components/Money/Tags"

export default {
  name: "Money",
  components: {Tags, Notes, Types, NumberPad},
}
</script>

<style lang="scss" scoped>


</style>