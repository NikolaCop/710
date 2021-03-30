<template>
  <div class="AddMaintenanceModal">
    <div
      class="modal fade"
      id="add-maintenance"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Add Maintenance
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
            <form @submit.prevent="addMaintenance">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  placeholder="Enter Maintenance..."
                  aria-describedby="helpId"
                  v-model="state.newMaintenance.name"
                />
              </div>
              <div class="form-group">
                <input
                  type="date"
                  name="DOS"
                  id="DOS"
                  class="form-control"
                  placeholder="Enter Date of Service..."
                  aria-describedby="helpId"
                  v-model="state.newMaintenance.dos"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="mileageAtDos"
                  id="mileageAtDos"
                  class="form-control"
                  placeholder="Mileage at Date of Service..."
                  aria-describedby="helpId"
                  v-model="state.newMaintenance.mileageAtDos"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="additionalInfo"
                  id="additionalInfo"
                  class="form-control"
                  placeholder="Enter Additional Information..."
                  aria-describedby="helpId"
                  v-model="state.newMaintenance.additionalInfo"
                />
              </div>
              <div class="modal-footer justify-content-center">
                <button class="btn btn-primary" type="submit">
                  <i class="fa fa-plus-square" aria-hidden="true"></i>
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
import { computed, reactive } from 'vue'
import { maintenanceService } from '../services/MaintenanceService'
import $ from 'jquery'
import { logger } from '../services/utils/Logger'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
export default {
  name: 'AddMaintenanceModal',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      activeVehicle: computed(() => AppState.activeVehicle),
      newMaintenance: {}
    })
    const route = useRoute()
    return {
      state,
      route,
      async addMaintenance() {
        try {
          $('#add-maintenance').modal('hide')
          state.newMaintenance.creator = state.user
          // state.newMaintenance.creatorId = state.user._id
          state.newMaintenance.vehicleID = route.params.id
          logger.log(state.newMaintenance)
          await maintenanceService.createMaintenance(state.newMaintenance)
          state.newMaintenance = {}
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {}
}
</script>
