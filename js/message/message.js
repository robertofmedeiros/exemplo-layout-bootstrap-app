function exibirMensagem(mensagem) {
    // monta o css da mensagem para que fique flutuando na frente de todos elementos da página
    var cssMessage = "display: block; position: fixed; top: 0; left: 50%; width: 40%; padding-top: 10px; z-index: 9999; opacity: 0.9";
    var cssInner = "margin: 0 auto; box-shadow: 1px 1px 5px black;";

    const alerta = `<div id="message" style="${cssMessage}">
                        <div class="alert alert-success" role="alert" style="${cssInner}">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
                            ${mensagem}
                        </div>
                    </div>`;
    $("body").append(alerta);
    $("#message").hide();
    $("#message").fadeIn(500);

    // contador de tempo para a mensagem sumir
    setTimeout(function() {
        $('#message').fadeOut(1000, function(){
            $(this).remove();
        });
    }, 5000); // milliseconds
}