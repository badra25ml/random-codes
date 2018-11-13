//sorting function

var Arr = [5,2,5,8,1,3,50,23,40,10];
function mySort(Arr){
   for(var i = 0; i< Arr.length; i++){
       var key = Arr[i];
       var j = i-1;
       while(j >= 0 && key < Arr[j]){
           Arr[j+1] = Arr[j];
           j = j - 1;
       }
       Arr[j+1] = key;
   }
   return Arr;
}
console.log(mySort(Arr));
// ------------------------------------------------------------------------
// let add = (n) => {
//     let total = 0;
//      for (let i = 1; i<= n; i++){
//       total += i;
//      }
//     return total;
// }
// console.log(add(6))

//--------------------------------------------------------------------------

//var Arr = [1, 4, 0, 2, 3, 5];
//var final = [];
//var first = [];
//var second = [];
//function findSum(Arr) {
//    for (var i = 0; i < Arr.length; i = i + 2) {
//        for (var j = 1; j < Arr.length; j = j + 2) {
//            if (Arr[i] + Arr[j] === 5) {
//
//                final.push([Arr[i], Arr[j]]);
//            }
//            else{
//
//            }
//        }
//    }
//    return final;
//}
//console.log(findSum(Arr))

//---------------------------------------------------------------------
//var arr = [1,2,3,4,[5,6,7,[8,[9]]],[10],12];
//function type(ar){
//    for(var i=0; i<ar.length; i++){
//        if(typeof(ar[i]) !== 'number'){
//            return ar[i]
//        }
//    }
//};
//
//function flatten(arr){
//    var content = [];
//    var notNumbers = [];
//    content += arr.join();
//    var test = content.split(',');
//
//    for(var i=0; i< test.length; i++
//    ){
//         //console.log(test[i])
//    }
//    return notNumbers;
//
//}
//console.log(flatten(arr))
