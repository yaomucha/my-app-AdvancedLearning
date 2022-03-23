declare namespace Login {
    interface countAttr {
        note:string,
        gender:string
    }

    interface loginSumitProps {
        count:countAttr,
        getSumit:(values)=>void
    }
    
    
}

declare const enum Color{
    red,
    green
}


export  {Color}
export default Login
