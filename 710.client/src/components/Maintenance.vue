<template>
  <tbody class="Maintenance">
    <tr>
      <router-link :to="{name: 'MaintenanceDetailsPage', params: { id: maintenance.id }}">
        <th scope="col">
          {{ maintenance.name }}
        </th>
      </router-link>
      <td scope="col">
        {{ maintenance.mileageAtDos }}
      </td>
      <td scope="col">
        {{ convertDate(maintenance.dos) }}
      </td>
    </tr>
  </tbody>
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
      state,
      convertDate(updatedAt) {
        const dateYear = updatedAt.slice(0, 4)
        const dateMonth = updatedAt.slice(5, 7)
        const dateDay = updatedAt.slice(8, 10)
        return dateMonth + '/' + dateDay + '/' + dateYear
      }
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
