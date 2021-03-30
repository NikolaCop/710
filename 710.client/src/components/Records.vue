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
        {{ convertDate(record.createdAt) }}
      </td>
      <td scope="col">Photos</td>
    </tr>
  </tbody>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Records',
  props: {
    record: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user)
    })
    return {
      state,
      convertDate(createdAt) {
        const dateYear = createdAt.slice(0, 4)
        const dateMonth = createdAt.slice(5, 7)
        const dateDay = createdAt.slice(8, 10)
        return dateMonth + '/' + dateDay + '/' + dateYear
      }
    }
  },
  components: {}
}
</script>
