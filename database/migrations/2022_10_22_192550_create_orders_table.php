<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade')->onUpdate('cascade');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('phone_number');

            $table->string('country');
            $table->string('state');
            $table->string('city');
            $table->string('street_address');
            $table->string('zip_code');
            $table->string('tracking_no');
            $table->float('total_price');
            $table->enum('status', ['pending', 'delivered, cancelled'])->default('pending');

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
        Schema::dropIfExists('orders');
    }
};