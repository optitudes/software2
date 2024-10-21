<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(RoleSeeder::class);
        $users = [
            [
                'name' => 'comerciante',
                'email' => 'comerciante@gmail.com',
                'password' => bcrypt('password'),
                'role_id' => 1
            ],
            [
                'name' => 'procesador',
                'email' => 'procesador@gmail.com',
                'password' => bcrypt('password'),
                'role_id' =>2
            ],
            [
                'name' => 'cliente',
                'email' => 'cliente@gmail.com',
                'password' => bcrypt('password'),
                'role_id' =>3
            ],
        ];
    
        foreach ($users as $user) {
            User::factory()->create($user);
        }

        $this->call(OrderSeeder::class);

    }
}
