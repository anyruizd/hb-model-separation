export default class StudentList {
  constructor (list = []) {
    this.list = list
  }

  /**
   * This will add a new student to the list
   * @param {String} name 
   */
  add(name) {
    if(!this.list.includes(name)) {
      this.list.push(name)
    }
  }

  /**
   * Remove student from the list
   * @param {String} name 
   */
  remove(name) {
    if(this.list.includes(name)){
      const index = this.list.indexOf(name)
      this.list.splice(index, 1)
    }
  }

  /**
   * @return {Array}
   */
  all() {
    return this.list
  }
}
