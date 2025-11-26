<script setup lang="ts">
import Nav from './components/Nav.vue'
import { ref } from 'vue'
import type { People } from './types'
import { splitBill } from './services/bill-splitter'

const isBillSplitted = ref<boolean>(false)
const numberOfPeople = ref<number>(0)
const billAmount = ref<number>(0)
const peoples = ref<People[]>([])

const SplitBill = () => {
  peoples.value = splitBill(
    numberOfPeople.value,
    billAmount.value,
    peoples.value
  )

  isBillSplitted.value = true
}
const Reset = () => {
  numberOfPeople.value = 0
  billAmount.value = 0
  isBillSplitted.value = false
}
</script>

<template>
  <Nav :showReset="isBillSplitted" @reset="Reset()" />
  <div v-if="!isBillSplitted">
    <div class="grid">
      <input type="number" placeholder="Bill" v-model="billAmount" />
      <input
        type="number"
        placeholder="Number Of People"
        v-model="numberOfPeople"
      />
    </div>
    <div class="grid" style="margin-bottom: 1rem">
      <button @click="SplitBill()">SPLIT !</button>
    </div>
  </div>
  <div v-else>
    <article v-for="people in peoples" class="grid pico-background-pink-50">
      <div>
        {{ people.position }}
      </div>
      <div>
        <select v-model="people.billPercentage">
          <option selected :value="people.billPercentage"></option>
          <option value="10">10 %</option>
          <option value="25">20 %</option>
          <option value="30">30 %</option>
          <option value="50">50 %</option>
        </select>
      </div>
      <div>{{ people.amountToPay.toFixed(2) }} €</div>
    </article>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
