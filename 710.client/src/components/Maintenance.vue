<template>
  <tbody class="maintenance">
    <tr>
      <th scope="col">
        <router-link :to="{name: 'MaintenanceDetailsPage', params: { id: maintenance.id }}">
          {{ maintenance.name }}
        </router-link>
      </th>
      <td scope="col">
        {{ maintenance.mileageAtDos }}
      </td>
      <td scope="col">
        {{ convertDate(maintenance.dos) }}
      </td>
    </tr>
  </tbody>
  <div>
  </div>
  <div class="container-fluid maintenance-large">
    <div class="row justify-content-center mt-4">
      <div class="col-11 text-center">
        <div class="card bg-primary card-warning mt-2">
          <div class="row justify-content-center">
            <div class="col-11">
              <div class="card bg-info card-info text-light shadow-lg">
                <h6 class="maintenance-name text-light ml-2">
                  <router-link :to="{name: 'MaintenanceDetailsPage', params: { id: maintenance.id }}">
                    <span class="text-light mr-3">{{ maintenance.name }}</span> <span class="text-warning">{{ convertDate(maintenance.dos) }}</span>
                  </router-link>
                </h6>
              </div>
            </div>
          </div>
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

<style scoped>
@media (max-width: 576px) {
.maintenance{
  display: none;
}
}
@media (min-width: 576px) {
.maintenance-large{
  display: none;
}
}
table,
td {
  border: 1px solid rgb(255, 255, 255);
}
th:nth-child(4) {
  border-right: 1px solid rgb(255, 255, 255);
}
table,
td {
  border: 1px solid rgb(255, 255, 255);
}
th:nth-child(4) {
  border-left: 1px solid rgb(255, 255, 255);
}
.card-warning{
  height: 9.3vh;
  border-radius: 1rem;
}
.card-info{
  height: 6vh;
  margin-top: .75rem;
  border-radius: 1rem;
}
.maintenance-name{
  margin-top: .75rem;
}
</style>
