console.log("Testing...")
// for install or use database install this or type in Terminal (npm install mysql)
var mysql = require('mysql')
var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        pass:'',
        database: 'dbNode'
        })
    
    con.connect((err)=>{
        if(err) throw err;
        console.log("DataBase Connected Successfuly.")
                    // ================= this is for create database ===============
                    // con.query('CREATE DATABASE dbNode ', (err,resul)=>{
                    //     if(err) throw err;
                    //     console.log('Node DataBase Created!')
                    // })
                    // ==================this is for create table in database====================
                    // var sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY , name VARCHAR(25) , address VARCHAR(200))'
                    //          // FOR ADD NEW IN DATABASE
                    // var sql = 'ALTER TABLE customers ADD COLUMN email VARCHAR(30)'
                    // con.query(sql,(err)=>{
                    //     if(err) throw err;
                    //     console.log("Table Created")
                    // })
        var sql = 'INSERT INTO customers(name,address,email) VALUES("Noori","kabul","example@gmail.com")'
        con.query(sql,(err)=>{
        if(err) throw err;
        console.log("user added")
        })
    })