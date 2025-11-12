function boardingSystem(commands){
    let queue=[]
    let size=0
    let i=0
    for(let command of commands){
        let parts=[]
        let word=''
        for(i=0;i<command.length; i++){
            if(command[i] !== ' '){
                word+=command[i]
            }
            else{
                if(word !== ''){
                    parts[parts.length]=word
                    word=''
                }
            }
        }
        if(word !== ''){
            parts[parts.length]=word
        }
        let action=parts[0]
        let name=parts[1]
        if(action === 'ADD_NORMAL' && name){
            queue[size]=name
            size++
        }
        else if(action === 'ADD_PRIORITY' && name){
            for(i=size;i>0;i--){
                queue[i]=queue[i-1]
            }
            queue[0]=name
            size++
        }
        else if(action === 'BOARD'){
            if(size>0){
                console.log(queue[0])
            for(i=0;i<size;i++){
                queue[i]=queue[i+1]
            }
            size--
            }
            else{
                console.log('no passenger in line')
            }
        }
        else{
            console.log('invalid command')
        }
    }
}
const input=[
    'ADD_NORMAL ALICE',
    'ADD_NORMAL BOB',
    'ADD_PRIORITY CAROL',
    'BOARD',
    'BOARD',
    'ADD_NORMAL DAVE',
    'BOARD',
    'ADD_PRIORITY ROSHAN',
    'BOARD',
    'BOARD'
]
boardingSystem(input)