// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for Key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
  console.log(event.keyCode);

  if (event.keyCode == 65) {
    // Play A-Clap
    let audio = document.getElementById("clap");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("A").classList.add("playing");
  }

  if (event.keyCode == 83) {
    // Play S-hihat
    let audio = document.getElementById("hihat");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("S").classList.add("playing");
  }

  if (event.keyCode == 68) {
    // Play D-kick
    let audio = document.getElementById("kick");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("D").classList.add("playing");
  }

  if (event.keyCode == 70) {
    // Play F-openhat
    let audio = document.getElementById("openhat");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("F").classList.add("playing");
  }

  if (event.keyCode == 71) { 
    // Play G-Boom
    let audio = document.getElementById("boom");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("G").classList.add("playing");
  }

  if (event.keyCode == 72) { 
    // Play H-ride
    let audio = document.getElementById("ride");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("H").classList.add("playing");
  }

  if (event.keyCode == 74) { 
    // Play J-Snare
    let audio = document.getElementById("snare");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("J").classList.add("playing");
  }

  if (event.keyCode == 75) { 
    // Play K-Tom
    let audio = document.getElementById("tom");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("K").classList.add("playing");
  }

  if (event.keyCode == 76) { 
    // Play L-Tink
    let audio = document.getElementById("tink");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("L").classList.add("playing");
  }

}

// Add Transition and listeners
document.getElementById("A").addEventListener("transitionend", removePlaying);
document.getElementById("S").addEventListener("transitionend", removePlaying);
document.getElementById("D").addEventListener("transitionend", removePlaying);
document.getElementById("F").addEventListener("transitionend", removePlaying);
document.getElementById("G").addEventListener("transitionend", removePlaying);
document.getElementById("H").addEventListener("transitionend", removePlaying);
document.getElementById("J").addEventListener("transitionend", removePlaying);
document.getElementById("K").addEventListener("transitionend", removePlaying);
document.getElementById("l").addEventListener("transitionend", removePlaying);

// Transtition End Function
function removePlaying() {
  this.classList.remove("playing");
}

