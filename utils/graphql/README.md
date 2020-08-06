```
{
  getStudents{
    name
  }
}
```

## Edit
```
mutation{
  editCourse(_id: "5f2400837571933719a6d379", input:{
    title: "Javascript Basic"
  }) {
    teacher
    topic
  }
}

```

## Create 
```
mutation{
  createStudent(input:{
    name: "Jorge",
    email:"jorge@gmail.com"
  }){
    _id,
    name,
    email
  }
}
```

## Update
mutation{
  addPeople(courseID:"5f2400837571933719a6d379",
    personID:"5f2c415478097163abbf17f0"){
    _id,
    title
  }
}