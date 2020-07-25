import React,{useState} from 'react';


function Room() {
    
    // const state=useState(true);
    // const isList=state[0];
    // const setList=state[1];
    ///same Equal to Beloww code //
    let [isLit,setLit] = useState(true);//destructring
    
    let [age,setAge]=useState(25);
    // function updateLit(){
    //     console.log("Button Cick");
    //     setLit(!isLit);
    //     setAge(++age);
    //     // isLit=!isLit;
    //     // age=65; dont update age in div
    //     // console.log(isLit); 
    // }
////
    
    return(
        <div>
            This Room is  {isLit? "lit":"dark"}
            <br/>
            Age={age}
            <br/>
           {/* ///Using arrow Function//// */}
            <button onClick={()=>
                            setLit(!isLit)                    
                                }>
                Toggle Light 
            </button>
            <br/>
            <button onClick={()=> setAge(++age)}>Icrease Age </button>
        </div>
    );

}

export default Room;
