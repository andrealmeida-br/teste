<?php
class MyUserClass
{
	protected $dbconn;
	
	public function getUserList()
	{
		return $this->getDbconn()->query('select name from user order by name');
	}
	
	public function setDbconn( $dbconn )
	{
		$this->dbconn = $dbconn;
	}
	
	public function getDbconn()
	{
		if (!isset($this->dbConn) || !( $this->dbConn instanceOf DatabaseConnection )) {
			$this->setDbconn( new DatabaseConnection('localhost','user','password') );
		}
		
		return $this->dbConn;
	}
}