import React from 'react'
function TodoListComponent() {
    let a,b,tablec1,tablec2,tablec3,tablec4,tablec5;
    let c1=0,c2=1,c3=2,c4=3,c5=4,tc1=1,se,se2,se20,se23,se21,se22,se1,z=0;
    
    function task(){
        let tables=document.getElementById("tableid");
        let tabler=tables.insertRow(-1);    
        b=document.getElementById("textboxid").value;
        tablec1=tabler.insertCell(c1);
        tablec2=tabler.insertCell(c2);
        tablec3=tabler.insertCell(c3);
        tablec4=tabler.insertCell(c4);
        tablec5=tabler.insertCell(c5);
        tablec1.innerHTML=tc1;
        tablec2.innerHTML=b;
        a=[];
        a.push(z);
        z+=1;
        se2=document.createElement("select");
        se20=document.createElement("option");
        se21=document.createElement("option");
        se22=document.createElement("option");
        se23=document.createElement("option");
        se2.id="myselect";
        se20.value="";
        se20.text="";
        se2.add(se20);
        se21.value="Incomplete";
        se21.text="Incomplete";
        se2.add(se21);
        se22.value="Complete";
        se22.text="Complete";
        se2.add(se22);
        se23.value="Inprogress";
        se23.text="Inprogress";
        se2.add(se23);
        tablec3.appendChild(se2);
        
        se2.addEventListener("change", e => {
            var selectedCountry=e.target.value;
            if(selectedCountry==="Incomplete"){
                tabler.style="background-color:orange";
            }
            else if(selectedCountry==="Complete"){
                tabler.style="background-color:pink";
            }
            else if(selectedCountry==="Inprogress"){
                tabler.style="background-color:lightgreen";
            }
         })
        se1=document.createElement("button");
        se1.innerText="Edit";
        se1.onclick=function (){
            se1.innerText="Complete";
            se1.onclick=function (){
                let x=document.getElementById("textboxid").value;
                tablec2.innerHTML=x;
                se1.innerText="Edit";
            }
        }
        tablec4.appendChild(se1);
        
        se=document.createElement("button");
        se.innerText="Delete";
        tablec5.appendChild(se);
        se.onclick=function (){
            document.getElementById("tableid").deleteRow(a[z]);
        };
        
        
        //se+=1;
        tc1+=1;
    }
  return (
    <React.Fragment>
        <h1 className="title">To-Do List App</h1>
        <input id="textboxid" type="text" placeholder='Enter Task'/><br/>
        <button className="butt" onClick={task}>Add Task</button>
        <div className="tablecontent">
            <table id="tableid">
                {/* <th>
                    <td rowSpan={1}>S.No</td>
                    <td rowSpan={1}>Task</td>
                    <td>Status</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </th> */}
                {/* <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> */}
            </table>
        </div>
        
    </React.Fragment>
  )
}
export default TodoListComponent