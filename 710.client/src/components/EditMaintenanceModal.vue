<template>
  <div class="EditMaintenanceModal">
    <div
      class="modal fade"
      id="edit-maintenance"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Edit Maintenance
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
            <form @submit.prevent="editMaintenance">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="form-control"
                  placeholder="Edit Maintenance..."
                  aria-describedby="helpId"
                  v-model="state.activeMaintenance.name"
                />
              </div>
              <div class="form-group">
                <input
                  type="date"
                  name="DOS"
                  id="DOS"
                  class="form-control"
                  placeholder="Edit Date of Service..."
                  aria-describedby="helpId"
                  v-model="state.activeMaintenance.dos"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="mileageAtDos"
                  id="mileageAtDos"
                  class="form-control"
                  placeholder="Edit Mileage at Date of Service..."
                  aria-describedby="helpId"
                  v-model="state.activeMaintenance.mileageAtDos"
                />
              </div>

              <div class="form-group">
                <input
                  type="number"
                  name="mileageDue"
                  id="mileageDue"
                  class="form-control"
                  placeholder="Mileage Due..."
                  aria-describedby="helpId"
                  v-model="state.activeMaintenance.mileageDue"
                />
              </div>
              <div class="form-group">
                <input
                  type="date"
                  name="dateDue"
                  id="dateDue"
                  class="form-control"
                  placeholder="Date Due..."
                  aria-describedby="helpId"
                  v-model="state.activeMaintenance.dateDue"
                />
              </div>
              <div class="row p-4">
                <button type="button" class="btn btn-outline-primary " @click="state.activeMaintenance.additionalInfo.push({text:''})">
                  Add Additional Information...
                </button>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="additionalInfo"
                  id="additionalInfo"
                  class="form-control mt-2"
                  placeholder="Enter Any Additional Information..."
                  aria-describedby="helpId"
                  v-for="info in state.activeMaintenance.additionalInfo"
                  :key="info"
                  v-model="info.text"
                />
              </div>
              <div class="modal-footer justify-content-center">
                <button class="btn btn-primary" @click="editMaintenance">
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
export default {
  name: 'EditMaintenanceModal',
  setup() {
    const state = reactive({
      activeMaintenance: computed(() => AppState.activeMaintenance)
    })
    return {
      state,
      async editMaintenance() {
        try {
          $('#edit-maintenance').modal('hide')
          const maintenance = { name: state.activeMaintenance.name, dos: state.activeMaintenance.dos, mileageAtDos: state.activeMaintenance.mileageAtDos, additionalInfo: state.activeMaintenance.additionalInfo, vehicleID: state.activeMaintenance.id, mileageDue: state.activeMaintenance.mileageDue, dateDue: state.activeMaintenance.dateDue }
          await maintenanceService.editMaintenance(state.activeMaintenance.id, maintenance)
        } catch (error) {
          logger.log(error)
        }
      }

    }
  },
  components: {}
}
</script>
<style scoped>
#additionalInfo{
  height: 50px;
}
</style>
