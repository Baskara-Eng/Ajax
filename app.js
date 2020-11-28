let textButton = document.querySelector("#text-btn");
let jsonButton = document.querySelector("#json-btn");

textButton.addEventListener('click',()=>{
    //creating axios request

    let xhr= new XMLHttpRequest();
    xhr.open('get','./data/plan_text.txt',async=true);
 

    // sending axios request
    xhr.send();

    //processing axios request

    xhr.onload = ()=>{
        let data = xhr.responseText;
      
        display(data);
        
    }

    let display = (data)=>{
        let textData = document.querySelector("#text-data");
        textData.innerHTML = `<h5>${data}</h5>`
      
    }

})


jsonButton.addEventListener('click',()=>{

    let xhr= new XMLHttpRequest();
    xhr.open('get','./data/myJSON.json',async=true);
 

    // sending axios request
    xhr.send();

    //processing axios request

    xhr.onload = ()=>{
        let data = xhr.responseText;
        let textInfo = JSON.parse(data)
        display(textInfo)
       
        
    }

    let display = (textInfo)=>{
        let htmlTemplate = `<ul>
                <li>ID:${textInfo.id}</li>
                <li>username:${textInfo.username}</li>
                <li>password:${textInfo.password}</li>

        </ul>`;
        
        let jsonData = document.querySelector("#json-data");
        jsonData.innerHTML = htmlTemplate;
        
         
    }
})