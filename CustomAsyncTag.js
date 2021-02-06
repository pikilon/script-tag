(() => {
  const apiCall = () => new Promise((resolve) => {
    setTimeout(() => {
    resolve("loaded from the api")
  }, 5000)})
  const tag = document.currentScript

  console.log("I am the async");


  const { innerHTML, onclick } = tag;
  const myTag = document.createElement(tag.getAttribute("tag"));
  myTag.innerHTML = 'not loaded';
  myTag.onclick = () => console.log("ASYNC TAG", myTag.innerHTML)
  apiCall().then(loadedData => {
    myTag.innerHTML = loadedData
  })


  tag.parentNode.insertBefore(myTag, tag.nextSibling);
  tag.remove()
})();
