const sqlite3 =require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){
    db.run(" CREATE TABLE Classrom(Building TEXT, Room_Number NUMBER, Capacity NUMBER)");
    db.run("INSERT INTO Classroom VALUES('Packard', 101, 500)");
    db.run("INSERT INTO Classroom VALUES('Painter',514, 10)");
    db.run("INSERT INTO Classroom VALUES('Taylor', 3128, 70)");
    db.run("INSERT INTO Classroom VALUES('Watson', 100, 30)");
    db.run("INSERT INTO Classroom VALUES('Watson', 120, 50)");
    db.run("CREATE TABLE Department(Department_Name TEXT,Building TEXT,Budget NUMBER)");
    db.run("INSERT INTO Department VALUES('Biology','watson',90000)");
    db.run("INSERT INTO Department VALUES('Comp.Sci.','Taylor', 100000)");
    db.run("INSERT INTO Department VALUES('Elec.Eng','Taylor', 85000)");
    db.run("INSERT INTO Department VALUES('Finance','Painter', 120000)");
    db.run("INSERT INTO Department VALUES('History','Painter', 50000)");
    db.run("INSERT INTO Department VALUES('Music','Packard', 80000)");
    db.run("INSERT INTO Department VALUES('Physics', 'Watson' , 70000)");
    db.each("SELECT Building FROM Classroom",function(err,row){
        if(err)
            console.log(err);
        console.log(row);    
        
    
    });



    


});