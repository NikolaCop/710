<template>
  <div class="container-fluid bg-dark" v-if="state.vehicle">
    <div class="Yourvehiclepage text-white">
      <div class="row">
        <div class="col-12 text-center">
          <div class="card bg-primary">
            Your Vehicle Page
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          {{ state.vehicle }}
        </div>
      </div>
      <div class="row justify-content-center">
        <img src="https://crls.io/s/evox%2Fcolor_2400_001_png%2FMY2020%2F14061%2F14061_cc2400_001_H2.png/feature/n/porsche-911.png" id="carPic" alt="">
      </div>
      <div class="row p-3">
        <div class="col-6">
          <router-link :to="{name: 'MaintenancePage', params: { id: id }}">
            <button type="button" id="tile" class="btn btn-primary">
              Maintenance
            </button>
          </router-link>
        </div>
        <div class="col-6">
          <button type="button" id="tile" class="btn btn-primary">
            Records
          </button>
        </div>
      </div>
      <div class="row p-3">
        <div class="col-6">
          <button type="button" id="tile" class="btn btn-primary">
            Fluids
          </button>
        </div>
        <div class="col-6">
          <button type="button" id="tile" class="btn btn-primary">
            Filters
          </button>
        </div>
      </div>
      <div class="row p-3">
        <div class="col-6">
          <button type="button" id="tile" class="btn btn-primary">
            Tires
          </button>
        </div>
        <div class="col-6">
          <button type="button" id="tile" class="btn btn-primary">
            Brakes
          </button>
        </div>
      </div>
      <div class="row p-3">
        <div class="col-6">
          <router-link :to="{name: 'ActiveVehiclePage', params: { id: id }}">
            <button type="button" id="tile" class="btn btn-primary">
              Active Vehicle
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { vehicleService } from '../services/VehicleService'
import { useRoute } from 'vue-router'
export default {
  name: 'Yourvehiclepage',
  props: {
    vehicle: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      vehicle: computed(() => AppState.activeVehicle)
    })
    const route = useRoute()
    onMounted(async() => {
      await vehicleService.getVehicle(route.params.id)
    })
    return {
      state,
      route
    }
  },
  components: {}

}

</script>
<style scoped>
#tile{
  width: 200px;
  height: 200px;
  border-radius: 35px;
}
#carPic{
  height: 353px;
  width: 673px;
}
</style>
