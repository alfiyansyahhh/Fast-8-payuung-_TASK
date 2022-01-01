const Fibonacci= (n) => {
    let hasil = []
     for (let i = 0; i <= n; i++) {      
         if(i <= 1){
           hasil.push(i)
         } else {
           let temp = hasil[i-2]+hasil[i-1]
           if(temp < n){
              hasil.push(temp)
           } 
         }
     }
     console.log("Fibonacci : " + hasil.toString())     
   }
   
   Fibonacci(40)