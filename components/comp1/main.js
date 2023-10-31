(function(){
  let btn1 = document.querySelector('.btn-1');
  let btn2 = document.querySelector('.btn-2');
  let language = document.querySelector('#language');
  let toggVideo = document.getElementById('video');
  let toggProfile = document.getElementById('profile');

  btn1.addEventListener('click',()=>{
    let msg = `
    Language: ${language.value}\n
    Autoplay videos: ${toggVideo.checked}\n
    Show profile photos: ${toggProfile.checked}
    `;
    alert(msg)
  });
  btn2.addEventListener('click',()=>{
    toggVideo.checked = true;
    toggProfile.checked = false;
    language.value = "";
  });
})();