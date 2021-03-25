<template>
  <div class="Vehicle">
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Vehicle',
  props: [],
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      vehicle: computed(() => AppState.vehicle)
    })
    return {
      state
    }
  },
  components: {}
}
</script>
