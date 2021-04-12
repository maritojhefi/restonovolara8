<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(RolsSeeder::class);
         $this->call(TableSeeder::class);
         $this->call(SubcategorySeeder::class);
         $this->call(Number_ticketSeeder::class);



    }
}
