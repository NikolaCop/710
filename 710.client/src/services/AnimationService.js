class AnimationService {
  async personalAutomation() {
    try {
      const text = document.querySelector('.fancy')
      const strText = text.textContent
      const splitText = strText.split('')
      console.log(splitText)
      text.textContent = ''
      for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += '<dallen>' + splitText[i] + '</dallen>'
      }
      let char = 0
      let timer = setInterval(onTick, 50)
      function onTick() {
        const span = text.querySelectorAll('dallen')[char]
        span.classList.add('fadeText')
        char++
        if (char === splitText.length) {
          complete()
        }
      }
      function complete() {
        clearInterval(timer)
        timer = null
      }
    } catch (error) {
      console.log(error)
    }
  }

  async sevenTenAutomation() {
    try {
      const text = document.querySelector('.seventen')
      const strText = text.textContent
      const splitText = strText.split('')
      console.log(splitText)
      text.textContent = ''
      for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += '<dallen>' + splitText[i] + '</dallen>'
      }
      let char = 0
      let timer = setInterval(onTick, 50)
      function onTick() {
        const span = text.querySelectorAll('dallen')[char]
        span.classList.add('fadeText')
        char++
        if (char === splitText.length) {
          complete()
        }
      }
      function complete() {
        clearInterval(timer)
        timer = null
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const animationService = new AnimationService()
