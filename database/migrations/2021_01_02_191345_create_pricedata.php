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
            $table->id('productID');
            $table->unsignedBigInteger('gasStationID');
            $table->unsignedBigInteger('fuelTypeID');
            $table->unsignedBigInteger('fuelSubTypeID');
            $table->string('fuelNormalName');
            $table->string('fuelName');
            $table->decimal('fuelPrice', 4, 3);
            $table->timestamp('dateUpdated')->nullable();
            $table->tinyInteger('isPremium');
            $table->timestamps();

            $table->foreign('gasStationID')->references('gasStationID')->on('gasstations');
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
