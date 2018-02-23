var page = require('page');

var main = document.getElementById('main_container');

page('/', function (ctx , next) {
	main.innerHTML='home';
});

page('/signup', function(ctx , next){
	main.innerHTML='signup';
});

page();