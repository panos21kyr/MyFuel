<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGasstations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gasstations', function (Blueprint $table) {
            $table->id();
            $table->decimal('gasStationLat', $precision = 10, $scale = 7)->nullable();
            $table->decimal('gasStationLong', $precision = 10, $scale = 7)->nullable();
            $table->tinyInteger('fuelCompID',4);

            $table->string('fuelCompNormalName',45)->charset = 'utf8';
            $table->string('gasStationOwner',128);
            $table->string('ddID',10);
            $table->string('ddNormalName', 45);
            $table->string('municipalityID',10);
            $table->string('municipalityNormalName',45);
            $table->string('countyID',10);
            $table->string('countyName',64);
            $table->string('gasStationAddress',255)->nullable();
            $table->char('phone1', 10)->nullable();
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
        Schema::dropIfExists('gasstations');
    }
}
