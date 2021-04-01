// ** all Maintenance wihtin a single instance detailed **
<template>
  <div class="container-fluid bg-dark text-white">
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
              v-if="state.user.email===state.user.email"
            >
              <i class="fa fa-plus-square" aria-hidden="true"></i>
            </button>
          </div>
          <div class="col-12 p-3">
            <div>Service: {{ state.activeMaintenance.name }}</div>
            <div>Date of Service: {{ new Date(state.activeMaintenance.dos).toLocaleDateString() }}</div>
            <div>Mileage at Service: {{ state.activeMaintenance.mileageAtDos }}</div>
            <div>Recommended Change (Mileage): {{ state.activeMaintenance.mileageDue }} </div>
            <div>Recommended Change (Date): {{ state.activeMaintenance.dateDue }}</div>
          </div>
          <div class="col-12">
            <h4 class="text-primary">
              Additional Info:
            </h4>
          </div>
          <div class="col-12" v-for="info in state.activeMaintenance.additionalInfo" :key="info">
            {{ info.text }}
          </div>
        </div>
        <EditMaintenanceModal />
      </div>
      <router-link
        :to="{
          name: 'RecordsPage',
          params: { id: state.activeMaintenance.id },
        }"
      >
        <h1>Records</h1>
      </router-link>
    </div>
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
</style>
