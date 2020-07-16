/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        };
        get name() 
        {return this.firstname + this.lastname}
        set name(name)
        {this.name = this.firstname + ' ' + this.lastname}
        
        static greeting = "hello";

    }

    document.getElementById('run').onclick = () => {
        let Joe = new Person("Joe","Shmoe");
        console.log(Joe.name);
        Joe.firstname = "Pete";
        Joe.lastname = "Pauwels";       
        console.log(Joe.name);        
    }

})();
