<template>
  <div class="maintenance-page container-fluid bg-dark text-white">
    <div class="row">
      DOPE
      <router-link :to="{name: 'YourCarPage', params: {id:id}}">
        <button class="btn btn-light mx-2">
          Your Car
        </button>
      </router-link>
      <router-link :to="{name: 'YourGaragePage', params: { id: id }}">
        <button class="btn btn-light">
          Your Garage
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaintenancePage',
  props: [],
  setup() {
    return {}
  },
  components: {}
}
</script>
