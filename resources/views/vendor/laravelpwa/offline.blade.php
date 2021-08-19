@extends('layouts.app')

@section('content')

<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Oh vaya!</strong> no tienes internet <a href="#" class="alert-link">intenta cargar de nuevo aqui!</a>.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true" class="la la-close"></span>
    </button>
</div>


@endsection