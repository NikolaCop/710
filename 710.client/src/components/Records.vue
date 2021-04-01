<template>
  <tbody class="record">
    <tr>
      <!-- NOTE create button that toggles modal to be able to view record details -->
      <td scope="col">
        {{ record.title }}
      </td>
      <td scope="col">
        {{ record.description }}
      </td>
      <td scope="col">
        {{ new Date(record.createdAt).toLocaleDateString() }}
      </td>
      <!-- adding a binding to data-target allows you to add in a unique id from your state -->
      <td
        type="button"
        scope="col"
        data-toggle="modal"
        :data-target="'#view-record-' + record.id"
        @click="setActive"
      >
        View
      </td>
      <ViewRecordsModal :record="record" />
    </tr>
  </tbody>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { recordsService } from '../services/RecordsService'
export default {
  name: 'Records',
  props: {
    record: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user)
    })
    return {
      state,
      async setActive() {
        await recordsService.getRecordById(props.record.id)
      }
    }
  },
  components: {}
}
</script>
