<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GasstationsController;
use App\Http\Controllers\MapController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Auth::routes();

Route::get('/main', [GasstationsController::class, 'index']);

Route::get('/guest', [MapController::class, 'index']);

Route::get('/user', [MapController::class, 'user'])->name('user');

Route::get('/home', 'HomeController@index')->name('home');
