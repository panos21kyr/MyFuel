<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MapController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("data",[MapController::class,'getData']);

// // 1. GET: Λήψη δεδομένων πρατηρίων και τιμών επιλεγμένου καυσίμου.
Route::get("gasstations/fuels/{fuel}",[MapController::class,'getFuels']);
                            //fuel
                            
// // 2. GET: Πλήθος πρατηρίων (ακέραιος), μέγιστη, ελάχιστη και μέση τιμή ανά lt (με 3 δεκαδικά).
// Route::get("gasstations",[MapController::class,'']);

// // 3. GET: Λήψη τιμοκαταλόγου ενός πρατηρίου.
Route::get("gasstations/{id}",[MapControllerr::class,'getPriceList']);
                    // gasstation

// // 4. POST: LogIn χρήστη (η database έχει ήδη χρήστες).
// Route::post("data",[UsersController::class,'']);

// // 5. POST: Αποστολή δεδομένων παραγγελίας από πλευράς χρήστη (ποσότητα).
// Route::post("data",[OrdersController::class,'']);

// // 6. GET: Λήψη παραγγελιών πρατηρίου
// Route::get("data",[UsersController::class,'']);

// // 7. PUT: Αλλαγή τιμής σε καύσιμο
// Route::put("data",[UsersController::class,'']);

// // 8. DELETE: Διαγραφή παραγγελίας από πρατηριούχο.
// Route::delete("data",[UsersController::class,'']);