
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
                    
        var urlLogin = "http://localhost:50297/WebServiceMobile.asmx?op=Login";

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
    
        
    
    
    
        /* boton de Comisiones en Menu Principal*/
    $(document).on("click", ".uib_w_5", function(evt)
    {
        
        
        
        
        var urlGetComisiones = "http://localhost:50297/WebServiceMobile.asmx?op=GetComisiones";

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
                 inicio= $(this).find('INICIO').text();
                 fin= $(this).find('FIN').text();
                 entidad= $(this).find('ENTIDAD').text();
                 
                 
                 
                 panel_content = '<h2>'+nombre+'</h2><br><br><p>Profesor: '+profesor+'</p><br><p>Inicio: '+inicio+'</p><br><p>Fin: '+fin+'</p><br><p>Entidad: '+entidad+'</p>';
                 

                 
                 list_html += '<li onclick="getDetalles(this)" data-detalles="'+panel_content+'" id="Comision'+id+'"><a href="#detail_page">'+ nombre +'</a></li>';
                 
  
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

function borrarContenido(elemento) {

    if(elemento == 1){
        $("#list_comisiones5").empty();
    }
    else if(elemento == 2){
        $("#div_detalle").empty();
    }
}

