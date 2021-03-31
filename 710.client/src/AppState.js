import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  vehicles: [],
  activeVehicle: {},
  archivedVehicles: [],
  maintenance: {},
  activeMaintenance: {},
  records: {},
  theme: true,
  loading: false
})

const lightThemecss = () => import('./assets/scss/mainLight.scss')
const darkThemecss = () => import('./assets/scss/mainDark.scss')

export function themeToggle() {
  AppState.theme = !AppState.theme
  if (AppState.theme === false) {
    lightThemecss()
  } else {
    location.reload()
    // darkThemecss()
    // logger.log('App State dark theme')
  }
}

export function darkThemeToggle() {
  darkThemecss()
  AppState.theme = true
}
