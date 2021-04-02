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
  activeRecord: {},
  theme: true,
  loading: false,
  marketplace: true,
  // NOTE add the rest of the avatars to array
  avatars: [
    'mustang.png', 'charger.png', 'Hatchback.png', 'civic.png', 'classicConvertible.png', 'classicCoupe.png', 'classicHatch.png', 'ClassicTruck.png', 'convertible.png', 'Coupe.png', 'crossover.png', 'electric.png', 'honda.png', 'hypercar.png', 'jeep.png', 'Motorcycle.png', 'musclecar.png', 'Pickup.png', 'Sedan.png', 'spaceshuttle.png', 'SUV.png'
  ]
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
  AppState.theme = false
}
