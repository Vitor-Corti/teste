
/*
1
document.querySelector('#btn').addEventListener('click',function(){
    var novo = document.createElement('p')
    novo.textContent = 'Novo valor inserido no container'
    document.querySelector('#cont').appendChild(novo)
    })

2
    document.getElementById('btn').addEventListener('mouseup',function(){
        var nome = document.querySelector('#nome').value

        document.getElementById('texto').innerText = `Bem vindo, ${ nome}!`
    })

        

3
    document.getElementById('btn').addEventListener('click',function(){
        alert('Alerta!!!!!')
    })

    
4
    document.getElementById('quad').addEventListener('dblclick', function(){
        this.style.backgroundColor= 'green'
    })
        
5
    var caixa = document.getElementById('caixa')
    var coordenadas = document.getElementById('coordenadas')

    caixa.addEventListener('mousemove', function(event) {
        var x = event.clientX - caixa.getBoundingClientRect().left
        var y = event.clientY - caixa.getBoundingClientRect().top
        coordenadas.innerText = `Coordenadas: (${x}, ${y})`
    });

    
6
    document.getElementById('quad').addEventListener('mouseenter', function(){
this.style.backgroundColor= 'orange'
    })


    7
    */

 