(() => {
  const apiCall = () => new Promise((resolve) => {
    setTimeout(() => {
    resolve("loaded from the api")
  }, 5000)})
  const tag = document.currentScript

  console.log("I am the async");


  const { innerHTML, onclick, wrappertag } = tag;
  const myTag = document.createElement(wrappertag);
  myTag.innerHTML = 'not loaded';
  apiCall().then(loadedData => {
    myTag.innerHTML = loadedData
  })


  tag.parentNode.insertBefore(myTag, tag.nextSibling);
  tag.remove()
})();
