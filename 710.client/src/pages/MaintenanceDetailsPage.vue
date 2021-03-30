// ** all Maintenance wihtin a single instance detailed **
<template>
  <div class="maintenance-details-page">
    <div class="row">
      <div class="col-12 text-center">
        <h2>Maintenance Details Page</h2>
        <div>
          <button
            type="submit"
            class="btn btn-primary"
            data-target="#edit-maintenance"
            data-toggle="modal"
            aria-hidden="true"
          >
            <i class="fa fa-plus-square" aria-hidden="true"></i>
          </button>
        </div>
        <div>{{ state.activeMaintenance }}</div>
      </div>
    </div>
    <EditMaintenanceModal />
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

    onMounted(async () => {
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
</style>
