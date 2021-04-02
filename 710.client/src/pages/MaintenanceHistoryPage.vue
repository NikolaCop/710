// **everything done to the vehilce in regards to maintenance**
<template>
  <div class="container-fluid bg-dark text-white maintenance-large">
    <div class="maintenance-history-page">
      <div class="row mt-4">
        <div class="col-12 text-center">
          <h4>Maintenance History</h4>
          <button
            type="submit"
            class="btn btn-outline-primary mt-3"
            data-target="#add-maintenance"
            data-toggle="modal"
            aria-hidden="true"
            v-if="state.user.email === state.user.email"
          >
            <i class="fa fa-plus-square text-light" aria-hidden="true"></i>
            <span class="text-light ml-2">Add Maintenance</span>
          </button>
          <div></div>
        </div>
      </div>
      <div class="row justify-content-center mt-1">
        <Maintenance
          v-for="maintenance in state.maintenance"
          :key="maintenance.id"
          :maintenance="maintenance"
        />
      </div>
    </div>
  </div>
  <AddMaintenanceModal />
  <div class="container-fluid bg-dark text-white maintenance">
    <div class="maintenance-history-page">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Maintenance History Page</h2>
          <div>
            <button
              type="submit"
              class="btn btn-outline-primary mt-3"
              data-target="#add-maintenance"
              data-toggle="modal"
              aria-hidden="true"
              v-if="state.user.email === state.user.email"
            >
              <i class="fa fa-plus-square text-light" aria-hidden="true"></i>
              <span class="text-light ml-2">Add Maintenance</span>
            </button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-10">
          <table class="table text-light" id="maintenanceTable">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Mileage at Service</th>
                <th scope="col">Date of Service</th>
              </tr>
            </thead>
            <Maintenance
              v-for="maintenance in state.maintenance"
              :key="maintenance.id"
              :maintenance="maintenance"
            />
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { vehicleService } from '../services/VehicleService'
import { useRoute } from 'vue-router'
import Maintenance from '../components/Maintenance.vue'
export default {
  name: 'MaintenanceHistoryPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      maintenance: computed(() => AppState.maintenance),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    })

    onMounted(async () => {
      await vehicleService.getAllMaintenanceByVehicleId(route.params.id)
    })
    return {
      state

    }
  },
  components: { Maintenance }
}
</script>

<style lang="scss" scoped>
table,
td {
  border: 1px solid rgb(255, 255, 255);
}
@media (min-width: 576px) {
  .maintenance-large {
    display: none;
  }
}
@media (max-width: 576px) {
  .maintenance {
    display: none;
  }
}
</style>
