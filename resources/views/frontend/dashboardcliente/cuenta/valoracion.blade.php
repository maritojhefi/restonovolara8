@extends('frontend.dashboardcliente.master')
@section('content2')
<div class="col">
    <div class="card text-center" id="packages">
<br>
        <h3 class="card-title">Proximamente!</h3>
        <div class="card-body">
            <p>Esta es una funcion que sigue en proceso de pruebas, estara disponible dentro de poco!</p>
            <img src="{{asset('asset-cliente/build.gif')}}"  style="width: 155px!important;">
        </div>
<!-- 
<form>
            <p class="clasificacion">
              <input id="radio1" type="radio" name="estrellas" value="5">
              <label for="radio1">★</label><!--
              <input id="radio2" type="radio" name="estrellas" value="4">
              <label for="radio2">★</label><!--
              <input id="radio3" type="radio" name="estrellas" value="3">
              <label for="radio3">★</label><!--
             <input id="radio4" type="radio" name="estrellas" value="2">
              <label for="radio4">★</label><!--
              <input id="radio5" type="radio" name="estrellas" value="1">
              <label for="radio5">★</label>
            </p>
        </form> -->
    </div>
</div>
@endsection