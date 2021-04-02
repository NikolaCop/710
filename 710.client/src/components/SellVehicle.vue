<template>
  <div class="col-10 col-sm-10 col-md-8 col-lg-7 col-xl-4 mt-4  animate__animated animate__fadeInRight">
    <div class="card bg-primary p-4 card-vehicle-rounded">
      <div class="row justify-content-center">
        <div class="col-8 text-center">
          <img src="../assets/img/porsche.png" class="img-vehicle card-img-top img-fluid animate__animated animate__fadeInLeft animate__delay-0.75s">
        </div>
        <div class="col-10 text-center animate__animated animate__fadeInUp animate__delay-0.75s">
          <h6 class="text-light text-size" @click="buyVehicle">
            <span class="badge badge-info p-2 mr-1" @click="buyVehicle">Buy</span> {{ vehicle.year }} {{ vehicle.make }} {{ vehicle.model }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { vehicleService } from '../services/VehicleService'
import router from '../router'
export default {
  name: 'SellVehicle',
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
        await vehicleService.buyVehicle(props.vehicle.id, props.vehicle)
        router.push({ name: 'YourGaragePage', params: { id: props.vehicle.id } })
      }
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
.text-size{
  font-size: .8rem;
}
</style>
