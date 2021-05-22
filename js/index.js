var slideIndex = 0
showDivs(slideIndex)
function showDivs (n) {
  if (n > 2) {
    slideIndex = 0
    n = 0
  }
  if (n < 0) {
    slideIndex = 2
    n = 2
  }
  var bgEl = document.getElementById('slidImg')
  bgEl.style.backgroundImage = 'url(./img/' + imgs[n] + ')'
}

// Middle text
var no = 0
mountTxt(no)
function mountTxt (serial) {
  if (serial > 2) {
    serial = 0
    no = 0
  }
  if (serial < 0) {
    serial = 2
    no = 2
  }
  document.getElementById('serviceTxt').innerHTML = middleTextArr[serial]
}

var motionText = setInterval(function () {
  showDivs(++slideIndex)
  mountTxt(++no)
}, 2000)

var status = 1
function control (e) {
  console.log(e.target)
  if (status == 1) {
    status = 0
    e.target.innerHTML = '<i class="fa fa-pause" aria-hidden="true">'
    clearInterval(motionText)
  } else {
    status = 1
    e.target.innerHTML = '<i class="fa fa-play" aria-hidden="true">'
    move()
  }
}
function move () {
  motionText = setInterval(function () {
    showDivs(++slideIndex)
    mountTxt(++no)
  }, 2000)
}
function movementSlide (t) {
  if (t == 1) {
    showDivs(++slideIndex)
    mountTxt(++no)
    clearInterval(motionText)
    if (status == 0) {
      return
    }
    move()
  }
  if (t == -1) {
    showDivs(--slideIndex)
    mountTxt(--no)
    clearInterval(motionText)
    if (status == 0) {
      return
    }
    move()
  }
}
