angular.module("minhasDiretivas", [])
.directive("meuPainel", function() {

	var ddo = {};

	ddo.restric = "AE";

	ddo.scope = {
		titulo : "@"
	};

	ddo.transclude = true;

	ddo.templateUrl = "js/directives/meu-painel.html"

	/*
	ddo.template = 
		'<div class="panel panel-default">'
	+	'	<div class="panel-heading">'
	+	'		<h3 class="panel-title text-center">{{titulo}}</h3>'
	+	'	</div>'
	+	'	<div class="panel-body" ng-transclude>'
	+	'	</div>'
	+	'</div>';
	*/

	return ddo;
})
.directive("minhaFoto", function() {
	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		titulo : "@",
		url : "@"		
	};

	ddo.template = "<img class='img-responsive center-block' src='{{url}}' alt='{{titulo}}'>";

	return ddo;
})
.directive("meuBotaoPerigo", function() {
	var ddo = {};

	ddo.restrict = "E";

	ddo.scope = {
		nome : "@",
		acao : "&"
	};

	ddo.template = "<button class='btn btn-danger btn-block' ng-click='acao(foto)'>{{nome}}</button>";

	return ddo;
})
.directive("meuFocus", function() {
	var ddo = {};
	ddo.restrict = 'A';
	/*
	ddo.scope = {
		focado : '='
	};
	*/

	ddo.link = function(scope, element) {
		/*
		scope.$watch("focado", function() {
			if (scope.focado) {
				element[0].focus();
				scope.focado = false;
			}
		});
		*/
		scope.$on("fotoCadastrada", function() {
			element[0].focus();
		});
	}

	return ddo;
})
.directive("meusTitulos", function() {
	var ddo = {};
	ddo.restrict = "E";
	ddo.template = "<ul><li ng-repeat='titulo in titulos'>{{titulo}}</li></ul>";
	ddo.controller = ["$scope", "recursoFoto", function($scope, recursoFoto) {
		recursoFoto.query(function(fotos) {
			$scope.titulos = fotos.map(function(foto) {
				return foto.titulo;
			});
		});
	}];
	return ddo;
});