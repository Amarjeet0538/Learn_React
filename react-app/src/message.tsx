// PascalCase component name
function Message(){
    const name = 'Duniya';
    if(name){
        return(
        //JSX : JavaScript XML
            <h1>Hello {name}</h1>
        )
    }
    else{
        return <h1>Hello World</h1>
    }
}

export default Message;