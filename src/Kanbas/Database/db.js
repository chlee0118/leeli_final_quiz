const db = {
    "courses": [ { "_id": "RS101", "name": "Rocket Propulsion", "number": "RS4550", "startDate": "2023-01-10",
    "endDate": "2023-05-15", "image": "rocket-propulsion.jpg"  },
  { "_id": "RS102", "name": "Aerodynamics", "number": "RS4560", "startDate": "2023-01-10",
    "endDate": "2023-05-15", "image": "aerodynamics.jpg"  },
  { "_id": "RS103", "name": "Spacecraft Design", "number": "RS4570", "startDate": "2023-01-10",
    "endDate": "2023-05-15", "image": "spaceship-design.jpg"  } ],
    "assignments": [{ "_id": "A101", "title": "Propulsion Assignment", "course": "RS101" },
    { "_id": "A102", "title": "Combustion Analysis", "course": "RS101" },
    { "_id": "A103", "title": "Nozzle Design Project", "course": "RS101" },
    { "_id": "A201", "title": "Aerodynamics Quiz", "course": "RS102" },
    { "_id": "A202", "title": "Flow Analysis", "course": "RS102" },
    { "_id": "A203", "title": "Heating Analysis", "course": "RS102" },
    { "_id": "A301", "title": "Structural Design Task", "course": "RS103" },
    { "_id": "A302", "title": "Orbital Calculations", "course": "RS103" },
    { "_id": "A303", "title": "Systems Engineering Exam", "course": "RS103" }]
  };
  
  export default db;
  