/* Really Helpful Code from Dr. Case Ajax Demo 
Which Most of this code came from because I had no idea on how to do system storage*/
window.addEventListener('load', (event) => {
    console.log('Starting initialization ')
    if (localStorage.getItem('name')) {
      document.querySelector('#name').value = localStorage.getItem('name')
      console.log(`Stored guest = ${localStorage.name}`)
    }
    if (localStorage.getItem('first')) {
      document.querySelector('#first').value = parseInt(localStorage.first)
      console.log(`Stored number 1 = ${localStorage.first}`)
    }
    if (localStorage.getItem('second')) {
      document.querySelector('#second').value = parseInt(localStorage.second)
      console.log(`Stored number 2 = ${localStorage.second}`)
    }
    console.log('  Finished initialization')
  })
  function add(x,y){return x + y}
  document.querySelector('#button').addEventListener('click', () => {
    const name = document.querySelector('#name').value
    console.log('name=' + name)
    const i = parseInt(document.querySelector('#first').value)
    console.log('i=' + i)
    const j = parseInt(document.querySelector('#second').value)
    console.log('j=' + j)
    const answer = `${name}, your sum is ${add(i,j)}`
    document.querySelector('#answer').innerHTML = answer

    
    localStorage.setItem('name', name)
    localStorage.setItem('first', i)
    localStorage.setItem('second', j)
    console.log('Finish Set items')
  })




