const mongoose = require('mongoose');
const mongoDBurl = 'URL to your account and database in MongoDB. (DO NOT PUSH THIS TO GITHUB)'
mongoose.connect('mongoDBurl',
  { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', () => { console.log("Could not connect") });

const StudentModel = new mongoose.model('Student', new mongoose.Schema({
  name: String,
  age: Number,
  gender: Boolean
}));

const ClassModel = new mongoose.model('Class', new mongoose.Schema({
  name: String,
  teacher: String
}));

const createStudent = async (name, age, gender) => {
  const student = new StudentModel({ name: name, age: age, gender: gender });
  await student.save();
  console.log("New student has been saved to the database");
};


const deleteStudentWithId = async (studentId) => {
  const response = await StudentModel.findOneAndDelete({ _id: studentId });
  console.log(response)
  return response
}


const getStudentsWithAgeBiggerThan = async (age) => {
  const students = await StudentModel.find({ age: { '$gte': age } });
  return students
}

const getStudentsWithName = async (name) => {
  const students = await StudentModel.find({ name: 'Ion' });
  return students;
}

db.once('open', async function () {
  // Create students
  //createStudent("Ion", 14, true);
  //createStudent("Ion", 17, true);
  //createStudent("Valera", 25, true);
  //createStudent("Bob", 35, false);

  // List students based on condition  
  //console.log("students with name Ion")
  //console.log(await getStudentsWithName("Ion"));
  //console.log("students older than 18")
  //console.log(await getStudentsWithAgeBiggerThan(18));

  // Remove students
  deleteStudentWithId('60926c540f87a401870259e7')

});
