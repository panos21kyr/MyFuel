@extends('layouts.layout')

@section('nav')
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" href="#">MyFuel</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#basicModal-login" href="#">log in</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#basicModal-register" class="nav-link" href="#">register</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#basicModal-select_fuel" class="nav-link" href="#">select fuel</a>
            </li>
        </ul>
    </div>
  </nav>
@endsection

@section('modals')
    @include('includes.login')
    @include('includes.register')
    @include('includes.select_fuel_modal')
@endsection
