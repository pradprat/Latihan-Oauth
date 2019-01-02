$('#facebook-login').on('click', function() {
    OAuth.initialize('PmivePp62DyL1GZ_TwOedqs9Mb4');
        OAuth.popup('facebook').done(function(result) {
        console.log(result);
        result.me().done(function(data) {
            console.log(data);
            // $('#facebook-login').html(data.name);
            displayName(data.name,'Facebook');
        })
    });
});

$('#linkedin-login').on('click', function() {
    OAuth.initialize('PmivePp62DyL1GZ_TwOedqs9Mb4')
    OAuth.popup('linkedin').done(function(result) {
        console.log(result);
        result.me().done(function(data) {
            console.log(data);
            // $('#linkedin-login').html(data.name);
            displayName(data.name,'LinkedIn');

        })
    });
});

$('#github-login').on('click', function() {
    OAuth.initialize('PmivePp62DyL1GZ_TwOedqs9Mb4')
    OAuth.popup('github').done(function(result) {
        console.log(result);
        result.me().done(function(data) {
            console.log(data);
            // $('#github-login').html(data.name);
            displayName(data.name,'GitHub');

        })
    });
});

$('.btn-logout').on('click', function() {
    hideName();
});

function hideName() {
    $('#login').removeClass('invisible');
    $('#user').addClass('invisible');
}

function displayName(name,type) {
    $('#name').html('Hai, '+name);
    $('#type').html('Kamu masuk menggunakan <strong>'+type+'</strong>!');
    $('#user').removeClass('invisible');
    $('#login').addClass('invisible');
}

