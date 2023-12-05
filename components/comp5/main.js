(function(){
  let btnAudio = document.getElementById('audio-btn');
  let btnVideo = document.getElementById('video-btn');
  let rates1 = document.getElementById('rates1');
  let rates2 = document.getElementById('rates2');

  /*
  * Rate your experience component
  * 2 Events
  * 2 Helper functions
  */
  rates1.addEventListener('click',(e)=>{
    setRateCounter(1);
    formatLines(rates2,rates1);

  },false);
  rates2.addEventListener('click',(e)=>{
    setRateCounter(6);
    formatLines(rates1,rates2);
  },false);

  /**
   * Change format of upper component lines when licked.
   * @param {HTMLElement} toAdd 
   * @param {HTMLElement} toRemove 
   */
  function formatLines(toAdd, toRemove){
    toAdd.classList.remove('line-1');
    toAdd.classList.add('line-2');
    toRemove.classList.add('line-1')
  }
  /**
   * Change component number
   * @param {Number} counter 
   */
  function setRateCounter(counter){
    let rates = document.getElementsByClassName('rates')[0].children;
    for(let element in rates){
      rates[element].textContent = counter;
      counter++;
    }
  }
  /**
   * How do you rate our service component
   * Using javascript range to iterate specific child elements
   * 1 Range + events in range
   * 2 Helper functions
  */ 
  let range1 = document.createRange();
  range1.setStart(document.querySelector('.stars'),5);
  let range1Elements = range1.commonAncestorContainer.children;
  for(let element of range1Elements){
    element.addEventListener('click',(e)=>{
          let n = Number(element.classList[0][1]);
          fillStartTill(range1Elements,n);
        },false);
  }
  /**
   * Clear fill from start using css
   * @param {HTMLCollection} htmlElements 
   */
  function clearFillStar(htmlElements){
    for(let element of htmlElements){
      element.classList.remove('fill-star');
      element.classList.add('star');
    }
  }
  /**
   * Iterate over the stars and change background image
   * using css class.
   * @param {HTMLCollection} htmlElements 
   * @param {Number} n 
   */
  function fillStartTill(htmlElements, n){
    clearFillStar(htmlElements);
    for(let i=0;i<=n;i++){
      htmlElements[i].classList.toggle('fill-star');
      htmlElements[i].classList.toggle('star');
    }
  }

  /**
   * Work properly component
   * 1 Range + events
   */
  let rangeUncheck = document.createRange();
  rangeUncheck.setStart(document.querySelector('.form-options'),4);
  let rangeUncheckElements = rangeUncheck.commonAncestorContainer.children;
  for(let element of rangeUncheckElements){
    element.children[0].addEventListener('click',(e)=>{
      e.target.classList.toggle('uncheck');
      e.target.classList.toggle('check');
    },false);
  }

  

  /** 
   * Audio & Video & Performance component
   * 3 Events (click)
   */
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