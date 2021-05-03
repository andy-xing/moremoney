<template>
    <layout class-prefix="layout">
      <number-pad/>
      <types/>
      <notes/>
      <tags :data-source.sync="tags"/>
    </layout>
</template>

<script>

import NumberPad from "@/components/Money/NumberPad"
import Types from "@/components/Money/Types"
import Notes from "@/components/Money/Notes"
import Tags from "@/components/Money/Tags"

export default {
  name: "Money",
  components: {Tags, Notes, Types, NumberPad},
  data(){
    return {tags: ['衣','食','住','行']}
  }

}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}

</style>