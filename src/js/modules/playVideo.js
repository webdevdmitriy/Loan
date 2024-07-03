export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers)
    this.overlay = document.querySelector(overlay)
    this.close = this.overlay.querySelector('.close')
  }

  bindTriggers() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          this.overlay.style.display = 'flex'
        } else {
          const path = btn.getAttribute('data-url')
          this.createPlayer(path)
        }
      })
    })
  }

  bindCloseBtn() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none'
      this.player.stopVideo()
    })
  }

  createPlayer(url) {
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.

    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`,
    })

    this.overlay.style.display = 'flex'
  }

  init() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script')

    tag.src = 'https://www.youtube.com/iframe_api'
    var firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    this.bindTriggers()
    this.bindCloseBtn()
  }
}
