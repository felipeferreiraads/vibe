$('.form-newsletter').on('submit', e => {
    e.preventDefault()
    $('.form-newsletter').find('button').text('Aguarde...')
    $.post(
        '/wp-content/plugins/newsletter-api/add.php',
        {
            nk: '33510b518d',
            ne: $('.form-newsletter').find('.email').val()
        }
    ).done(response => {
        $('.form-newsletter').find('button').text('Enviar')
        if(response === 'ok') {
            $('.feedback').text('E-mail cadastrado.')
        } else {
            $('.feedback').text('Aconteceu um erro, tente novamente.')
        }
    })
})