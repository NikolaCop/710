<template>
  <div class="container-fluid maintenance-large">
    <div class="row justify-content-center">
      <div class="col-9 text-center card-warning bg-warning shadow-lg mt-4">
        <h5><span class="badge badge-primary mt-2">Files</span></h5>
        <Records
          v-for="record in state.records"
          :key="record.id"
          :record="record"
        />
      </div>
    </div>
  </div>
  <div class="records-page container-fluid maintenance">
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h2>Files</h2>
        <button
          type="submit"
          class="btn btn-primary"
          data-target="#add-record"
          data-toggle="modal"
          aria-hidden="true"
        >
          <i class="fa fa-plus-square" aria-hidden="true"></i>
        </button>
      </div>
      <AddRecordModal />
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-10">
        <table class="text-light table" id="recordsTable">
          <thead>
            <tr>
              <th scope="col">
                Title
              </th>
              <th scope="col">
                Description
              </th>
              <th scope="col">
                Date
                <i
                  type="button"
                  class="fas fa-sort ml-1"
                  @click="sortByDate"
                ></i>
              </th>
              <th scope="col">
                View Record
              </th>
              <!-- make photos an icon that is clickable, that will pop up modal with all images -->
            </tr>
          </thead>
          <Records
            v-for="record in state.records"
            :key="record.id"
            :record="record"
          />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { recordsService } from '../services/RecordsService'
import { useRoute } from 'vue-router'
export default {
  name: 'RecordsDetails',
  props: [],
  setup() {
    const route = useRoute()
    const state = reactive({
      maintenance: computed(() => AppState.activeMaintenance),
      records: computed(() => AppState.records),
      sortDate: 'none'
    })
    onMounted(async() => {
      await recordsService.getRecords(route.params.id)
    })
    return {
      state,
      sortByDate() {
        if (state.sortDate === 'none') {
          state.records.sort(function(a, b) { return new Date(a.createdAt) - new Date(b.createdAt) })
          state.sortDate = 'first'
        } else if (state.sortDate === 'first') {
          state.records.sort(function(a, b) { return new Date(b.createdAt) - new Date(a.createdAt) })
          state.sortDate = 'last'
        } else {
          recordsService.getRecords(state.maintenance.id)
          state.sortDate = 'none'
        }
      }
    }
  },
  components: {}
}
</script>

<style scoped>
table,
td {
  border: 1px solid rgb(255, 255, 255);
}
th:nth-child(4) {
  border-right: 1px solid rgb(255, 255, 255);
}
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
.card-warning{
  border-radius: 2rem;
}
</style>
