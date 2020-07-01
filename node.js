const express=require('express')
const app=express()

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render("index")
})

server=app.listen(3000)
const io=require('socket.io')(server)

io.on('connect',(socket)=>{
    console.log('Nuevo Usuario Conectado..!!!!')
    socket.usuario="Anonimo"
    socket.on('cambiar_usuario',(data)=>{
        socket.usuario=data.usuario
        console.log(data.usuario)
    })

    socket.on('nuevo_mensaje',(data)=>{
        io.sockets.emit('nuevo_mensaje',{mensaje:data.mensaje,usuario:socket.usuario})  
    })
})