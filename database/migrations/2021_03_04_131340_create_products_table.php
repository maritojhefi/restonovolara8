<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 500)->nullable();
            $table->string('precioventa', 500)->nullable();
            $table->string('estado', 500)->default('activo');
            $table->string('ingredientes', 500)->nullable();
            $table->string('genero', 500)->nullable();

            $table->text('detalle')->nullable();
            $table->string('cantidad',10)->nullable()->default(1);
            $table->bigInteger('category_id')->unsigned()->nullable();
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
        Schema::dropIfExists('products');
    }
}
