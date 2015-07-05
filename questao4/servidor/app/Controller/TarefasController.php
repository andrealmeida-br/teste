<?php
class TarefasController extends AppController 
{
	public $components = array('RequestHandler');
	
    public function index() {
        $tarefas = $this->Tarefa->find('all', array('order' => array('Tarefa.prioridade ASC') ) );
        $this->set(array(
            'tarefas' => $tarefas,
            '_serialize' => array('tarefas')
        ));
    }
    
    public function view($id) {
    	$tarefa = $this->Tarefa->findById($id);
    	$this->set(array(
    			'tarefa' => $tarefa,
    			'_serialize' => array('tarefa')
    	));
    }
    
    public function add() {
    	$this->Tarefa->create();
    	if ($this->Tarefa->save($this->request->data)) {
    		$message = 'Adicionada';
    	} else {
    		$message = 'Error';
    	}
    	$this->set(array(
    			'message' => $message,
    			'_serialize' => array('message')
    	));
    }
    
    public function edit($id) {
    	$this->Tarefa->id = $id;
    	if ($this->Tarefa->save($this->request->data)) {
    		$message = 'Salvo';
    	} else {
    		$message = 'Error';
    	}
    	$this->set(array(
    			'message' => $message,
    			'_serialize' => array('message')
    	));
    }
    
    public function delete($id) {
    	if ($this->Tarefa->delete($id)) {
    		$message = 'Excluído';
    	} else {
    		$message = 'Error';
    	}
    	$this->set(array(
    			'message' => $message,
    			'_serialize' => array('message')
    	));
    }
    
    public function salvarLote() {
    	foreach ( $this->request->data as $tarefa ) {
    		$this->Tarefa->save($tarefa);
    	}
    	$this->set(array(
    			'message' => $this->request->data,
    			'_serialize' => array('message')
    	));
    }
}