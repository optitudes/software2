<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            //creating user roles 
       \DB::table('roles')->insert([
            ['rol' => 'comercial', 'code' => '1001', 'description' => 'Vende y administra las ventas de quesos '],
            ['rol' => 'procesador', 'code' => '2001', 'description' => 'Procesa los pedidos'],
            ['rol' => 'cliente', 'code' => '3001', 'description' => 'Puede comprar quesos ']
            ]
        );
    }
}
