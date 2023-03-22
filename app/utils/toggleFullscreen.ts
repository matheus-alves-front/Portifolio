export function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();

    return true
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 

      return false
    }
  }
}