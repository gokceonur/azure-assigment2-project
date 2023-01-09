function translateText() {
    const inputText = document.getElementById("input-text").value;
    var requestBody = [{
      "text": inputText
    }];

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");

    var raw = JSON.stringify({
      "text": inputText
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://translator.westeurope.cloudapp.azure.com:80/translator/", requestOptions)
      .then(response => response.text())
      .then((result) => {
        const json = JSON.parse(result)
        console.log(result)
        document.getElementById("output-text").innerHTML = json.translation
      })
      .catch(error => console.log('error', error));
    
}

const dummy = [
    {
        "text": "Hello World",
        "translation": "Merhaba Dunya",
        "creation_date": "2020-12-01T12:00:00Z",
        "id": 1
    },
    {
        "text": "Hello World",
        "translation": "Merhaba Dunya",
        "creation_date": "2020-12-01T12:00:00Z",
        "id": 2
    },
    {
        "text": "Hello World",
        "translation": "Merhaba Dunya",
        "creation_date": "2020-12-01T12:00:00Z",
        "id": 3
    },
    {
        "text": "Hello World",
        "translation": "Merhaba Dunya",
        "creation_date": "2020-12-01T12:00:00Z",
        "id": 4
    },
]

const printHistory = () => {
    const history = document.getElementById("history");

    dummy.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = item.text + " -> " + item.translation;
        history.appendChild(div);
    })

}

printHistory();