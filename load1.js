let array = [
    [-1,-1,-1,2,6,-1,7,-1,1],
    [6,8,-1,-1,7,-1,-1,9,-1],
    [1,9,-1,-1,-1,4,5,-1,-1],
    [8,2,-1,1,-1,-1,-1,4,-1],
    [-1,-1,4,6,-1,2,9,-1,-1],
    [-1,5,-1,-1,-1,3,-1,2,8],
    [-1,-1,9,3,-1,-1,-1,7,4],
    [-1,4,-1,-1,5,-1,-1,3,6],
    [7,-1,3,-1,1,8,-1,-1,-1]
];
for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
            {
                if(array[i][j]!=-1)
                    {
                        let id=i.toString()+j.toString();
                        let ele=document.getElementById(id);
                        ele.style.color="red"
                        ele.value=array[i][j];
                        ele.readOnly=true;
                    }
            }
    }