import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt, { verify } from 'jsonwebtoken'

const app = express();
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));
app.use(cookieParser());
app.use(express.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

const con = mysql.createConnection({
    host:'localhost',
    port:3306,
    database:'test',
    user:'Aakash',
    password:'Astomartin46'
});

con.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log("Mysql is connected successfully");

    }
});

app.post("/login",(req,res)=>{
    const sql = "SELECT * FROM info Where Name = ? and Password = ?";
    con.query(sql,[req.body.email,req.body.password],(err,result)=>{
        if(err) return res.json({Status:"Error in Server", Error:"Error in Server"});
        if(result.length>0){

            const token = jwt.sign({role:"admin",email : result[0].Name},"jwt-secret-key",{expiresIn:'1d'});
            res.cookie('token',token);
            return res.json({Status:"Success",role:"admin",email : result[0].Name})
        }
        else{
            return res.json({Status:"Error", Error:"Wrong email or Password"})
        }
    });
})



// app.get("/dashboard/:email",(req,res)=>{
//     const token = jwt.sign({id : req.body.email},"jwt-secret-key",{expiresIn:1000000000});
//     res.cookie('token',token);
//     console.log(token)

//     return res.json({Status:"Success",id : req.body.email})
// })

app.post("/signup",(req,res)=>{
    console.log(req.body);
    const sql = "INSERT INTO info (`Name`,`Username`,`Password`,`Age`) VALUES (?)";

    const formValues=[
        req.body.email,
        req.body.username,
        req.body.password,
        req.body.age
    ]
    con.query(sql , [formValues] , (err,result) =>{
        if(err) return res.json({Error:"Signup Error"})
        return res.json({Status : "Sucess"});
    })


})

const verifyUser = (req,res,next) =>{
    const token = req.cookies.token;
    if(!token){
        return res.json({Error : "Unauthorized"})
    }
    else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err) return res.json({Error: "Token Wrong"});
            req.role = decoded.role;
            req.email = decoded.email;
            next();
        })
    }

}

app.get("/dashboard",verifyUser,(req,res)=>{
    const email = req.email;
    const sql = "SELECT * FROM info WHERE Name =(?)"
    con.query(sql,email,(err,result)=>{
        if(err) return res.json({Status:"Failure"});
        return res.json({Status: "Success",Result:result})
    })
    
})


app.listen(8081,()=>{
    console.log('Running');
})