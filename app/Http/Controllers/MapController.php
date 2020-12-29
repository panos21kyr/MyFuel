<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gasstation;

class MapController extends Controller
{
    public function index(){
        return view('guest');

    }

    public function user(){
        return view('user');

    }


    public function getData(){
        $coins = Gasstation::all();
        return response()->json($coins);
    }

    public function response(){
        return view('response');
    }
}
