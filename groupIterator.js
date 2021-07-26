/*
    Make the Group class from the previous exercise iterable.
*/

class Group{

    constructor(elem = []){
      this.group=elem;
    }
  
    add(value){
       if(!this.has(value)){
          this.group.push(value);
       }
    }
  
    delete(value){
      this.group = this.group.filter(elem => elem!==value);
    }
  
    has(value){
      return (this.group.indexOf(value) === -1) ? false : true;
    }
  
    static from(arr){
        let initArray = []
        for(let elem of arr){
          initArray.push(elem)
        }
        return new Group(initArray);
      }
  
  }
  
  
  class GroupIterator{
  
    constructor(group){
      this.i = 0;
      this.group = group.group;
    }
    next() {
      if(this.group[this.i] === undefined) return {done: true};
      let value = this.group[this.i];
      this.i += 1;
      return {value, done: false}
    }
  }
  
  Group.prototype[Symbol.iterator] = function(){
    return new GroupIterator(this);
  }
  
  let gr1 = Group.from(["a", "b", "c"]);
  for (let value of gr1) {
    console.log(value);
  }
