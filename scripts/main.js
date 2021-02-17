(()=> {
  document.addEventListener("mousemove", ev => {
    const layers = document.querySelectorAll(".scene__layer")
    for (let i = 1; i < layers.length; i++) {
      let depth = layers[i].getAttribute("data-depth")
      layers[i].style.transform = `translate(${ev.clientX / 2 * (-depth)}px, ${ev.clientY / 2 * (-depth)}px)`

    }
  })
})()