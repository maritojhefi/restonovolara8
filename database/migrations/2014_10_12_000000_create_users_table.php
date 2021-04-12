<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();

            $table->string('apellido')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('telefono')->nullable();
            $table->string('cedula')->nullable();
            $table->date('cumpleano')->nullable();
            $table->bigInteger('rol_id')->unsigned()->nullable()->default(1);
            $table->string('empleado')->nullable()->default('no');
            $table->string('sueldofijo')->nullable()->default('no');
            $table->string('entrevista')->nullable()->default('no');
            $table->string('imagen', 100)->nullable();
            $table->string('tiposueldo', 100)->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
