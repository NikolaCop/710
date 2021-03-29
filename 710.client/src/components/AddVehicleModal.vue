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
            <form @submit.prevent="createVehicle">
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
                  v-model="state.newVehicle.vin"
                />
              </div>
              <div class="modal-footer justify-content-center">
                <button type="submit" class="btn btn-success">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
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
      user: computed(() => AppState.user),
      newVehicle: {}
    })
    return {
      state,
      async createVehicle() {
        try {
          $('#add-vehicle').modal('hide')
          state.newVehicle.creatorId = state.user._id
          state.newVehicle.owner = state.user._id
          const vehicleId = await vehicleService.createVehicle(state.newVehicle)
          router.push({ name: 'ActiveVehiclePage', params: { id: vehicleId } })
          state.newVehicle = {}
          logger.log(AppState.vehicles)
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {}
}
</script>
