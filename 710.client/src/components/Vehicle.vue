<template>
  <div class="Vehicle">
    <div class="row">
      <div class="col-12">
        <p>hullo</p>
        <h3>
          {{ vehicleProp.make }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Vehicle',
  props: {
    vehicleProp: { type: Object, required: true }
  },
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
