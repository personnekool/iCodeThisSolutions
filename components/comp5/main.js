(function(){
  let btnAudio = document.getElementById('audio-btn');
  let btnVideo = document.getElementById('video-btn');
  let btnPerf = document.getElementById('perf-btn');
  let rate = document.getElementsByClassName('star');

  // Ussing javascript range to iterate specific child elements
  let range1 = document.createRange();
  range1.setStart(document.querySelector('.stars'),5);
  let range1Elements = range1.commonAncestorContainer.children;
  for(let element of range1Elements){
    element.addEventListener('click',(e)=>{
          let n = Number(element.classList[0][1]);
          fillStartTill(range1Elements,n);
        },false);
  }

  let rangeUncheck = document.createRange();
  rangeUncheck.setStart(document.querySelector('.form-options'),4);
  let rangeUncheckElements = rangeUncheck.commonAncestorContainer.children;
  for(let element of rangeUncheckElements){

    element.children[0].addEventListener('click',(e)=>{
      e.target.classList.toggle('uncheck');
      e.target.classList.toggle('check');
    },false);
  }

  function clearFillStar(htmlElements){
    for(let element of htmlElements){
      element.classList.remove('fill-star');
      element.classList.add('star');
    }
  }
  function fillStartTill(htmlElements, n){
    clearFillStar(htmlElements);
    for(let i=0;i<=n;i++){
      htmlElements[i].classList.toggle('fill-star');
      htmlElements[i].classList.toggle('star');
    }
  }

  function changeBtnBkg(e){
    // e.target.classList.remove('btn1');
    e.target.classList.toggle('btn1-clicked');
  }

  // Selected by Default
  document.addEventListener("DOMContentLoaded",(e)=>{
    btnAudio.classList.toggle('btn-clicked3');
    btnVideo.classList.toggle('btn-clicked2')
  },false)

  btnAudio.addEventListener('click',(e)=>{
    e.target.classList.toggle('btn-clicked3');
  },false);
  btnVideo.addEventListener('click',(e)=>{
    e.target.classList.toggle('btn-clicked2');
  },false);


})();