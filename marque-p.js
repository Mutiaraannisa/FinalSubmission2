class MarqueeP extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `

        <style>
                
        marquee{
            background-color: #0984e3;
            height: 50px;
            margin-top: 10px;
        }

        marquee p {
            color : white;
            margin-top: 15px;
        }
        </style>
        
        <marquee>
            <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus --
            Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. ---
            Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
            <p>
        </marquee>
        `
    }
}

customElements.define("marque-p", MarqueeP);