const dState = {
    input:'张三丰',
    age:['23','24','25']
}
export interface dState{
    input:string,
    age:Array<string>,
}

export default (state=dState,action:any)=>{
    console.log(state,action)
    if(action.type === 'inputType'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.input = action.value
        return newState
    }
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.age.push(state.input)
        newState.input = ''
        return newState
    }
    return state
}
