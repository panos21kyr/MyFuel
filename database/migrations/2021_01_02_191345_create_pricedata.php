<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePricedata extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pricedata', function (Blueprint $table) {
            $table->id();
            $table->string('fuelNormalName');
            $table->string('fuelName');
            $table->decimal('fuelPrice', $precision = 4, $scale = 3);
            $table->tinyInteger('isPremium',1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pricedata');
    }
}
