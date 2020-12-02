//A custom element
class UserCard extends HTMLElement
{
    //Constructor
    constructor()
    {
        super(); //Calls the cosntructor of HTMLElement
        this.innerHTML = `John Doe`;
    }
}

///Define custom element
window.customElements.define('user-card', UserCard); //Take in 2 params - name of the tag, and the class we want to connect it to. 