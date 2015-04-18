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
        $(":mobile-pagecontainer").pagecontainer("change", "#selectionsub", { reverse: false});
                    
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
                    alert("Usuario Existe");
                    
                }
                else
                {
                    alert("Usuario NO Existe");
                }
            }

    
})();
