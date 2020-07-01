$(function(){
    var socket= io.connect('http://localhost:3000')
    var mensaje=$("#mensaje")
    var usuario=$("#usuario")
    var enviar_mensaje=$("#enviar_mensaje")
    var enviar_usuario=$("#enviar_usuario")
    var chat=$("#chat")

    enviar_usuario.click(()=>{
        console.log(usuario.val())
        socket.emit('cambiar_usuario',{usuario:usuario.val()})        
    })

    enviar_mensaje.click(()=>{
        socket.emit('nuevo_mensaje',{mensaje:mensaje.val()})
    })

    socket.on('nuevo_mensaje',(data)=>{
        chat.append("<p class='message'>"+ data.usuario+': '+data.mensaje+"</p>")
    })
})