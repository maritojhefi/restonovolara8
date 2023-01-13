@extends('dashboard.ventasdiarias.cabecera')
@section('section')
@if (auth()->user()->rol->nombre=="mesero")

@livewire('index-mesero-realtime')
@endif
@endsection   