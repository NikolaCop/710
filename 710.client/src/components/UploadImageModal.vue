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
                <p>
                  Progress: {{ state.uploadValue.toFixed() + "%" }}
                  <progress :value="state.uploadValue" max="100"></progress>
                </p>
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
import { logger } from '../services/utils/Logger'
import { AppState } from '../AppState'
import firebase from 'firebase'
// import uploadImage from '../ImageUploader'
export default {
  name: 'UploadImageModal',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      vehicle: computed(() => AppState.activeVehicle),
      imageData: null,
      picture: '',
      uploadValue: 0
    })
    return {
      state,
      previewImage(event) {
        state.uploadValue = 0
        state.picture = ''
        state.imageData = event.target.files[0]
      },
      async onUpload() {
        const storageRef = await firebase.storage().ref(`images/${state.imageData.name}`).put(state.imageData)
        storageRef.on('state_changed', snapshot => {
          state.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        }, error => {
          logger.log(error.message)
        }, () => {
          state.uploadValue = 100
          // setTimeout(pause, 2000)
        }, storageRef.snapshot.ref.getDownloadURL().then((url) => {
          state.picture = url
          const newImage = { name: `${state.imageData.name.replace(' ', '-')}`, url: `${state.picture}` }
          vehicleService.addImage(newImage, state.vehicle.id)
        })
        )
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
