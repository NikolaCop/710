<template>
  <div class="container-fluid bg-dark">
    <div class="row mt-4 justify-content-center">
      <div class="col-10 text-center">
        <div class="vehicle-rounded">
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <h6 class="text-light pam-size">
                {{ state.vehicle.year }} {{ state.vehicle.make }}
                {{ state.vehicle.model }}
              </h6>
            </div>
            <div class="col-7 col-sm-7 col-md-6 col-lg-5 col-xl-4 text-center">
              <img :src="'/avatars/' + state.vehicle.avatar" class="card-img-top img-fluid mt-2 animate__animated animate__fadeInLeft">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-10">
              <div class="second-car-rounded">
                <div class="row justify-content-center">
                  <div class="col-9 p-2 text-center">
                    <div class="row justify-content-center">
                      <div class="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8">
                        <div class="row justify-content-center">
                          <div class="col-4">
                            <button
                              class="btn btn-outline-primary button animate__animated animate__fadeInLeft"
                            >
                              <i
                                class="fa fa-pencil text-light pam-size mt-2 mb-2"
                                data-toggle="modal"
                                data-target="#edit-vehicle"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </div>
                          <EditVehicleModal />
                          <div class="col-4">
                            <button
                              class="btn btn-outline-danger button animate__animated animate__fadeInRight"
                            >
                              <i
                                class="fa fa-file-archive-o pam-size text-light mt-2 mb-2"
                                @click="archiveVehicle"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </div>
                          <div class="col-4">
                            <button
                              class="btn btn-outline-secondary button animate__animated animate__fadeInUp"
                            >
                              <i
                                class="fa fa-camera text-light pam-size"
                                aria-hidden="true"
                                type="button"
                                data-toggle="modal"
                                data-target="#upload-image"
                                v-if="state.user.email === state.user.email"
                              ></i>
                            </button>
                            <UploadImageModal />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-around mt-3">
      <div class="col-10 col-sm-10 col-md-8 col-lg-6 text-center">
        <div
          class="card shadow-lg maintenance-card p-2 bg-primary animate__animated animate__fadeInUp"
        >
          <h6 class="text-light mt-1 pam-size">
            Miles: {{ state.vehicle.mileage }} <span class="ml-4">VIN: {{ state.vehicle.vin }}</span>
          </h6>
        </div>
      </div>
    </div>
    <div class="row mt-3 justify-content-center">
      <div class="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-6">
        <div class="card card-holding-router-links p-2 bg-warning shadow-lg">
          <div class="row justify-content-around mt-3">
            <div class="col-11 text-center">
              <div
                class="card shadow-lg maintenance-card p-2 bg-info animate__animated animate__fadeInLeft"
              >
                <router-link
                  :to="{
                    name: 'MaintenanceHistoryPage',
                    params: { id: state.vehicle.id },
                  }"
                >
                  <h6 class="text-light mt-1 pam-size">
                    Maintenance
                  </h6>
                </router-link>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-2">
            <div
              class="col-5 card blank-size text-center bg-info mr-2 animate__animated animate__fadeInLeft"
            >
              <h6 class="text-light"></h6>
            </div>
            <div
              class="col-2 card blank-size text-center bg-light ml-2 animate__animated animate__fadeInLeft"
            >
              <h6 class="text-light"></h6>
            </div>
          </div>
          <div class="row justify-content-around mt-2">
            <div class="col-11 text-center">
              <div v-if="state.vehicle.selling === false" class="card shadow-lg  maintenance-card p-2 bg-danger animate__animated animate__fadeInRight" @click="sellVehicle">
                <h6 class="text-light mt-1 pam-size">
                  Sell Vehicle
                </h6>
              </div>
              <div v-else class="card shadow-lg  maintenance-card p-2 bg-danger animate__animated animate__fadeInRight" @click="stopSellingVehicle">
                <h6 class="text-light mt-1 pam-size">
                  Stop Selling Vehicle
                </h6>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-2">
            <div
              class="col-2 card blank-size text-center bg-light mr-2 animate__animated animate__fadeInRight"
            >
              <h6 class="text-light"></h6>
            </div>
            <div
              class="col-5 card blank-size text-center bg-info ml-2 animate__animated animate__fadeInRight"
            >
              <h6 class="text-light"></h6>
            </div>
          </div>
          <div class="row justify-content-around mt-2">
            <div class="col-11 text-center">
              <div
                class="card shadow-lg maintenance-card p-2 bg-primary animate__animated animate__fadeInUp"
              >
                <router-link :to="{ name: 'MarketplacePage' }">
                  <h6 class="text-light mt-1 pam-size">
                    Marketplace
                  </h6>
                </router-link>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-2 mb-2">
            <div
              class="col-3 blank-size card shadow-sm text-center bg-light mr-2 animate__animated animate__fadeInLeft animate__delay-.5s"
            >
              <h6 class="text-light"></h6>
            </div>
            <div
              class="col-1 card blank-size shadow-sm text-center bg-secondary ml-1 mr-2 animate__animated animate__fadeInRight animate__delay-.75s"
            >
              <h6 class="text-light"></h6>
            </div>
            <div
              class="col-3 card shadow-sm blank-size text-center ml-1 bg-info animate__animated animate__fadeInUp animate__delay-.8s"
            >
              <h6 class="text-light"></h6>
            </div>
            <div
              class="col-1 card shadow-sm blank-size text-center ml-2 bg-dark animate__animated animate__fadeInDown animate__delay-1.25s"
            >
              <h6 class="text-light"></h6>
            </div>
          </div>
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
import 'animate.css'
// import { animationService } from '../services/AnimationService'
export default {
  name: 'YourVehiclePage',
  props: {
    vehicle: { type: Object, required: true }
  },
  setup() {
    const Swal = require('sweetalert2')
    const state = reactive({
      user: computed(() => AppState.user),
      vehicle: computed(() => AppState.activeVehicle)
    })
    const route = useRoute()
    onMounted(async() => {
      await vehicleService.getVehicle(route.params.id)
      logger.log(AppState.activeVehicle)
    })
    return {
      state,
      route,
      router,
      async archiveVehicle() {
        try {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, archive it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Archive!',
                'Your file has been archived.',
                'success'
              )
              vehicleService.archiveVehicle(route.params.id)
              router.push({ name: 'YourGaragePage' })
            }
          })
        } catch (error) {

        }
      },
      async sellVehicle() {
        state.vehicle.selling = true
        await vehicleService.editVehicle(state.vehicle.id, state.vehicle)
        router.push({ name: 'MarketplacePage' })
      },
      async stopSellingVehicle() {
        state.vehicle.selling = false
        await vehicleService.editVehicle(state.vehicle.id, state.vehicle)
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
.vehicle-rounded {
  border-radius: 1rem;
}
.second-car-rounded {
  border-radius: 1rem;
}
.button {
  border-radius: 0.75rem;
}
.maintenance-card {
  border-radius: 1rem;
}
.card-holding-router-links {
  border-radius: 0.75rem;
}
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}
/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}
/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
@media (min-width: 576px) {
  .pam-size {
    font-size: 1.25rem;
  }
}
@media (min-width: 767.98px) {
  .pam-size {
    font-size: 1.5rem;
  }
}
@media (min-width: 991.98px) {
  .pam-size {
    font-size: 2rem;
  }
}
@media (min-width: 576px) {
  .blank-size {
    height: 1.25rem;
    border-radius: 4rem;
  }
}
@media (min-width: 767.98px) {
  .blank-size {
    height: 1.5rem;
    border-radius: 4rem;
  }
}
@media (min-width: 991.98px) {
  .blank-size {
    height: 1.3rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    border-radius: 4rem;
  }
}
  .car{
    transition: all .2s;
  }
.car:hover{
  transform: translateY(-5px);
  cursor: pointer;
}
</style>
