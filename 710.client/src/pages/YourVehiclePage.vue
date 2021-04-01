<template>
  <div class="container-fluid bg-dark" v-if="state.vehicle">
    <div class="Yourvehiclepage text-white">
      <div class="row">
        <div class="col-12 text-center">
          <div class="card bg-primary">Your Vehicle Page</div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-5 order-md-last">
          <img
            src="https://crls.io/s/evox%2Fcolor_2400_001_png%2FMY2020%2F14061%2F14061_cc2400_001_H2.png/feature/n/porsche-911.png"
            id="carPic"
            alt=""
          />
        </div>
        <div class="col-12 col-md-5 d-flex align-items-center">
          <div class="card bg-primary">
            <div class="card-header">
              <button
                type="button"
                class="btn btn-info"
                data-toggle="modal"
                data-target="#edit-vehicle"
              >
                Edit
              </button>
              <EditVehicleModal />
              <button
                type="button"
                class="btn btn-danger"
                @click="archiveVehicle"
              >
                Archive
              </button>
              <h2>
                {{ state.vehicle.year }} {{ state.vehicle.make }}
                {{ state.vehicle.model }}
              </h2>
              <h4>Miles: {{ state.vehicle.mileage }}</h4>
              <h4>VIN: {{ state.vehicle.vin }}</h4>
              <i
                class="fa fa-camera"
                aria-hidden="true"
                type="button"
                data-toggle="modal"
                data-target="#upload-image"
                v-if="state.user.email===state.user.email"
              ></i>
              <UploadImageModal />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img :src="state.vehicle.images" alt="" />
      </div>
      <div class="row p-3">
        <div class="col-6">
          <router-link
            :to="{
              name: 'MaintenanceHistoryPage',
              params: { id: state.vehicle.id },
            }"
          >
            <button type="button" id="tile" class="btn btn-primary">
              Maintenance
            </button>
          </router-link>
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
          <button type="button" id="tile" class="btn btn-primary">Tires</button>
        </div>
        <div class="col-6">
          <button type="button" id="tile" class="btn btn-primary">
            Brakes
          </button>
        </div>
      </div>
      <div class="row p-3">
        <div class="col-6">
          <router-link :to="{ name: 'ActiveVehiclePage', params: { id: state.vehicle.id } }">
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
import { logger } from '../services/utils/Logger'
import router from '../router'
export default {
  name: 'YourVehiclePage',
  props: {
    vehicle: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      vehicle: computed(() => AppState.activeVehicle)
    })
    const route = useRoute()
    onMounted(async () => {
      await vehicleService.getVehicle(route.params.id)
      logger.log(AppState.activeVehicle)
    })
    return {
      state,
      route,
      router,
      async archiveVehicle() {
        if (confirm('Archive Vehicle?')) {
          await vehicleService.archiveVehicle(route.params.id)
          router.push({ name: 'YourGaragePage' })
        }
      }
    }
  },
  components: {}

}

</script>
<style scoped>
#tile {
  width: 200px;
  height: 200px;
  border-radius: 35px;
}
#carPic {
  height: 353px;
  width: 673px;
}
</style>
