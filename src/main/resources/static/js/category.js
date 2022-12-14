function guardarInformacionCategory(){

    $("#resultado").empty();

    let myData ={name:$("#nameCategory").val(),description:$("#descriptionCategory").val()}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://143.47.124.121:81/api/Category/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}

function traerInformacionCategory(){
    
    $.ajax(
              {
                url:'http://143.47.124.121:81/api/Category/all',
                type:"GET",
                datatype:"JSON",
                success:function(respuesta){
                    pintarRespuestaCategory(respuesta);
                  
                }
                    
              }
          );
          

}


function pintarRespuestaCategory(items){
    
     $("#resultado").empty();

    //declarar variables js
    let myTable="<table>";
    let Section="<section class='tablad1'>";
    myTable += "<thead><tr><th>Id</th><th>Name</th><th>Description</th><th>                 </th></tr></thead>";
    Section+=" ";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td><button style='button1' onclick='borrarElementoCategory("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";                       
    }
    Section+=" ";
    /*function p (partyrooms) {
        if(partyrooms){
            alert(partyrooms)     
                console.log(partyrooms.name);
                var nombre1 = partyrooms.name;
                return nombre1;  
        }else{
            alert("error")
        }
    }
    myTable+="<td>"+p (partyrooms)+"</td>";*/
    $("#resultado").append(myTable);
}

function actualizarInformacionCategory(){
                 
    let myData ={id:$("#idCategory").val(),name:$("#nameCategory").val(),description:$("#descriptionCategory").val()}
    let dataToSend = JSON.stringify(myData);
    
    $.ajax (
                {

                    url          : 'http://143.47.124.121:81/api/Category/update',
                    type         : 'PUT',
                    data         :  dataToSend,
                    datatype     :  "JSON",
                    contentType  : 'application/json',                    
                    success      :  function(respuesta){
                                        //console.log(respuesta);
                                        alert("Actualizacion exitosa");
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    }

                }
            );

}

function borrarElementoCategory(idElemento){

    
    let myData ={id:idElemento}
    let dataToSend   = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://143.47.124.121:81/api/Category/' + idElemento,
            type         : 'DELETE',
            data         :  dataToSend,
            contentType  : 'application/json',
            datatype     :  "JSON",
            success      :  function(respuesta){
                                // console.log(respuesta);
                                alert("Borrado exitoso");
                            },
            error       :   function(xhr,status){                                
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }
        }
    );


}