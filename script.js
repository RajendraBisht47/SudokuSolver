function levelPage()
{
    window.location.href="levelPage.html";
}
function createPage()
{
    window.location.href="createPage.html";
}

function level1(id){
    // console.log(id.dataset.level);
    window.location.href="level1.html";
}
function level2(id){
    // console.log(id.dataset.level);
    window.location.href="level2.html";
}
function level3(id){
    // console.log(id.dataset.level);
    window.location.href="level3.html";
}
function empty(id){
    ele=document.getElementById("reply");
    ele.innerHTML='<span style="color: red;">Fill all box</span>';
}
function digit(){
    ele=document.getElementById("reply");
    ele.innerHTML='<span style="color: red;">Input range must be 1 to 9</span>';
}

function atleast(){
    ele=document.getElementById("reply");
                                ele.innerHTML='<span style="color: red;">Fill atleast 15 box.</span>';
}
function notValid(){
    ele=document.getElementById("reply");
                                ele.innerHTML='<span style="color: red;">No solution possible.</span>';
}

function submit(){


    let rows=9;
    let cols=9;
    let array=new Array(rows);
    for(let i=0;i<rows;i++)
        {
            array[i]=new Array(cols);
        }

        let count=0;
        let bre=0;
    for(let i=0;i<9;i++)
        {
            
            for(let j=0;j<9;j++)
                {
                    let id=i.toString()+j.toString();
                    ele=document.getElementById(id);
                    if (ele.value === '' || ele.value === null || ele.value === undefined)
                    {
                        bre++;
                        empty(id);
                        break;
                    }
                    else if(ele.value<1||ele.value>9)
                        {

                            bre++;
                            digit();
                            break;
                        }
                    else{
                        count++;
                        array[i][j]=ele.value;
                    }
                }
                if(bre==1)
                    {
                        break;
                    }
        }
        if(count==81)
        {
                let result=valid(array);
                if(result)
                    {
                        ele=document.getElementById("reply");
                        ele.innerHTML='<span style="color: green;">Correct. Try next</span>';

                        let grid=document.getElementById("grid");

                        grid.style.borderColor="green";
                    }
                    else{
                        ele=document.getElementById("reply");
                        ele.innerHTML='<span style="color: red;">Wrong. try again</span>';
                    }
        }
}

// function valid(array){

//     for(let i=0;i<9;i++)
//     {
//         let arr=new Array(9);
//         for(let j=0;j<9;j++)
//         {      
//                 if(arr.includes(array[i][j]))
//                     {
//                         return false;
//                     }
//                     else{
//                         arr.push(array[i][j]);
//                     }
             
//         }
//     }
//     for(let i=0;i<9;i++)
//     {
//         let arr=new Array(9);
//         for(let j=0;j<9;j++)
//         {
           
//                 if(arr.includes(array[j][i]))
//                     {
//                         return false;
//                     }
//                     else{
//                         arr.push(array[j][i]);
//                     }
            
             
//         }
//     }
    
//     for(let row=0;row<3;row++)
//     {
//         for(let col=0;col<3;col++)
//         {
//             let i=row*3;
//             let j=col*3;
//             let arr=new Array(9);
//             for(let i1=i;i1<i+3;i1++)
//             {
//                 for(let j1=j;j1<j+3;j1++)
//                 {
                   
//                         if(arr.includes(array[j1][i1]))
//                             {
//                             return false;
//                             }
//                             else{
//                             arr.push(array[j1][i1]);
//                             }     
//                 }
//             }
//         }
//     }
//     return true;
// }



function valid(board) {
    const size = 9;
    const boxSize = 3;

    function isValidGroup(group) {
        const seen = new Set();
        for (let num of group) {
            if (num !== '.' && seen.has(num)) {
                return false;
            }
            seen.add(num);
        }
        return true;
    }

    // Check rows
    for (let row = 0; row < size; row++) {
        if (!isValidGroup(board[row])) {
            return false;
        }
    }

    // Check columns
    for (let col = 0; col < size; col++) {
        const column = [];
        for (let row = 0; row < size; row++) {
            column.push(board[row][col]);
        }
        if (!isValidGroup(column)) {
            return false;
        }
    }

    // Check 3x3 subgrids
    for (let row = 0; row < size; row += boxSize) {
        for (let col = 0; col < size; col += boxSize) {
            const box = [];
            for (let i = 0; i < boxSize; i++) {
                for (let j = 0; j < boxSize; j++) {
                    box.push(board[row + i][col + j]);
                }
            }
            if (!isValidGroup(box)) {
                return false;
            }
        }
    }

    return true;
}


