
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
    const createNested = document.createElement("script")
    nestedOriginal.getAttributeNames().forEach(name => {
      createNested.setAttribute(name, nestedOriginal.getAttribute(name))
    })

    myButton.appendChild(createNested)
    nestedOriginal.remove()

  })

})();