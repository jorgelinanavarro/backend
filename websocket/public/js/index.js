const socket = io()

const input = document.querySelector('input')

document.querySelector('button').addEventListener('click', () => {
    socket.emit('miproducto', input.value)
})

socket.on('productos', data => {
    const productosHTML = data
        .map(pto => {
            if (pto.socketid == socket.id) {
                pto.socketid = 'yo'
            } 
            return `SocketID: ${pto.socketid} dice: ${pto.mensaje}`
    })
        .join('<br>')

    document.querySelector('p').innerHTML = productosHTML
})