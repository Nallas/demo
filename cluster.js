const http=require('http')
const cluster=require('node:cluster')
const os=require('node:os')
const osNum=os.cpus().length
const app=require('express')()
if(cluster.isMaster){
    console.log(`Master process ${process.pid}`)
    // cluster.fork()
    // cluster.fork()
    for(let i=0;i<osNum;i++){
        cluster.fork() //to create a new worker process. This use,childprocess.fork()
    }
}else{
    console.log(`Worker process ${process.pid} started`)
    const app=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("Home page")
        // cluster.worker.kill()
        // console.log(`${process.pid} killed`)
    }else if(req.url=='/calc'){
        let k=0
        for(let i=0;i<3000000000;i++){
            k++
        }
            res.writeHead(200,{'Content-type':'text/plain'})
            res.end(`calculated page ${k}`)
            // cluster.worker.kill()
            // console.log(`${process.pid} killed`)
    }
})

app.listen(3000,()=>console.log(`Listerning port 4000`))
}