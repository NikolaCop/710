<template>
  <div class="container-fluid maintenance-large">
    <div class="col-12 text-center mb-3 mt-1">
      <h6 class="pam-size text-dark">
        <i
          class="fa fa-camera-retro mr-2 mt-2 text-primary"
          data-toggle="modal"
          :data-target="'#view-record-' + record.id"
          @click="setActive"
          id="hover-button"
          aria-hidden="true"
        ></i>
        <b>{{ record.title }}</b>
      </h6>
      <h6 class="pam-size text-info">
        {{ record.description }}
      </h6>
      <h6 class="pam-size text-info">
        {{ new Date(record.createdAt).toLocaleDateString() }}
      </h6>
    </div>
    <ViewRecordsModal :record="record" />
  </div>
  <tbody class="record maintenance">
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
        scope="col"
        data-toggle="modal"
        :data-target="'#view-record-' + record.id"
        @click="setActive"
        id="hover-button"
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

<style scoped>
#hover-button:hover {
  cursor: pointer;
}
@media (min-width: 576px) {
  .maintenance-large {
    display: none;
  }
}
@media (max-width: 576px) {
  .maintenance {
    display: none;
  }
}
@media (max-width: 576px) {
  .pam-size {
    font-size: 0.8rem;
  }
}
@media (min-width: 767.98px) {
  .pam-size {
    font-size: 1.5rem;
  }
}
@media (min-width: 991.98px) {
  .pam-size {
    font-size: 2rem;
  }
}
</style>
