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

    public function getFuels($fuel) {
        $fuels = Pricedata::join('gasstations', 'pricedatas.gasStationID', '=', 'gasstations.gasStationID')
                ->distinct()
                ->where('pricedatas.fuelNormalName',$fuel)
                ->get(['gasstations.gasStationID','gasstations.gasStationLat','gasstations.gasStationLong','pricedatas.fuelNormalName','gasstations.fuelCompNormalName']);
        return response()->json($fuels);
    }

    public function getPriceList($gasstation) {
        $pricelist = Pricedata::where('gasStationID',$gasstation)
                    ->get(['fuelName','fuelPrice']);
        return response()->json($pricelist);
    }
}