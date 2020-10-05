class GlobalCase extends HTMLElement {
    
    set covidDataGlobal(covidDataGlobal) {
        this._covidDataGlobal = covidDataGlobal;
        this.render();
    }

    render() {
        this.innerHTML = `
<style> 
@media only screen and (max-width: 600px) {
    #Global-Case-Container {
        width: 350px !important;
        height: 250px !important;
        margin-left : 70px !important;
        margin-top: 30px;

    }
    #Global-Case-Container h4 {
        font-size : 25px !important;
    }
    #Global-Case-Container .status {
        font-size: 15px !important;
    }
    #Global-Case-Container #confirmed {
        width : 100px !important;
        height : 60px !important;
        margin-top : 20px;
        padding : 20px;
        border-radius : 20px;
        margin-left: 100px !important;
    }
    #Global-Case-Container #recovered {
        width : 100px !important;
        height : 60px !important;
        margin-left: 100px !important;
        margin-top : 20px;


    }
    #Global-Case-Container #death {
        margin-top : 20px !omportant;
        width : 100px !important;
        height : 60px !important;
        margin-right: 110px !important;

    }

}
        #Global-Case-Container {
            width: 700px;
            height: 500px;
            margin: auto 0;
            margin-top: 70px;
            margin-left: 340px;
        }

        #Global-Case-Container h4 {
            font-size: 50px;
            margin-bottom: 30px;
            text-align: center;
        }

        #Global-Case-Container .status {
            font-size: 30px;
            margin-bottom: 10px;
        }
        #Global-Case-Container #confirmed {
            margin-bottom: 50px;
            text-align: center;
            background-color : #e74c3c;
            color : white;
            width : 160px;
            height : 130px;
            margin-top : 20px;
            padding : 20px;
            border-radius : 20px;
            margin-left: 250px;
        }

        #Global-Case-Container #recovered {
            float: left;
            margin-left: 50px;
            background-color : #27ae60;
            color : white;
            width : 160px;
            height : 130px;
            margin-top : 20px;
            padding : 20px;
            border-radius : 20px;
            text-align :center;
        }

        #Global-Case-Container #death {
            float: right;
            margin-right: 50px;
            background-color : #2c3e50;
            color : white;
            width : 160px;
            height : 130px;
            margin-top : 20px;
            padding : 20px;
            border-radius : 20px;
            text-align :center;
        }
</style>


        <div id="Global-Case-Container">
        <h4>Global Case Corona Virus <br> </h4>
        <p class="status" id="confirmed">Confirmed <br> <br>${this._covidDataGlobal.confirmed.value}</p>
        <p class = "status" id="recovered">Recovered <br> <br>${this._covidDataGlobal.recovered.value}</p>
        <p class = "status" id="death">Death <br> <br>${this._covidDataGlobal.deaths.value}</p>
        </div> `;
    }
}

customElements.define("global-case", GlobalCase);

