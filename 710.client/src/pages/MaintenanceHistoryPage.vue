// **everything done to the vehilce in regards to maintenance**
<template>
  <div class="container-fluid bg-dark text-white">
    <div class="maintenance-history-page">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Maintenance History Page</h2>
          <button
            type="submit"
            class="btn btn-primary"
            data-target="#add-maintenance"
            data-toggle="modal"
            aria-hidden="true"
          >
            <i class="fa fa-plus-square" aria-hidden="true"></i>
          </button>
          <div>
            <AddMaintenanceModal />
          </div>
        </div>
        <Maintenance
          v-for="maintenance in state.maintenance"
          :key="maintenance.id"
          :maintenance="maintenance"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { maintenanceService } from '../services/MaintenanceService'
import { AppState } from '../AppState'
export default {
  name: 'MaintenanceHistoryPage',
  setup() {
    const state = reactive({
      maintenance: computed(() => AppState.maintenance),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    })

    onMounted(async () => {
      await maintenanceService.getAllMaintenance()
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
