<template>
  <div class="view-records-modal">
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
            <h5 class="modal-title">Change this title later</h5>
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
                <h2>{{ record.title }}</h2>
              </div>
              <div class="col-12">
                <h4>
                  {{ record.description }}
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
                    <!-- { active: index == state.activeIndex } -->
                    <div
                      v-for="(image, index) in record.images"
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
                    <!-- <div class="carousel-item">
                      <img
                        class="d-block w-100"
                        :src="record.images[2]"
                        alt="Third slide"
                      />
                    </div> -->
                  </div>
                  <a
                    class="carousel-control-prev"
                    role="button"
                    data-slide="prev"
                    @click="state.activeIndex--"
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
                    @click="state.active.index++"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'ViewRecordsModal',
  props: {
    record: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      activeIndex: 0,
      active: { index: 0 }
    })
    return {
      state,
      checkActive(index) {
        return index === state.active.index ? 'active' : ''
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
