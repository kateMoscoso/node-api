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

```
mutation{
  addPeople(courseID:"5f2400837571933719a6d379",
    personID:"5f2c415478097163abbf17f0"){
    _id,
    title
  }
}

```
## Variable

```

mutation addPersonToCourse2($course: ID!, $person: ID!) {
  addPeople(courseID: $course, personID: $person) {
    _id
    title
  }
}
```
```
query getCourse2 ($course: ID!){
  getCourse(id: $course){
    _id,
    title,
    people{
      name
    }
  }
}
```

Enums
Los Enums o enumeration types son tipos de datos escalares cuyos valores son configurables. Si definimos un tipo de dato como enum sus valores posibles solamente serán aquellos que se encuentren entre los definidos en el enum.

```
mutation CreateNewCourse($createinput)
```

Interfaces - Tipo Monitor
Las interfaces son muy importantes y útiles cuando nos encontramos con tipos de datos similares. Una interfaz nos permite definir un tipo de dato padre que utilizando la palabra implements va a implementar los campos que tenga definidos dentro del tipo de dato que queramos.

Directivas
Las directivas son una instrucción que permite agregar condicionales a nuestras peticiones. Podemos modificar de manera dinámica nuestra query simplemente añadiendo:

```
@include(if: Boolean) {
  datos
}
```

query getPeopleData ($monitor: Boolean!) {
  getPeople{
    _id,
    name,
    ...on Monitor @include(if: $monitor) {
      phone
    }
  }
}

Unions
Unions permite agrupar varios custom types sin importar si tienen algo en común, su sintaxis es la siguiente:

union SearchResult = CustomType1 | CustomType2 | CustomType3
Al momento de realizar una query que retorna una union podemos identificar el tipo de dato solicitando el campo __typename.

crear indices
> db.courses.createIndex({"$**": "text"})

https://tools.ietf.org/html/rfc7519
