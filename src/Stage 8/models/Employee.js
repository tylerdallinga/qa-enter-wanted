export default class Employee {
  constructor(id, name, phone, title){
    this.id=id
    this.name=name
    this.phone=phone
    this.title=title
  }
  
  updateName(newName){
    this.name=newName
  }

  updatePhone(newPhone){
    this.phone=newPhone
  }

   updateTitle(newTitle){
     this.title=newTitle
   }
}