<template>
  <div class="change-avatar-modal ">
    <div
      class="modal fade"
      :id="'change-avatar-' + vehicle.id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Add Maintenance
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeAvatarModal',
  props: {
    vehicle: { type: Object, required: true }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>
