const students =[
    {
        name:"Ali",
        rollNo: 101,
        marks: 450,
        total: 500,
    },
     {
        name: "Sara",
        rollNo: 102,
        marks:  405,
        total:  500,
     },
      {
        name:"Fatima",
        rollNo: 103,
        marks:  470,
        total:  500,
      },
];
const container=
document.getElementById("result-container");
students.forEach(student => {
      let percentage=(student.marks/student.total)*100;
       let grade=
            percentage>=80?
       "A":
            percentage>=70?
       "B":
            percentage>=60?
       "C":
            percentage>=50?
       "D":"Fail";
           container.innerHTML += '<div class="card">' +
           '<h2>'+student.name+ '</h2>'+
           '<p>Roll No:'+student.rollNo+'</p>'+
           '<p>Marks:'+student.marks+'/'+student.total+'</p>'+
           '<p>percentage:'+percentage+'%</p>'+
           '<p>Grade:'+grade+'</p> </div>';
});