<template>
  <div class="add-record-modal">
    <div
      class="modal fade"
      id="add-record"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add a Record</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createRecord">
              <div class="form-group">
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="form-control"
                  placeholder="Enter Title..."
                  aria-describedby="helpId"
                  v-model="state.newRecord.title"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="description"
                  id="description"
                  class="form-control"
                  placeholder="Enter Description..."
                  aria-describedby="helpId"
                  v-model="state.newRecord.description"
                />
              </div>
              <div class="file-loader">
                <div>
                  <input type="file" @change="previewImage" accept="image/*" />
                </div>
                <div>
                  <img class="preview" :src="state.picture" />
                  <br />
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="submit" class="btn btn-success">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import $ from 'jquery'
import { AppState } from '../AppState'
import uploadImage from '../ImageUploader'
import { recordsService } from '../services/RecordsService'
import { useRoute } from 'vue-router'

export default {
  name: 'AddRecordModal',
  setup() {
    const route = useRoute()
    const state = reactive({
      user: computed(() => AppState.user),
      newRecord: {
        images: []
      },
      imageData: null,
      picture: '',
      path: 'recordImages'
    })
    return {
      state,
      route,
      previewImage(event) {
        state.picture = ''
        state.imageData = event.target.files[0]
      },
      async createRecord() {
        $('#add-record').modal('hide')
        const res = await uploadImage(state.imageData, state.path)
        state.newRecord.maintenanceID = route.params.id
        state.newRecord.creator = state.user
        // state.vehicle.images.push(res.url)
        state.newRecord.images.push(res.url)
        await recordsService.createRecords(state.newRecord)
      }
    }
  },
  components: {}
}
</script>
