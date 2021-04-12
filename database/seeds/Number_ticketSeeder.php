<?php

use App\Number_ticket;
use Illuminate\Database\Seeder;

class Number_ticketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Number_ticket::truncate();
        Number_ticket::create([
            'numero'=>0,
           
        ]);
    }
}
