let array = [
    [-1,-1,-1,-1,6,-1,-1,2,7],
    [-1,-1,-1,-1,-1,-1,-1,-1,5],
    [-1,-1,4,-1,9,1,-1,8,-1],
    [-1,-1,8,-1,-1,-1,-1,-1,4],
    [-1,-1,-1,4,3,-1,-1,-1,-1],
    [-1,7,-1,-1,8,-1,-1,3,-1],
    [3,-1,-1,-1,-1,9,-1,-1,1],
    [7,2,-1,1,-1,-1,-1,-1,-1],
    [-1,9,-1,-1,-1,-1,2,-1,-1]
];
for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
            {
                if(array[i][j]!=-1)
                    {
                        let id=i.toString()+j.toString();
                        let ele=document.getElementById(id);
                        ele.value=array[i][j];ele.style.color="red"
                        ele.readOnly=true;
                    }
            }
    }