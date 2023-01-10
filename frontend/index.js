const translateText = () => {
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

    fetch("https://translator.westeurope.cloudapp.azure.com:443/translator/", requestOptions)
      .then(response => response.text())
      .then((result) => {
        const json = JSON.parse(result)
        console.log(result)
        document.getElementById("output-text").innerHTML = json.translation
        
        const history = document.getElementById("history");
        const div = document.createElement("div");
        div.innerHTML = inputText + " -> " + json.translation;
        history.insertBefore(div, history.firstChild);

      })
      .catch(error => console.log('error', error));
    
}

const getHistory = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://translator.westeurope.cloudapp.azure.com:443/history/", requestOptions)
    .then(response => response.text())
    .then((result) => {
      const json = JSON.parse(result)
      
      const history = document.getElementById("history");

      json.history.forEach((item) => {
          const div = document.createElement("div");
          div.innerHTML = item.date + "  " + item.input + " -> " + item.translation;
          history.append(div);
      })

      console.log(json)
      return json;
    })
    .catch(error => console.log('error', error));
  
}

window.onload = () => getHistory();