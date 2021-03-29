<template>
  <div class="Maintenance">
    <div class="row">
      <div class="col-12 text-center">
        <div>
          <router-link
            :to="{
              name: 'MaintenanceDetailsPage',
              params: { id: maintenance.id },
            }"
          >
            <h4>
              {{ maintenance.name }}
            </h4>
          </router-link>
        </div>
        <div>
          <h4>
            {{ maintenance.DOS }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
// import { maintenanceService } from '../services/MaintenanceService'
// import { logger } from '../services/utils/Logger'
export default {
  name: 'Maintenance',
  props: {
    maintenance: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      maintenance: computed(() => AppState.maintenance)
    })
    return {
      state
      // async editMaintenance(event) {
      //   try {
      //     await maintenanceService.editMaintenance(state.maintenance.id, { maintenance: event.target.innerText })
      //     logger.log('editing title')
      //   } catch (error) {
      //     logger.log(error)
      //   }
      // }
    }
  },
  components: {}
}
</script>
