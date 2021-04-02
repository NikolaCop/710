<template>
  <div class="col-10 col-sm-10 col-md-8 col-lg-7 col-xl-4 mt-4 animate__animated animate__fadeInRight">
    <router-link :to="{name: 'YourVehiclePage', params: { id: vehicle.id }}">
      <div class="card bg-primary p-4 card-vehicle-rounded car">
        <div class="row justify-content-end">
          <div class="col-2">
            <i class="fas fa-edit" type="button" id="change-avatar" data-toggle="modal" :data-target="'#change-avatar' + vehicle.id"></i>
            <ChangeAvatarModal :vehicle="vehicle" />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-7 text-center">
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
import { vehicleService } from '../services/VehicleService'
export default {
  name: 'Vehicle',
  props: {
    vehicle: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      vehicles: computed(() => AppState.vehicles),
      marketplace: computed(() => AppState.marketplace)
    })
    return {
      state,
      async buyVehicle() {
        console.log(props.vehicle.ownerId)
        console.log(props.vehicle)
        console.log(props.vehicle.id)
        const res = await vehicleService.buyVehicle(props.vehicle, props.vehicle.id)
        console.log(res)
      }
    }
  },
  components: {}
}
</script>
<style scoped>
#change-avater {
  z-index: 100;
}
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
