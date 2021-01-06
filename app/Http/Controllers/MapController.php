<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gasstation;
use App\Pricedata;
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

    public function getFuels($fuel){
        $fuels = Pricedata::where('fuelNormalName',$fuel)->get('gasStationID');
        return response()->json($fuels);
    }
}
