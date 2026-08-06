<?php

namespace Database\Seeders;

use App\Models\TechStack;
use Illuminate\Database\Seeder;

class TechStackSeeder extends Seeder
{
    public function run(): void
    {
        $techs = [
            [
                'name' => 'Laravel',
                'icon' => 'techs/laravel.svg',
            ],
            [
                'name' => 'React.js',
                'icon' => 'techs/react.svg',
            ],
            [
                'name' => 'Tailwind CSS',
                'icon' => 'techs/tailwind.svg',
            ],
            [
                'name' => 'MySQL',
                'icon' => 'techs/mysql.svg',
            ],
            [
                'name' => 'Filament',
                'icon' => 'techs/filament.svg',
            ],
        ];

        foreach ($techs as $tech) {
            TechStack::updateOrCreate(
                ['name' => $tech['name']],
                $tech
            );
        }
    }
}
