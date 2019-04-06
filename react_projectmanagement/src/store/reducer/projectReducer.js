const initState = {
    projects:[
        {id:'1' , title:'hello Mr 1 ' , content:'Blah blah blah'},
        {id:'2' , title:'hello Mr 2 ' , content:'Blah blah blah'},
        {id:'3' , title:'hello Mr 3 ' , content:'Blah blah blah'},
    ]


};


const projectReducer = (state=initState , action)=>{
    switch (action.type) {
        case "CREATE_PROJECT":
            return state;    
        case "CREATE_PROJECT_ERROR":
            return state;
        default:
            return state;
    }
}


export default projectReducer;
