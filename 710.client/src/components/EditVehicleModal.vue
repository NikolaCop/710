<template>
  <div class="edit-vehicle-modal">
    <div
      class="modal fade"
      id="edit-vehicle"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Edit vehicle
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
            <form @submit.prevent="editVehicle">
              <div class="form-group">
                <input
                  type="text"
                  name="year"
                  id="year"
                  class="form-control"
                  placeholder="Enter Year..."
                  aria-describedby="helpId"
                  v-model="state.vehicle.year"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="make"
                  id="make"
                  class="form-control"
                  placeholder="Enter make..."
                  aria-describedby="helpId"
                  v-model="state.vehicle.make"
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
                  v-model="state.vehicle.model"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="mileage"
                  id="mileage"
                  class="form-control"
                  placeholder="Enter Mileage..."
                  aria-describedby="helpId"
                  v-model="state.vehicle.mileage"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="vin"
                  id="vin"
                  class="form-control"
                  placeholder="Enter VIN..."
                  aria-describedby="helpId"
                  v-model="state.vehicle.vin"
                />
              </div>
              <div class="form-group">
                <label class="text-dark" for="avatarSelection">Avatar</label>
                <div class="row d-flex justify-content-around">
                  <div class="col-5 d-flex align-items-center">
                    <select multiple class="form-control row d-flex" v-model="state.selectedImage">
                      <option :value="avatar" class="col-12" v-for="avatar in state.avatars" :key="avatar">
                        {{ avatar.replace('.png' || '.jpg', '') }}
                      </option>
                    </select>
                  </div>
                  <div class="col-5 justify-content-center">
                    <img :src="'/avatars/' + state.selectedImage" class="img-fluid" alt="">
                  </div>
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="submit" class="btn btn-success">
                  Edit
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
import { vehicleService } from '../services/VehicleService'
import $ from 'jquery'
import { AppState } from '../AppState'
export default {
  name: 'EditVehicleModal',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      vehicle: computed(() => AppState.activeVehicle),
      avatars: AppState.avatars,
      selectedImage: ''
    })
    return {
      state,
      async editVehicle(e) {
        $('#edit-vehicle').modal('hide')
        const form = e.target
        if (form.mileage.value === '' || null) {
          return state.vehicle.mileage
        } else if (form.mileage.value >= state.vehicle.mileage) {
          state.vehicle.mileage = form.mileage.value
        } else {
          window.alert('Mileage Edit Must Be An Increase')
        }
        state.vehicle.avatar = state.selectedImage.toString()
        await vehicleService.editVehicle(state.vehicle.id, state.vehicle)
      }
    }
  }
}
</script>
