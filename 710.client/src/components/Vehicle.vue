<template>
  <div class="col-10 col-sm-10 col-md-8 col-lg-7 col-xl-4 mt-4 animate__animated animate__fadeInRight">
    <router-link :to="{name: 'YourVehiclePage', params: { id: vehicle.id }}">
      <div class="card bg-primary p-4 card-vehicle-rounded">
        <div class="row justify-content-center">
          <div class="col-8 text-center">
            <img src="../assets/img/porsche.png" class="img-vehicle card-img-top img-fluid animate__animated animate__fadeInLeft animate__delay-0.75s">
          </div>
          <div class="col-10 text-center animate__animated animate__fadeInUp animate__delay-0.75s">
            <h6 class="text-light">
              {{ vehicle.year }} {{ vehicle.make }} {{ vehicle.model }}
            </h6>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Vehicle',
  props: {
    vehicle: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      vehicles: computed(() => AppState.vehicles)
    })
    return {
      state
    }
  },
  components: {}
}
</script>
<style scoped>
#carPicButton {
  width: 530px;
  height: 280px;
}
.card-vehicle-rounded{
  border-radius: 3rem;
}
.car:hover{
  transform: translateY(-5px);
  cursor: pointer;
}
.car{
  transition: all .2s;
}
</style>
