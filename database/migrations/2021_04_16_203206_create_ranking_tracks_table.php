<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRankingTracksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ranking_tracks', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 100)->nullable();
            $table->string('artista', 100)->nullable();
            $table->string('uri', 100)->nullable();
            $table->string('foto', 100)->nullable()->default('text');
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
        Schema::dropIfExists('ranking_tracks');
    }
}
