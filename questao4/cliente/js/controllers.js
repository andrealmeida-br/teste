var tarefasControllers = angular.module('tarefasControllers', []);

tarefasControllers.controller('TarefasCtrl', function ($scope, $http) {
    $http.get('../servidor/tarefas.json').
    success(function(data) {
    	$scope.tarefas = data.tarefas;
    });
    
    $scope.atualizarPrioridades = function() {
    	var i;
    	for( i=0; i< $scope.tarefas.length; i++ ) {
    		$scope.tarefas[i].Tarefa.prioridade = i;
		}
    	
    	$http.post('../servidor/tarefas/salvarLote.json', $scope.tarefas)
    	.error(function(data, status, headers, config) {
	     	alert('Erro ao salvar as tarefas! Erro:'+status);
    	});
    }
    
    $scope.sortableOptions = {
	    stop: function(e, ui) {
	    	$scope.atualizarPrioridades();
	    }
    }
    
    $scope.addTarefa = function() {
    	var data = {};
    	data.Tarefa = $scope.nova;
    	
    	/*
    	 * Comentado porque o atualizarPrioridades
    	 * também salva
    	 * 
    	$http.post('../servidor/tarefas.json', data)
    	.error(function(data, status, headers, config) {
	     	alert('Erro ordenar as tarefas! Erro:'+status);
    	});
    	*/
    	
    	$scope.tarefas.unshift( data );
    	$scope.atualizarPrioridades();
    	$scope.nova = {};
    }
    
    $scope.editarTarefa = function(index) {
    	$scope.editando = $scope.tarefas[index].Tarefa;
    	$scope.editando.index = index;
    }
    
    $scope.salvarEdicao = function(index) {
    	var idSalvar = $scope.tarefas[index].Tarefa.id;
    	
    	$scope.tarefas[index].Tarefa.titulo = $scope.editando.titulo;
    	$scope.tarefas[index].Tarefa.descricao = $scope.editando.descricao;
    	$http.post('../servidor/tarefas/'+idSalvar+'.json', $scope.tarefas[index])
    	.error(function(data, status, headers, config) {
	     	alert('Erro ao salvar a tarefa! Erro:'+status);
    	});
    	
    	$scope.editando = null;
    }
    
    $scope.cancelar = function() {
    	$scope.editando = null;
    }
    
    $scope.excluirTarefa = function(index) {
    	var idApagar = $scope.tarefas[index].Tarefa.id;
    	$http.delete('../servidor/tarefas/'+idApagar+'.json' )
    		.error(function(data, status, headers, config) {
	     	alert('Houve um erro e a tarefa não foi excluída! Erro:'+status);
    	});
    	$scope.tarefas.splice(index, 1);
    }
});
