const form = document.getElementById('form')

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const data = {
    nome: form.elements.nome.value,
    email: form.elements.email.value,
    idade: form.elements.idade.value,
    texto: form.elements.texto.value,
    demaior: form.elements.demaior,
    accept: form.elements.accept.value,
    }

    function imprimir(){
        //Nome, Email,Idade
        console.log('Nome:\n' + data.nome);
        console.log('Email: \n' + data.email);
        const idade = parseInt(data.idade);
        console.log(idade);

        // Checando se o usuário é de maior
        let demaior = document.querySelector('input[name="demaior"]:checked').value;
        console.log('È maior de idade:\n');

        if(idade >= 18 && demaior == "sim"){
            const sim = true;
            console.log(sim);
            
        }if(data.idade <= 18 && demaior == "sim"){
        alert('Você é menor de 18 anos, marque a opção correta!')
    
        }if(data.idade >= 18 && demaior == "nao"){
            alert('Você é maior de 18 anos, marque a opção correta!')

        }if(data.idade <= 18 && demaior == "nao"){
            nao = false;
            console.log(nao);
        }
        
        // Checando se o usuário deseja receber novas informações
        let checked_news = document.querySelector('#accept:checked') !== null;
        console.log('Deseja receber novas informações:')
        console.log(checked_news);

        //Visualizando a mensagem deixada pelo usuário
        console.log('Mensagem: \n' + data.texto);    
    }
    imprimir();

}); 