var select = document.getElementById('ponto')
const map = document.querySelector('.maps')
let senai = false
let msg

select.addEventListener('change', function () {
    mapa = select.value
    if (mapa == 'sesi') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62952.193519722394!2d-35.80697536468503!3d-9.551048187403829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70147f933f998af%3A0xfe79e31e2bb00e8d!2sCentro%20de%20Educa%C3%A7%C3%A3o%20e%20Tecnologia%20Sesi!5e0!3m2!1spt-BR!2sbr!4v1696559732630!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    } else if (mapa == 'terminal') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62952.22571163244!2d-35.80697544314255!3d-9.550874052824394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70147f7ce1f1fc3%3A0xe45d835e9b564f6a!2sTerminal%20do%20Benedito%20Bentes!5e0!3m2!1spt-BR!2sbr!4v1696559883806!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    } else if (mapa == 'senai') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.4314185568633!2d-35.75787452567893!3d-9.558028000566793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70148111e7d831d%3A0x47e7423e7015452c!2sSenai%20Alagoas%20-%20Unidade%20Tabuleiro!5e0!3m2!1spt-BR!2sbr!4v1696943572951!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        senai = true
    } else if (mapa == 'shopping') {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15737.695221637177!2d-35.76434274458005!3d-9.558686399999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014817409eaff5%3A0x8bc3f2107110bf1e!2sShopping%20P%C3%A1tio%20Macei%C3%B3!5e0!3m2!1spt-BR!2sbr!4v1696559455667!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
})
function onibus() {
    var mensagem = new SpeechSynthesisUtterance();
    setTimeout(() => {
        if (senai) {
            mensagem.text = "704 Benedito Bentes / Ponta Verde, 104 Benedito Bentes / Trapiche, 048 Benedito Bentes/Centro";
            speechSynthesis.speak(mensagem);
        } else {
            mensagem.text = "802 Benedito Bentes / colina, 217 Benedito Bentes / Mercado, 704 Benedito Bentes / Ponta Verde, 104 Benedito Bentes / Trapiche, 048 Benedito Bentes/Centro";
            speechSynthesis.speak(mensagem);
        }
    }, 1700);
}