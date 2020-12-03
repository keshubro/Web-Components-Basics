//Create template
const template = document.createElement('template');
template.innerHTML = `
    
    <link rel="stylesheet" href="yoyo.css">
   
    <div class="user-card">
        <img />    
        <div>
            <h3></h3>
            <div class="info">
                <p><slot name="email" /></p>
                <p><slot name="phone" /></p>
            </div>
            <button id="toggle-info">Hide Info</button>
        </div>
     </div>
`;

//A custom element
class UserCard extends HTMLElement
{
    //Constructor
    constructor()
    {
        super(); //Calls the cosntructor of HTMLElement
        this.showInfo = true;
        console.log('constructor');
        console.log('1');
        this.attachShadow({ mode: 'open' });
        console.log('2');
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        console.log('3');
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        console.log('4');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
        console.log('5');
        
    }

    toggleInfo()
    {
        console.log('toggle');
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        if(this.showInfo)
        {
            info.style.display = 'block';
            toggleBtn.innerText = "Hide Info";
        }
        else
        {
            info.style.display = 'none';
            toggleBtn.innerText = "Show Info";
        }
    }

    //called when element is inserted into the DOM
    connectedCallback()
    {
        console.log('connectedCallback');
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    }

    //Called when element is removed from the DOM
    disconnectedCallback()
    {
        console.log('disconnectedCallback');
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }


}

///Define custom element
//The function prototype is : CustomElementRegistry.define()
//window.customElements returns a reference to the CustomElementRegistry object
console.log('last line');
window.customElements.define('user-card', UserCard); //Take in 2 params - name of the tag, and the class we want to connect it to. 