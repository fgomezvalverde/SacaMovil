
(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Login */
    $(document).on("click", ".uib_w_10", function(evt)
    {
                    
        var urlLogin = "http://saca-ae.net/WebServiceMobile.asmx?op=Login";

        var soapMessageLogin =
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
            <soap:Body> \
            <Login xmlns="http://saca-ae.net/"> \
            <pMail>' + document.getElementById("txt_correo").value.toString() + '</pMail> \
            </Login> \
            </soap:Body> \
            </soap:Envelope>';
        $.ajax({
            url: urlLogin,
            type: "POST",
            dataType: "xml",
            data: soapMessageLogin,
            complete: endLogin,
            contentType: "text/xml; charset=\"utf-8\""
            });
        
    });
    
     
     //document.getElementById("txt_correo").value
        /* button  #but_prueba */
    
        /* button  #but_prueba */
    
    
        /* button  #but_prueba */
    $(document).on("click", "#but_prueba", function(evt)
    {
         activate_subpage("#selectionsub"); 
    });
    
        
    
    /* Boton de Proyetos en Menu Principal*/
    $(document).on("click", ".uib_w_9", function(evt)
    {
        
        
        var urlGetProyectos = "http://saca-ae.net/WebServiceMobile.asmx?op=GetProyectos";

        var soapMessageGetProyectos =
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
            <soap:Body> \
            <GetProyectos xmlns="http://saca-ae.net/"> \
            <pMail>' + document.getElementById("txt_correo").value.toString() + '</pMail> \
            </GetProyectos> \
            </soap:Body> \
            </soap:Envelope>';
        $.ajax({
            url: urlGetProyectos,
            type: "POST",
            dataType: "xml",
            data: soapMessageGetProyectos,
            complete: endProyectos,
            contentType: "text/xml; charset=\"utf-8\""
            });
        
    });
	
	//Cursos
	    $(document).on("click", ".uib_w_4", function(evt)
    {
        
        
        var urlGetCursos = "http://saca-ae.net/WebServiceMobile.asmx?op=GetCursos";

        var soapMessageGetCursos =
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
            <soap:Body> \
            <GetCursos xmlns="http://saca-ae.net/"> \
            <pMail>' + document.getElementById("txt_correo").value.toString() + '</pMail> \
            </GetCursos> \
            </soap:Body> \
            </soap:Envelope>';
        $.ajax({
            url: urlGetCursos,
            type: "POST",
            dataType: "xml",
            data: soapMessageGetCursos,
            complete: endCursos,
            contentType: "text/xml; charset=\"utf-8\""
            });
        
    });
    
     
     
        /* boton de Comisiones en Menu Principal*/
    $(document).on("click", ".uib_w_5", function(evt)
    {
        
        
        
        
        var urlGetComisiones = "http://saca-ae.net/WebServiceMobile.asmx?op=GetComisiones";

        var soapMessageGetComisiones =
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> \
            <soap:Body> \
            <GetComisiones xmlns="http://saca-ae.net/"> \
            <pMail>' + document.getElementById("txt_correo").value.toString() + '</pMail> \
            </GetComisiones> \
            </soap:Body> \
            </soap:Envelope>';
        $.ajax({
            url: urlGetComisiones,
            type: "POST",
            dataType: "xml",
            data: soapMessageGetComisiones,
            complete: endComisiones,
            contentType: "text/xml; charset=\"utf-8\""
            });
        
        
        
        
    });
    
    }
   document.addEventListener("app.Ready", register_event_handlers, false);
    
    
     function endLogin(xmlHttpRequest, status)
            {
                var name;
             $(xmlHttpRequest.responseXML)
                .find('LoginResult')
                .each(function()
             {
                name= $(this).find('Password').text();
                 
             });
                
                if(name == "1")
                {
                    
                    activate_subpage("#selectionsub"); 
                    
                }
                else
                {
                    alert("Usuario NO Existe "+document.getElementById("txt_correo").value.toString());
                }
            }
    
    /* Funcion para cargar proyectos */
    function endProyectos(xmlHttpRequest, status)
            {
                
                var nombre,id,profesor,inicio,fin,entidad;
                var list_html = "";
                var panel_content = "";
             $(xmlHttpRequest.responseXML)
                .find('AlertaProyectoProfesor')
                .each(function()
             {
                 

                 nombre= $(this).find('PROYECTO').text();
                 id= $(this).find('ID').text();
                 profesor= $(this).find('PROFESOR').text();
                 inicio= $(this).find('INCIO').text();
                 fin= $(this).find('FIN').text();
                 entidad= $(this).find('ENTIDAD').text();
                 
                 
                 
                 panel_content = '<h3>'+nombre+'</h3><br><br><br><p>Profesor: '+profesor+'</p><br><p>Inicio: '+inicio+'</p><br><p>Fin: '+fin+'</p><br><p>Entidad: '+entidad+'</p>';
                 

                 
                 list_html += '<li onclick="getDetalles(this)" data-detalles="'+panel_content+'" id="Proyecto'+id+'"><a href="#detail_page">'+ nombre +'</a></li>';
                 
  
            }); 
                
                $("#list_comisiones5").append(list_html);
                activate_page("#list_page");
            
            }
    
    
    
    /* Funcion para cargar Comisiones */
    function endComisiones(xmlHttpRequest, status)
            {
                
                var nombre,id,profesor,inicio,fin,entidad;
                var list_html = "";
                var panel_content = "";
             $(xmlHttpRequest.responseXML)
                .find('AlertaComisionProfesor')
                .each(function()
             {
                 

                 nombre= $(this).find('COMISION').text();
                 id= $(this).find('ID').text();
                 profesor= $(this).find('PROFESOR').text();
                 inicio= $(this).find('INCIO').text();
                 fin= $(this).find('FIN').text();
                 entidad= $(this).find('ENTIDAD').text();
                 
                 
                 
                 panel_content = '<h3>'+nombre+'</h3><br><br><br><p>Profesor: '+profesor+'</p><br><p>Inicio: '+inicio+'</p><br><p>Fin: '+fin+'</p><br><p>Entidad: '+entidad+'</p>';
                 

                 
                 list_html += '<li onclick="getDetalles(this)" data-detalles="'+panel_content+'" id="Comision'+id+'"><a href="#detail_page">'+ nombre +'</a></li>';
                 
  
            }); 
                
                $("#list_comisiones5").append(list_html);
                activate_page("#list_page");
            
            }
			
    function endCursos(xmlHttpRequest, status)
            {
                
                var nombre,id,profesor,inicio,fin,entidad,grupo,aula,codigo;
                var list_html = "";
                var panel_content = "";
               
             $(xmlHttpRequest.responseXML)
                .find('CursoWS')
                .each(function()
             {
             
                 nombre= $(this).find('Curso').text();
                 id= $(this).find('Id').text();
                 profesor= $(this).find('Profesor').text();
                 inicio= $(this).find('Inicio').text();
				 fin=$(this).find('Fin').text();
				 entidad= $(this).find('Entidad').text();
				 grupo=$(this).find('Grupo').text();
				 aula=$(this).find('Aula').text();
				 codigo=$(this).find('Codigo').text();
                
                 
                 
                 
                 panel_content = '<h3>'+nombre+'</h3><br><br><br><p>Profesor: '+profesor+'</p><br><p>Grupo: '+grupo+'</p><br><p>Aula: '+aula+'</p><br><p>Inicio: '+inicio+'</p><br><p>Fin: '+fin+'</p><br><p>Entidad: '+entidad+'</p>';
                 

                 
                 list_html += '<li onclick="getDetalles(this)" data-detalles="'+panel_content+'" id="Curso'+id+'"><a href="#detail_page">'+ nombre +'</a></li>';
                 
  
            }); 
                
                $("#list_comisiones5").append(list_html);
                activate_page("#list_page");
            
            }

})();



/* Funcion que carga los datos en el detail_page */
function getDetalles(elemento) {

    var detalles = elemento.getAttribute("data-detalles");
    $("#div_detalle").append(detalles);
}


/* Funcion para vaciar algun elemento */
function borrarContenido(elemento) {

    if(elemento == 1){
        $("#list_comisiones5").empty();
    }
    else if(elemento == 2){
        $("#div_detalle").empty();
    }
}


