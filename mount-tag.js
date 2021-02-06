const insertAfter = (referenceNode, newNode) =>
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

export const mountTag = (tag, result) => {
    const newComponent = scriptTagFunction(tag)
    insertAfter(tag, result)
    tag.remove()

    // const firstChildScript = newComponent.querySelector("script")
    // if (firstChildScript) firstChildScript.onload()
  }
