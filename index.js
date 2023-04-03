function tabuada() {
    let num = document.getElementById(`txtn`)
    let tab = document.getElementById(`selTab`)
    tab.innerHTML = ''; // Limpa a tabela antes de adicionar novas linhas
    if (num.value.length === 0) {
        alert(`[ERRO] Digite algum número!`)
    }
    else {
        let n = Number(num.value)
        for (i = 1; i <= 10; i++) {
            let item = document.createElement(`option`)
            item.text = `${n} X ${i} = ${n * i}`
            tab.appendChild(item)
        }
    }
}