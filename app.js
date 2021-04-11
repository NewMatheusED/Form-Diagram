$(function() {
    fadeForm()
    resetarInput()

    function fadeForm() {
        $('.btn').click(function() {
            $('form').fadeIn();
            $('body').css('background-color', 'rgba(0, 0, 0, 0.3)');
        })

        $('.closeBtn').click(function() {
            $('form').fadeOut();
            $('body').css('background-color', 'rgba(255, 255, 255, 1)');
        })
    }

    function resetarInput() {
        $('input[type=text]').focus(function(){
            resetCampo($(this))
        })

        $('input[type= text]').click(function(){
            resetCampo($(this))
        })
    }

    function campoIncorreto(el) {
        el.css('border', '1px solid red')
        el.css('color', 'red')
        el.val('Campo inválido')
    }

    function resetCampo(el) {
        el.css('border', '1px solid #ccc')
        el.css('color', 'black')
        el.val('')
    }


    function verificarNome(nome) {
        if(nome == '') return false

        if(nome.match(/^[A-Z]{1}[a-z]{1,}$/) == null) return false
    }

    function verificarData(data) {
        if(data == '') return false

        if(data.match(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/) == null) return false
    }

    function verificarTelefone(telefone) {
        if(telefone == '') return false

        if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null) return false
    }

    function verificarEmail(email) {
        if(email == '') return false
        
        if(email.match(/^([a-z0-9._-]{1,})+@+([a-z.]{1,})$/) == null) return false
    }
    
    $('form').submit(function(){

        let nome = $('input[name="nome"]').val();
        let data = $('input[name="data"]').val();
        let telefone = $('input[name="telefone"]').val();
        let email = $('input[name="email"]').val();

        if(verificarNome(nome) == false) {
            campoIncorreto($('input[name="nome"]'))
        }else if(verificarData(data) == false) {
            campoIncorreto($('input[name="data"]'))
        }else if(verificarTelefone(telefone) == false) {
            campoIncorreto($('input[name="telefone"]'))
        }else if(verificarEmail(email) == false) {
            campoIncorreto($('input[name="email"]'))
        }else{
            alert("Formulário enviado")
            return true
        }


        return false
    })
})