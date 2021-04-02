// ** all Maintenance wihtin a single instance detailed **
<template>
  <AddRecordModal />
  <div class="container-fluid bg-dark maintenance-large">
    <div class="row mt-5">
      <div class="col-12 text-center">
        <h2 class="text-light mb-3">
          {{ state.activeMaintenance.name }}
        </h2>
        <button
          type="submit"
          class="btn btn-outline-secondary"
          data-target="#edit-maintenance"
          data-toggle="modal"
          aria-hidden="true"
          v-if="state.user.email === state.user.email"
        >
          <i class="fa fa-pencil text-light" aria-hidden="true"></i>
        </button>
        <button
          type="submit"
          class="btn btn-outline-primary ml-3"
          data-target="#add-record"
          data-toggle="modal"
          aria-hidden="true"
        >
          <i class="fa fa-plus-square text-light" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="row justify-content-center mt-4">
      <div class="col-10">
        <div class="card bg-warning p-2 card-info">
          <div class="row justify-content-center">
            <div class="col-9 m-2 p-3 bg-warning shadow-lg text-center text-info card-warning">
              <div class="col-12 mt-1 mb-3">
                <h5><span class="badge badge-danger">Details</span></h5>
              </div>
              <h6 class="mt-2">
                Date of Service:
                {{ new Date(state.activeMaintenance.dos).toLocaleDateString() }}
              </h6>
              <h6 class="mt-2">
                Mileage at Service: {{ state.activeMaintenance.mileageAtDos }}
              </h6>
              <h6 v-if="state.activeMaintenance.mileageDue" class="mt-2">
                Recommended Change (Mileage):
                {{ state.activeMaintenance.mileageDue }}
              </h6>
              <h6 v-if="state.activeMaintenance.dateDue" class="mt-2">
                Recommended Change (Date): {{ state.activeMaintenance.dateDue }}
              </h6>
              <h6 v-for="info in state.activeMaintenance.additionalInfo"
                  :key="info"
                  class="mt-2"
              >
                Additional Info: {{ info.text }}
              </h6>
            </div>
            <RecordsDetails />
          </div>
        </div>
      </div>
    </div>
  </div>
  <EditMaintenanceModal />
  <div class="container-fluid bg-dark text-white maintenance">
    <div class="maintenance-details-page">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="text-primary p-4">
            Maintenance Details Page
          </h1>
          <div>
            <button
              type="submit"
              class="btn btn-primary"
              data-target="#edit-maintenance"
              data-toggle="modal"
              aria-hidden="true"
              v-if="state.user.email === state.user.email"
            >
              <i class="fa fa-plus-square" aria-hidden="true"></i>
            </button>
          </div>
          <div class="col-12 p-3">
            <div>Service: {{ state.activeMaintenance.name }}</div>
            <div>
              Date of Service:
              {{ new Date(state.activeMaintenance.dos).toLocaleDateString() }}
            </div>
            <div>
              Mileage at Service: {{ state.activeMaintenance.mileageAtDos }}
            </div>
            <div>
              Recommended Change (Mileage):
              {{ state.activeMaintenance.mileageDue }}
            </div>
            <div>
              Recommended Change (Date): {{ state.activeMaintenance.dateDue }}
            </div>
          </div>
          <div class="col-12">
            <h4 class="text-primary">
              Additional Info:
            </h4>
          </div>
          <div
            class="col-12"
            v-for="info in state.activeMaintenance.additionalInfo"
            :key="info"
          >
            {{ info.text }}
          </div>
        </div>
      </div>
    </div>
    <RecordsDetails />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { maintenanceService } from '../services/MaintenanceService'
import { useRoute } from 'vue-router'
export default {
  name: 'MaintenanceDetailsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      maintenance: computed(() => AppState.maintenance),
      activeMaintenance: computed(() => AppState.activeMaintenance),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    })

    onMounted(async() => {
      await maintenanceService.getMaintenanceById(route.params.id)
    })
    return {
      state,
      route
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
@media (min-width: 576px) {
.maintenance-large{
  display: none;
}
}
@media (max-width: 576px) {
.maintenance{
  display: none;
}
}
.card-info{
  border-radius: 2rem;
}
.card-warning{
  border-radius: 2rem;
}
</style>
