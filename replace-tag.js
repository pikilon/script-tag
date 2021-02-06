const insertAfter = (referenceNode, newNode) =>
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

export const mountTag = (scriptTagFunction) => {
  window.scriptOnLoad = (scriptTag) => {
    const newComponent = scriptTagFunction(scriptTag)
    insertAfter(scriptTag, newComponent)
    scriptTag.remove()

    const firstChildScript = newComponent.querySelector("script")
    if (firstChildScript) firstChildScript.onload()
  }
}