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
            <h5 class="modal-title">Add Maintenance</h5>
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
import { useRouter } from 'vue-router'
import { maintenanceService } from '../services/MaintenanceService'
import $ from 'jquery'
import { logger } from '../services/utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'AddMaintenanceModal',
  setup() {
    const router = useRouter()
    const state = reactive({
      activeVehicle: computed(() => AppState.activeVehicle),
      newMaintenance: {}
    })
    return {
      state,
      async addMaintenance(id) {
        try {
          const maintenance = { name: state.newMaintenance.name, dos: state.newMaintenance.dos, mileageAtDos: state.newMaintenance.mileageAtDos, additionalInfo: state.newMaintenance.additionalInfo, vehicleID: state.activeVehicle.id }
          await maintenanceService.createMaintenance(maintenance)
          $('#add-maintenance').modal('hide')
          state.newMaintenance.user = state.user
          router.push({ name: 'MaintenanceHistoryPage', params: { id: id } })
          state.newMaintenance = {}
          logger.log(AppState.maintenance)
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {}
}
</script>
