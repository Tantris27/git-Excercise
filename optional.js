let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let array2 = [1, "2", "3", 2];


const orderArr = (arr)=>{
  const sortNumArr = arr.filter((el) => typeof el === "number").sort((a, b) => a - b);
  const strArr = arr.filter((el) => typeof el === "string").sort();
    const groupedNumArr = sortNumArr.reduce((acc, currentValue, i, shallowArrayCopy) => {
    	// falls der Wert des aktuellen Elements gleich dem Wert am vorherigen Index im ursprünglichen Array ist,
        if (currentValue === shallowArrayCopy[i - 1]) {
    	//  .pushe das aktuelle Element ins das schon existierende Array im Zielarray
            acc[acc.length - 1].push(currentValue);
            // ansonsten
        } else {
        	// .pushe das aktuelle Element, entweder in einem Array, wenn der Wert am folgenden Index identisch ist
        	// oder einfach so ins Zielarray
            acc.push(currentValue === shallowArrayCopy[i + 1] ? [currentValue] : currentValue);
        }
        // returne das neue Zielarray
        return acc;
    }, []);
    let result = groupedNumArr;
    if(strArr.length>0){
  	const groupedStrArr = strArr.reduce((acc,currentValue)=>{
  		acc[0].push(currentValue)
  		return acc
  	},[[]])
 	return result = groupedNumArr.concat(groupedStrArr);}
  return result
}
orderArr(array);
orderArr(array2)


const array =[1,2,3];
const array2 =[5,3,4,12,7,1,2,6]

const answer=(arr, targetNumber)=>{
	let a, b;
	let result=[];
	arr.reduce((acc,cV,i,shallowCopy)=>{
		for(item of shallowCopy){
			if(cV+item===targetNumber){
				a=cV;
				b=item;
				return a, b;
			}
			return a, b;
		}
		return a, b;
	},0);
	if(typeof a === "undefined"){
		return result="Sorry, nothing adds up here!";
	}else{
		result.push(a,b)
	}
	return result
}
answer(array2, 11)
