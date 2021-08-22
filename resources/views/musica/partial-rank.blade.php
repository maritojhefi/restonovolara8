<div class="tab-pane fadeIn" id="tab-ranking">
                   
    <div class="card" id="ranking">
       
               
    </div>
    
</div>
<script>
    document.querySelectorAll(".rank").
   forEach(link=>link.addEventListener("click", function(){
      
   $.ajax({
     method: "get",
     url: "{{route('listarranking')}}",
     data:{'_token': '{{csrf_token()}}'}
   })
     .done(function( approved ) {
         if(approved!='pocos registros')
         {
            leerjson3(approved)

         }
         else
         {
            var error = document.getElementById("tab-ranking");
            error.innerHTML='   <div id="cardactual" class="result-accent p-b-30"><div class="alert alert-rounded alert-danger alert-dismissible fade show" role="alert">Ups! Aun no hay el minimo de registros para formar un ranking...<strong>Empieza pidiendo un tema!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true" class="la la-close"></span></button></div></div>';
            
        setTimeout(function() {
          $("#contenedor").hide(1000);
        }, 6000);
      }
         });
  
     
   }))
   function leerjson3(approved){
    console.log(approved);
    
     var cardrank =  document.getElementById("tab-ranking");
      
      var z=0;
      var a='';
      var b='';
      var c='';
      var d='';
      var e='';
      var f='';
      var g='';
      var h='';
      var i='';
      var j='';
      var k='';
      var l='';
      var m='';

       var card='';
        for(var lista in approved)
        {
           
            a='<li class="list-group-item">'
            b=a+'<a href="javascript:void(0)" class="item d-flex" data-q-action="page-aside-right-open">'
            c=b+'<div class="avatar order-1">'
            d=c+'<img src="'+approved[z].foto+'" alt="contact person" class="rounded-circle w-40 mCS_img_loaded">'
            e=d+'</div>'
            f=e+'<div class="row-content order-2">'
            g=f+'<button type="button" class="btn btn-dark btn-sm btn-rounded"><i class="zmdi zmdi-play-circle zmdi-hc-fw" style="color:white"></i><span class="badge badge-light">'+approved[z].reproducido+'</span></button><small class="text-dark">veces</small>'
            h=g+'<h6 class="list-group-item-heading">'+approved[z].nombre+'</h6>'
            i=h+'<p class="list-group-item-title">'+approved[z].artista+'</p>'
            j=i+''
            k=j+'</div>'
            l=k+'</a>'
            m=l+'</li>'
            card=card+m
            z++  
        }
            
        cardrank.innerHTML=card;
   }
</script>