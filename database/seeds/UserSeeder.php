<?php



use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        User::create([
            'name'=>"Mario Jheferson",
            'apellido'=>"Cotave Rodriguez",
            'email'=>"maritojhefi@gmail.com",
            'password'=>"jhefi123",
            'telefono'=>"75140175",
            'rol_id'=>5,
            'cedula'=>"10657721",
           
        ]);
        User::create([
            'name'=>"Esther Claudia",
            'apellido'=>"Silvestre Cruz",
            'email'=>"nena@gmail.com",
            'password'=>"12345",
            'telefono'=>"61857295",
            'rol_id'=>3,
            'cedula'=>"10657721",
           
        ]);
    }
}
