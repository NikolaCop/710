import { reactive } from 'vue'
import { logger } from './services/utils/Logger'

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
    darkThemecss()
    logger.log('App State dark theme')
  }
}

export function darkThemeToggle() {
  darkThemecss()
  AppState.theme = true
}
