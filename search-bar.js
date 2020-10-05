class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchCountry").value;
    }

    render() {
        this.innerHTML = `

<style>
        
@media only screen and (max-width: 600px) {
    .search-container {
        margin: auto 0;
        margin-left:45px !important;
    }
}

.search-container{
    margin : auto 0;
    margin-left: 500px;
}

.search-container > input {
    border-radius: 10px;
    height: 40px;
    width: 310px;
    margin-top: 30px;
    border: 3px solid #0097e6;
}

.search-container > button{
    border-radius: 30px;
    margin-top: 20px;
    background-color: #0097e6;
    border: 1px solid #0097e6;
    width: 100px;
    height: 30px;
    color: white;
    font-size: 15px;
    cursor: pointer;
}
</style>
                    
            <div id="search-container" class="search-container">
                <input placeholder="Search Your Country Here" id="searchCountry" type="search">
                <button id="SearchButtonCountry" type="submit">Search</button>
            </div>`;
    
    this.querySelector("#SearchButtonCountry").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);