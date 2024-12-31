import React, {useState} from "react";
import '../styles/App.css';

const App=()=> {
    
    const [name1, setName1]=useState("");
    const [name2, setName2]=useState("");
    const [relationvar, setRelationvar]=useState("");

    function calcRelation(name1, name2)
    {

        if(name1===""||name2==="")
        {
            alert("Please Enter valid input");
            return; 
        }
        const obj1={};
        const obj2={};

        for(let i=0;i<name1.length;i++)
        {
            if(obj1.hasOwnProperty(name1.charAt(i)))
            {
                obj1[name1.charAt(i)]++;
            } 
            else
            {
                obj1[name1.charAt(i)]=1;
            }
        }
        for(let i=0;i<name2.length;i++)
        {
            if(obj2.hasOwnProperty(name2.charAt(i)))
                {
                    obj2[name2.charAt(i)]++;
                } 
                else
                {
                    obj2[name2.charAt(i)]=1;
                }
        }


        let anslen=name1.length+name2.length;

        for(let key in obj1)
        {
            if(obj2.hasOwnProperty(key))
            {
                let minone=Math.min(obj1[key],obj2[key]);
                anslen=anslen-2*minone;
            }
        }

        

        let relationint=parseInt(parseInt(anslen)%6);


        if(relationint===1)
        {
            setRelationvar("Friends");
        }
        else if(relationint===2)
        {
            setRelationvar("Love");
        }
        else if(relationint===3)
        {
            setRelationvar("Affection");
        }
        else if(relationint===4)
        {
            setRelationvar("Marriage");
        }
        else if(relationint===5)
        {
            setRelationvar("Enemy");
        }
        else
        {
            setRelationvar("Siblings");
        }
    }

        return(
            <div id="main">
               <input type="text" data-testid="input1" name="name1" placeholder="Enter first name" value={name1} onChange={(e)=> setName1(e.target.value)}/>
               <input type="text" data- testid="input2" name="name2" placeholder="Enter second name" value={name2} onChange={(e)=> setName2(e.target.value)}/>
               <button style={{color: 'skyblue'}} data-testid="calculate_relationship" name="calculate_relationship" onClick={()=> calcRelation(name1,name2)}> Calculate Relationship Future</button>
               <button style={{color: 'skyblue'}} data-testid="clear" name="clear" onClick={()=> {setName1(""); setName2(""); setRelationvar("");}}> Clear</button>
               <br/>
               <h3 data-testid="answer">{relationvar}</h3>
            </div>
        )
}


export default App;
