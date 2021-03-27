(function(){
    


    function TabelasCar(car){
        const row = document.createElement("tr");
        row.innerHTML+=`
        <td>${car.name}</td>
        <td>${car.marca}</td>
        <td>${car.placa}</td>
        <td>${new Date(car.time).
          toLocaleString("pt-BR",{hour:"numeric",minute:"numeric"})}
        </td>
        <td><button class="delete";>x</button></td>
        `
        document.querySelector("#garage").appendChild(row);
    }

  document.querySelector('#enviar').addEventListener('click',()=>{  
    const name=document.getElementById('name').value 
    const marca=document.getElementById('marca').value 
    const placa=document.getElementById('placa').value 

    if(!name || !marca || !placa){
        alert('Por favor, preencha todos os campos*')}

    const car= {name, marca, placa, time:new Date()}

    const garage= localStorage.garage ? JSON.parse(localStorage.garage):[];

    garage.push(car);
    TabelasCar(car);

    localStorage.garage = JSON.stringify(garage);

    document.getElementById('name').value ="";
    document.getElementById('marca').value  ="";
    document.getElementById('placa').value  ="";

  })
})()