
(() => {
  const tag = document.currentScript
  const { innerHTML, onclick } = tag;

  const myButton = document.createElement("button");

  myButton.innerHTML = tag.innerHTML




  myButton.onclick = () => {
    console.log('Button');
    onclick();
  };


  tag.parentNode.insertBefore(myButton, tag.nextSibling);
  tag.remove()
  myButton.querySelectorAll("script").forEach(nestedOriginal => {
    console.log('nestedOriginaltem', nestedOriginal.src);
    const createNested = document.createElement("script")
    createNested.src = nestedOriginal.src
    myButton.appendChild(createNested)
    nestedOriginal.remove()

  })

})();