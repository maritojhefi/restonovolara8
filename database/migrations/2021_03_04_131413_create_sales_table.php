<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('comprador_id')->nullable();
            $table->bigInteger('usuario_id')->nullable();
            $table->bigInteger('mesa_id')->nullable();

            $table->string('estado', 100)->nullable()->default('pendiente');
            $table->string('observacion', 100)->nullable();
            $table->string('token', 100)->nullable();
            $table->string('idpago', 100)->nullable();
            $table->integer('propina')->nullable()->default(0);
            $table->integer('rockola')->nullable()->default(0);
            $table->integer('total')->nullable()->default(0);
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
        Schema::dropIfExists('sales');
    }
}