async function display(array)
{
    let count=0;
    for(let i=0;i<9;i++)
        {
            for(let j=0;j<9;j++)
                {
                    if(array[i][j]!=".")
                        {
                            count++;
                        }
                }
        }
        if(count<15)
        {
                atleast();
                
        }
        else{
            console.log("Solving strated..")
    let solve= await sudokuSolver(array);

    //display code .
    for(let i=0;i<9;i++)
            {
                
                for(let j=0;j<9;j++)
                    {
                        let id=i.toString()+j.toString();

                        ele=document.getElementById(id);
                        if(ele.value.trim()==='')
                            {
                                ele.style.color="red"
                        ele.value=solve[i][j];

                        
                            }
                    }
    
                        
            }
        }
    
}


function sudokuSolver(array){
    return new Promise((resolve) => {
        
        //for block element .
        let block=new Array(9);
        for(let i=0;i<9;i++)
        {
            block[i]=new Array();
        }
        
        for(let row=0;row<3;row++)
        {
        for(let col=0;col<3;col++)
        {
            let i=row*3;
            let j=col*3;
           // console.log(row*3+col);
            for(let i1=i;i1<i+3;i1++)
            {
                for(let j1=j;j1<j+3;j1++)
                {
                   if(array[i1][j1]!=".")
                   {
                       block[row*3+col].push(array[i1][j1]);
                   }
                }
            }
            }
        }
        
        //above code is for storing block element.
        
        
        let finded=false;
        fun(block,array);
        
        
        function fun(block,array)
        {
            if(finded)
            {
                return;
            }
        
        for(let row=0;row<3;row++)
        {
        for(let col=0;col<3;col++)
        {
            let i=row*3;
            let j=col*3;
           // console.log(row*3+col);
            for(let i1=i;i1<i+3;i1++)
            {
                for(let j1=j;j1<j+3;j1++)
                {
                   if(array[i1][j1]==".")
                   {
                       let index=row*3+col;
                       for(let value=1;value<=9;value++)
                       {
                           if(!block.includes(value)&&!array[i1].includes(value)&&!array.map(d => d[j1]).includes(value))
                           {
                               block[index].push(value);
                               array[i1][j1]=value;
                               
                               fun(block,array);
                               if(!finded){
                                   block[index].pop();
                               array[i1][j1]=".";
                               }
                               
                           }
                       }
                       return;
                   }
                   
                }
            }
        }
        }
        
        finded=true;
        
        
        }
        
        console.log("Problem solved");
    
    resolve(array);
    
});
}


function solve(){
    let rows=9;
    let cols=9;
    let array=new Array(rows);
    for(let i=0;i<rows;i++)
    {
        array[i]=new Array(cols);
    }


    let bre=0;
    for(let i=0;i<9;i++)
        {
            
            for(let j=0;j<9;j++)
                {
                    let id=i.toString()+j.toString();
                    ele=document.getElementById(id);


                    if (ele.value === '' || ele.value === null || ele.value === undefined)
                    {
                        array[i][j]=".";
                    }
                    else if(ele.value<1||ele.value>9)
                        {

                            bre++;
                            digit();
                            break;
                        }
                    else{
                        array[i][j]=ele.value;
                    }
                }
                if(bre==1)
                    {
                        break;
                    }
        }

        if(bre==0)
        {
                let result=valid(array);
                console.log("validity:"+result)
                if(!result)
                {
                    notValid();
                }  
                //if valid problem;

                else
                {
                    
                    // const solve = [
                    //     [5, 3, 0, 0, 7, 0, 0, 0, 0],
                    //     [6, 0, 0, 1, 9, 5, 0, 0, 0],
                    //     [0, 9, 8, 0, 0, 0, 0, 6, 0],
                    //     [8, 0, 0, 0, 6, 0, 0, 0, 3],
                    //     [4, 0, 0, 8, 0, 3, 0, 0, 1],
                    //     [7, 0, 0, 0, 2, 0, 0, 0, 6],
                    //     [0, 6, 0, 0, 0, 0, 2, 8, 0],
                    //     [0, 0, 0, 4, 1, 9, 0, 0, 5],
                    //     [0, 0, 0, 0, 8, 0, 0, 7, 9]
                    // ]

                    // for(let i=0;i<9;i++)
                    //     {
                            
                    //         for(let j=0;j<9;j++)
                    //             {
                    //                 let id=i.toString()+j.toString();

                    //                 ele=document.getElementById(id);
                    //                 if(ele.value.trim()==='')
                    //                     {
                    //                         ele.style.color="red"
                    //                 ele.value=solve[i][j];

                                    
                    //                     }
                    //             }
                
                                    
                    //     }
                    display(array);
                } 
        }
           
        
}