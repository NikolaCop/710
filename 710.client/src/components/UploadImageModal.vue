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
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
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
            <div class="file-loader">
              <div>
                <p>Upload an Image to Firebase</p>
                <input type="file" @change="previewImage" accept="image/*" />
              </div>
              <div>
                <img class="preview" :src="state.picture" />
                <br />
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
import { reactive, computed } from 'vue'
import { vehicleService } from '../services/VehicleService'
// import $ from 'jquery'
// import { logger } from '../services/utils/Logger'
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
      picture: '',
      uploadValue: 0,
      path: 'vehicleImages'
    })
    return {
      state,
      previewImage(event) {
        state.uploadValue = 0
        state.picture = ''
        state.imageData = event.target.files[0]
      },
      async onUpload() {
        const res = await uploadImage(state.imageData, state.path)
        // const newImage = { name: `${res.snapshot.ref.name.replace(' ', '-')}`, url: `${res.url}` }
        // NOTE figure out how to push url into images property on vehicle schema
        const editedVehicle = state.vehicle.images.push(res.url)
        logger.log(editedVehicle)
        await vehicleService.addImage(editedVehicle, state.vehicle.id)
      }
    }

    // const file = event.target.files[0]
    // logger.log(file)
    // const res = await uploadImage(file, 'vehicle-images/' + state.user.id, file.name)
    // state.newImage = {
    //   name: res.snapshot.name,
    //   imgUrl: res.url
    // }
    // vehicleService.addImage(state.newImage, state.vehicle.id)
    // state.newImage = {}
    //   $('#upload-image').modal('hide')
  }
}
</script>
