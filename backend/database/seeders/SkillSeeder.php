<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    public function run(): void
    {
        $skills = [
            [
                'name' => 'React.js',
                'icon' => 'skills/react.svg',
                'level' => 90,
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Laravel',
                'icon' => 'skills/laravel.svg',
                'level' => 92,
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'JavaScript',
                'icon' => 'skills/javascript.svg',
                'level' => 88,
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'Tailwind CSS',
                'icon' => 'skills/tailwind.svg',
                'level' => 95,
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'MySQL',
                'icon' => 'skills/mysql.svg',
                'level' => 85,
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'name' => 'REST API Design',
                'icon' => 'skills/api.svg',
                'level' => 90,
                'sort_order' => 6,
                'is_active' => true,
            ],
        ];

        foreach ($skills as $skill) {
            Skill::updateOrCreate(
                ['name' => $skill['name']],
                $skill
            );
        }
    }
}
