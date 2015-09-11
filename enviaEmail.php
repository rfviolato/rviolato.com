<?php 

	$headers = "MIME-Version: 1.1\n";
	$headers .= "Content-type: text/plain; charset=iso-8859-1\n";
	$headers .= "From: postmaster@rviolato.com\n"; // remetente
	$headers .= "Return-Path: rafelv@cacho.la\n"; // return-path

	$emailDestino = "rafaelv@cacho.la";
	$emailsender = "postmaster@rviolato.com";

	date_default_timezone_set("America/Sao_Paulo");

	$assunto = "Contato rviolato.com";
	$data = date("d/m/y")." às ".date("H:i");
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);	
	$email = $request->email;
	$msg = $request->message;
	$name = $request->name;
	$mensagem = "\n\nData:".$data."\nNome:".$name."\nEmail:\n".$email."\n\nMensagem:\n".$msg;

	if(!mail($emailDestino, $assunto, $mensagem, $headers ,"-r".$emailsender)){ // Se for Postfix
	    $headers .= "Return-Path: " . $emailsender; // Se "não for Postfix"
	    mail($emailDestino, $assunto, $mensagem, $headers );
	}

	//mail($emailDestino, "Mensagem Website Raízes Culinárias, enviada em:".$data, $mensagem, $headers);		
?>