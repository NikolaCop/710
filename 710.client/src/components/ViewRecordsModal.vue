<template>
  <div class="view-records-modal text-info">
    <div
      class="modal fade"
      :id="'view-record-' + record.id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Change this title later
            </h5>
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
            <div class="row text-center">
              <div class="col-12">
                <h2>{{ state.record.title }}</h2>
              </div>
              <div class="col-12">
                <h4>
                  {{ state.record.description }}
                </h4>
              </div>
              <!-- <div class="col-12">
                <img :src="record.images" height="400" alt="" />
              </div> -->
              <div class="col-12">
                <div
                  id="carouselControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div
                      v-for="(image, index) in state.record.images"
                      :key="image"
                      class="carousel-item"
                      :class="checkActive(index)"
                    >
                      <img
                        class="d-block w-100"
                        :src="image"
                        alt="First slide"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    role="button"
                    data-slide="prev"
                    @click="changeIndex(-1)"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    role="button"
                    data-slide="next"
                    @click="changeIndex(1)"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-around mt-3">
                <input
                  id="fileuploader"
                  type="file"
                  @change="previewImage"
                  accept="image/*"
                />
                <button @click="onUpload">
                  Upload
                </button>
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
import uploadImage from '../ImageUploader'
import { recordsService } from '../services/RecordsService'
import { AppState } from '../AppState'
import { logger } from '../services/utils/Logger'
export default {
  name: 'ViewRecordsModal',
  props: {
    record: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      record: computed(() => AppState.activeRecord),
      active: { index: 0 },
      imageData: {},
      path: 'recordsImages',
      files: [],
      newRecord: props.record
    })
    return {
      state,
      previewImage(event) {
        state.imageData = event.target.files[0]
        logger.log(state.imageData)
        state.files.push(...event.target.files)
      },
      async onUpload() {
        for (let i = 0; i < state.files.length; i++) {
          const res = await uploadImage(state.imageData, state.path)
          state.newRecord.images.push(res.url)
        }
        await recordsService.addImage(state.newRecord, state.newRecord.id)
        state.files = []
      },
      changeIndex(num) {
        const newIndex = state.active.index + num
        if (newIndex === -1) {
          state.active.index = props.record.images.length - 1
        } else if (newIndex > props.record.images.length - 1) {
          state.active.index = 0
        } else {
          state.active.index += num
        }
      },
      checkActive(index) {
        return index === state.active.index ? 'active' : ''
      }
    }
  },
  components: {}
}
</script>

<style scoped>
.modal-body {
  height: auto;
  width: auto;
}
@media (max-width: 376px) {
  .images {
  height: 50vh;
  width: 50vh;
}
}
@media (max-width: 576px) {
  .images {
  height: 50vh;
  max-width: 50vh;
}
}
@media (max-width: 767.98px) {
  .images {
  height: 50vh;
  max-width: 50vh;
}
}
@media (max-width: 991.98px) {
  .images {
  height: 50vh;
  max-width: 50vh;
}
}
@media (min-width: 991.98px) {
  .images {
  height: 50vh;
  max-width: 50vh;
}
}
.text-info{
  color: black!important;;
}
</style>
