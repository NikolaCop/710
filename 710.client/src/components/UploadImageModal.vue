<template>
  <div class="upload-image-modal">
    <div
      class="modal fade"
      id="upload-image"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-dark">
              Upload An Image
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
            <div class="col-12">
              <div
                id="carouselControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner img-fluid">
                  <div
                    v-for="(image, index) in state.vehicle.images"
                    :key="image"
                    class="carousel-item"
                    :class="checkActive(index)"
                  >
                    <img class="images" :src="image" alt="First slide" />
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
</template>

<script>
import { reactive, computed } from 'vue'
import { vehicleService } from '../services/VehicleService'
import { AppState } from '../AppState'
import uploadImage from '../ImageUploader'
import { logger } from '../services/utils/Logger'
export default {
  name: 'UploadImageModal',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      vehicle: computed(() => AppState.activeVehicle),
      imageData: null,
      path: 'vehicleImages',
      files: [],
      active: { index: 0 }
    })
    return {
      state,
      previewImage(event) {
        state.imageData = event.target.files[0]
        state.files.push(...event.target.files)
      },
      async onUpload() {
        for (let i = 0; i < state.files.length; i++) {
          const res = await uploadImage(state.imageData, state.path)
          // NOTE figure out how to push url into images property on vehicle schema
          state.vehicle.images.push(res.url)
          logger.log(state.vehicle)
        }
        await vehicleService.addImage(state.vehicle, state.vehicle.id)
        state.files = []
      },
      changeIndex(num) {
        const newIndex = state.active.index + num
        if (newIndex === -1) {
          state.active.index = state.vehicle.images.length - 1
        } else if (newIndex > state.vehicle.images.length - 1) {
          state.active.index = 0
        } else {
          state.active.index += num
        }
      },
      checkActive(index) {
        return index === state.active.index ? 'active' : ''
      }
    }
  }
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
</style>
