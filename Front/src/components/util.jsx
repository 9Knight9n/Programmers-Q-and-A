export const encodeList=(list,selected)=>{
    
    let result = "";
    for(let k=0;k<list.length;k++)
    {
        result += "0";
    }
    if (!selected){
        return result   
    }
    // console.log(result)
    for(let i = 0;i<selected.length;i++)
    {
        const condition = (element) => element.value === selected[i].value;
        let index = list.findIndex(condition)
        // console.log( selected[i] ," index is ",index)
        result = result.substring(0, index) + '1' + result.substring(index + 1);
    }
    return result;
}
export const decodeList=(list,selected)=>{
    let result = [];
    for(let k=0;k<list.length;k++)
    {
        if(selected.charAt(k)==='1')
            result.push(list[k])
    }
    return result;
    // console.log(result)
}