const db = {
    "courses": [ { "_id": "RS101", "name": "Rocket Propulsion", "number": "RS4550", "startDate": "2023-01-10",
    "endDate": "2023-05-15", "image": "rocket-propulsion.jpg"  },
  { "_id": "RS102", "name": "Aerodynamics", "number": "RS4560", "startDate": "2023-01-10",
    "endDate": "2023-05-15", "image": "aerodynamics.jpg"  },
  { "_id": "RS103", "name": "Spacecraft Design", "number": "RS4570", "startDate": "2023-01-10",
    "endDate": "2023-05-15", "image": "spaceship-design.jpg"  } ],
    "assignments":[
        {
          "_id": "A101",
          "title": "Propulsion Assignment",
          "course": "RS101",
          "name": "Propulsion Assignment 1",
          "description": "Introduction to propulsion systems and their applications.",
          "points": 100,
          "dueDate": "2023-04-15",
          "availableFromDate": "2023-03-01",
          "availableUntilDate": "2023-04-15"
        },
        {
          "_id": "A102",
          "title": "Combustion Analysis",
          "course": "RS101",
          "name": "Combustion Analysis Assignment",
          "description": "Detailed analysis of combustion processes in rocket engines.",
          "points": 100,
          "dueDate": "2023-04-22",
          "availableFromDate": "2023-03-08",
          "availableUntilDate": "2023-04-22"
        },
        {
          "_id": "A103",
          "title": "Nozzle Design Project",
          "course": "RS101",
          "name": "Nozzle Design Assignment",
          "description": "Design and analysis of rocket engine nozzles.",
          "points": 150,
          "dueDate": "2023-05-05",
          "availableFromDate": "2023-03-15",
          "availableUntilDate": "2023-05-05"
        },
        {
          "_id": "A201",
          "title": "Aerodynamics Quiz",
          "course": "RS102",
          "name": "Aerodynamics Quiz 1",
          "description": "Quiz covering basic principles of aerodynamics.",
          "points": 50,
          "dueDate": "2023-04-10",
          "availableFromDate": "2023-03-20",
          "availableUntilDate": "2023-04-10"
        },
        {
          "_id": "A202",
          "title": "Flow Analysis",
          "course": "RS102",
          "name": "Flow Analysis Homework",
          "description": "Computational and theoretical analysis of fluid flow.",
          "points": 100,
          "dueDate": "2023-04-17",
          "availableFromDate": "2023-03-27",
          "availableUntilDate": "2023-04-17"
        },
        {
          "_id": "A203",
          "title": "Heating Analysis",
          "course": "RS102",
          "name": "Heating Analysis Project",
          "description": "Analysis of heating effects on aerospace vehicles.",
          "points": 150,
          "dueDate": "2023-05-01",
          "availableFromDate": "2023-04-03",
          "availableUntilDate": "2023-05-01"
        },
        {
          "_id": "A301",
          "title": "Structural Design Task",
          "course": "RS103",
          "name": "Structural Design Assignment",
          "description": "Design of structural components for a spacecraft.",
          "points": 200,
          "dueDate": "2023-05-15",
          "availableFromDate": "2023-04-10",
          "availableUntilDate": "2023-05-15"
        },
        {
          "_id": "A302",
          "title": "Orbital Calculations",
          "course": "RS103",
          "name": "Orbital Calculations Homework",
          "description": "Calculation and analysis of orbital trajectories.",
          "points": 100,
          "dueDate": "2023-04-29",
          "availableFromDate": "2023-04-15",
          "availableUntilDate": "2023-04-29"
        },
        {
          "_id": "A303",
          "title": "Systems Engineering Exam",
          "course": "RS103",
          "name": "Systems Engineering Final Exam",
          "description": "Comprehensive exam on spacecraft systems engineering.",
          "points": 250,
          "dueDate": "2023-05-22",
          "availableFromDate": "2023-05-01",
          "availableUntilDate": "2023-05-22"
        }
      ]
      
  };
  
  export default db;
  