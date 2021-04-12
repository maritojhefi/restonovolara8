<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('custom_products', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 500)->nullable();
            $table->string('cantidad', 500)->nullable();
            $table->string('precio', 500)->nullable();
            $table->string('total',500)->nullable();
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
        Schema::dropIfExists('custom_products');
    }
}
