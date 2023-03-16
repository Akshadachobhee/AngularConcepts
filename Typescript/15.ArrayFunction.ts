
 function Addition(Arr : number[]) : number
 {
    var sum : number  = 0
    var cnt : number = 0

for(cnt = 0 ; cnt < Arr.length; cnt++)
{
sum = sum + Arr[cnt]

}
return sum
}
 var week : number[] = [10,20,30,40]
 var ret :  number = 0
 ret = Addition(week)
 console.log("Addition is :"+ret)