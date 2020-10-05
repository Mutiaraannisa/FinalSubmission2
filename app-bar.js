class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();

    }

    render() {
        this.innerHTML = `  
        <style>
        @media only screen and (max-width: 600px) {
            nav li {
                display: block !important;
            }
            nav h2 {
                font-size: 20px;
            }
            nav a{
                position: relative;
                top: -62px;
            }
        }
        
                header {
                    display: inline;
                }

                nav {
                    position: sticky;
                    top:0;
                    background-color: #82ccdd;
                    border-bottom: 1px solid #7f8fa6;
                    box-sizing: border-box;
                    box-shadow: 0px 0px 20px #0097e6;
                    padding: 10px;
                    height: 100px;
                }
                nav ul {
                    margin: auto 0 ;
                    text-align: right;
                    margin-right: 10px;
                }

                nav li {
                    display: inline;
                    padding: 15px;
                    margin: auto 0;
                }

                nav  a{
                    text-decoration: none;
                    text-align: left;
                    font-size: 18px;
                    font-weight: 600;
                    color: #353b48;
                    margin: auto 0;
                    position: relative;
                    bottom: 15px;
                }
                nav a:hover {
                    color : blue;
                }
                nav h2 {
                    text-align: left;
                    margin : auto 0;
                    color:#353b48;
                    font-weight: 600;
                    margin-left: 20px;
                }
</style>      
        <nav>
        <ul>
            <li>
                <h2>Corona Virus Case</h2>
            </li>
            <li class="link">
                <a href="https://covid19.who.int/?gclid=CjwKCAjw_NX7BRA1EiwA2dpg0kKdKwU6n1IFKRGCHdG0zZEqkOkIweW5mKbxR4spNgDDOwiCU5L3UBoCpFAQAvD_BwE" target="_blank"> WHO </a>
            </li>
            <li class="link">
                <a href="https://en.wikipedia.org/wiki/COVID-19_pandemic_by_country_and_territory" target="_blank">About Covid-19</a>
            </li>
        </ul>
        </nav>`

    }
}

customElements.define("app-bar", AppBar);