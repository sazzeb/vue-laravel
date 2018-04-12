<?php

use Illuminate\Http\Request;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::get('/test', function() {
//     return response()->json([
//         'user' => [
//             'firstname' => 'Prince Williams',
//             'Title' => 'From England',
//             'from' => 'England'
//         ]
//     ]);
// });


Route::group(['middleware' => 'auth:api'], function() {
    Route::resource('/products', 'ProductsController');
});