<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        \DB::table('orders')->insert([
            [
                'quantity' => 7, 
                'state' => 'pendiente',
                'user_id' => 3,
                'created_at' => '2024-10-18 12:00:00', // Fecha quemada (4 días atrás)
                'updated_at' => '2024-10-18 12:00:00',
            ],
            [
                'quantity' => 4, 
                'state' => 'en proceso',
                'user_id' => 3,
                'created_at' => '2024-10-19 12:00:00', // Fecha quemada (3 días atrás)
                'updated_at' => '2024-10-19 12:00:00',
            ],
            [
                'quantity' => 8, 
                'state' => 'en proceso',
                'user_id' => 3,
                'created_at' => '2024-10-20 12:00:00', // Fecha quemada (2 días atrás)
                'updated_at' => '2024-10-20 12:00:00',
            ],
            [
                'quantity' => 3, 
                'state' => 'listo para entregar',
                'user_id' => 3,
                'created_at' => '2024-10-21 12:00:00', // Fecha quemada (1 día atrás)
                'updated_at' => '2024-10-21 12:00:00',
            ],
            [
                'quantity' => 2, 
                'state' => 'entregado',
                'user_id' => 3,
                'created_at' => '2024-10-22 12:00:00', // Fecha quemada (hoy)
                'updated_at' => '2024-10-22 12:00:00',
            ],
        ]);
    }
}
