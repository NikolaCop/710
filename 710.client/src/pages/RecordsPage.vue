<template>
  <div class="records-page container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <h2>Records Page</h2>
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
        <table class="table" id="recordsTable">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Photos</th>
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
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'RecordsPage',
  props: [],
  setup() {
    const state = reactive({
      maintenance: computed(() => AppState.activeMaintenance),
      records: computed(() => AppState.records)
    })
    return {
      state
    }
  },
  components: {}
}
</script>
