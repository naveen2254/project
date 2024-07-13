let a=[
                "Initializing Hack tool...  ",  
 
                             "Inialised" ,
  
                 "connecting to Instagram... ",

  
                " Connecting to server 1...",
  
              " Connection failed retrying...",

                  "Connecting to server2", 
  
                  "Connected successfully",
  
                   "Username pallavi gupta", 
  
                  "Trying brute force" ,
  
               "200k password tried..",
  
                " Match not found",
  
                 "Trying rainbow.......",
  
                 " Again 200k password tried..",
  
                      " Match  found",
  
                   "Accesing acount",
  
                    "Hack successful"
  
]
const sleep= async(seconds)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => { resolve (true) },seconds * 2000)
  })
}
const showHack = async(message)=>{
 await sleep(3)
 // console.log(message)
  text.innerHTML = text.innerHTML + message + "<br>"
}
( async ()=>{
  for(let i=0;i<a.length;i++){
     await showHack(a[i])
  }
})()
