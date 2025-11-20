class eventL {
    constructor(){
        this.event = {
            name: "",
            func: null,
        }
    }

    print(){
        console.log(this.event)
    }
    
    on(eventName, eventHandler){
        this.event.name = eventName
        this.event.func = eventHandler
    }

    emit(event){
        if(event == this.event.name){
            this.event.func()
        }
}

}


const x = new eventL()
x.on('abhi', ()=>{
    console.log("hello");
    
})
x.print()

x.emit('abhi')
x.on('x', ()=>{
    console.log('event 2')
})
x.emit('x')

// we are importing event 
// eventemmiter function
// on -> event, function