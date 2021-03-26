<template>
  <div class="AddVehicleModal">
    <div
      class="modal fade"
      id="add-vehicle"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Add a Vehicle
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addVehicle">
              <div class="form-group">
                <input
                  type="text"
                  name="make"
                  id="make"
                  class="form-control"
                  placeholder="Enter Make..."
                  aria-describedby="helpId"
                  v-model="state.newVehicle.make"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="model"
                  id="model"
                  class="form-control"
                  placeholder="Enter Model..."
                  aria-describedby="helpId"
                  v-model="state.newVehicle.model"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="year"
                  id="year"
                  class="form-control"
                  placeholder="Enter Year..."
                  aria-describedby="helpId"
                  v-model="state.newVehicle.year"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="mileage"
                  id="mileage"
                  class="form-control"
                  placeholder="Enter mileage..."
                  aria-describedby="helpId"
                  v-model="state.newVehicle.mileage"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="VIN"
                  id="VIN"
                  class="form-control"
                  placeholder="Enter VIN..."
                  aria-describedby="helpId"
                  v-model="state.newVehicle.VIN"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer justify-content-center">
            <button class="btn btn-success" @click="addVehicle">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { vehicleService } from '../services/VehicleService'
import $ from 'jquery'
import { logger } from '../services/utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'AddVehicleModal',
  setup() {
    const router = useRouter()
    const state = reactive({
      newVehicle: {}
    })
    return {
      state,
      async addVehicle() {
        try {
          const vehicleId = await vehicleService.createVehicle(state.newVehicle)
          $('#add-vehicle').modal('hide')
          state.newVehicle.user = state.user
          router.push({ name: 'ActiveVehiclePage', params: { id: vehicleId } })
          state.newVehicle = {}
          logger.log(AppState.vehicle)
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {}
}
</script>
