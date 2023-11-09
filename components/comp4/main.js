(function () {
  // Static DataBase
  let list_static_db = {
    reminders: {
      name: "Reminders",
      elements: [{title:"FAMILY", items:['Call my father', "Modify client metting"]}]
    },
    list: {
      name: "To Do List",
      elements: [{title:'WORK',items:["C++ template metaprograming.", "Angular"]}]
    },
    shopping: {
      name: "Shopping List",
      elements: [{ title: 'GROCERIES', items: ['Butter', 'Orange Juice', 'Cheese', 'Chocolate', 'Corn Flakes', 'Potatoes', 'Avocado'] }, { title: 'ELECTRONICS', items: [] }, { title: 'BOOKS', items: [] }, { title: 'CAR', items: [] }]
    },
    other: {
      name: "Other",
      elements: [{title:"LEARN", items:['Read JS6 specification', "Buy C++ Book"]}]
    }
  }
  // Define variables
  let reminders = document.getElementById('reminders');
  let list = document.getElementById('list');
  let shopping = document.getElementById('shopping');
  let other = document.getElementById('other');
  let lista = document.getElementById('to-do-elem');


  /**
   * Display elements that belong to a named sub-list item.
   * @param {Object} content Individual elements of the to_do list
   * @returns 
   */
  function printHTMLContent(content) {
    if (content['items'].length > 0) {
      let htmlList = `<ul class="${content['title']}">`
      for (x in content['items']) {
        htmlList += `<li class="group-content">${content['items'][x]}</li>`;
      }
      htmlList += '</ul>';
      return htmlList;
    }else{
      return '';
    }
  }
  /**
   * Display to do parent group items stored in static DB.
   * in specific format. See lsit_static_db as an example.
   * @param {Object} data  To do group, items and sub-items to print
   */
  function printHtmlElements(data) {
    let to_do_elems = document.getElementById('to-do-elem');
    to_do_elems.replaceChildren([]);
    for (x in data.elements) {
      to_do_elems.innerHTML +=
        `      <div class="group">
                <p class="group-title">${data.elements[x]['title']}</p>
                <img class="toggle-menu" id=${data.elements[x]['title']} src="./assets/menu-points.svg" alt="Menu Points"/>
              </div>`
      to_do_elems.innerHTML += printHTMLContent(data.elements[x]);
    }
  }
  // Event listeners click button
  reminders.addEventListener('click',(e)=>{
    let data = list_static_db.reminders;
    printHtmlElements(data);
  })
  list.addEventListener('click',(e)=>{
    let data = list_static_db.list;
    printHtmlElements(data)
  })
  shopping.addEventListener('click', (e) => {
    let data = list_static_db.shopping;
    printHtmlElements(data)
  });
  other.addEventListener('click',(e)=>{
    let data = list_static_db.other;
    printHtmlElements(data)
  })
 
  // Event listeners click to-do-elem section
  lista.addEventListener('click', (e) => {
    if(e.target.id){
      let myMenu = document.querySelector(`.${e.target.id}`);
      if(myMenu){
        myMenu.classList.toggle('show');
      }
    }
    if(e.target.classList[0]==='group-content'){
      e.target.classList.toggle('done');
    }
  });
})();