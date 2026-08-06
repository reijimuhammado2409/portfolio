<?php

namespace Database\Seeders;

use App\Models\Experience;
use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
{
    public function run(): void
    {
        $experiences = [
            [
                'company' => 'Tech Corp',
                'position' => 'Senior Frontend Developer',
                'employment_type' => 'Full-time',
                'location' => 'Jakarta, Indonesia',
                'company_url' => 'https://techcorp.com',
                'start_date' => '2024-07-01',
                'end_date' => null,
                'description' => 'Architecting and developing modern single page web applications using React 19, Vite, and Tailwind CSS. Integrated REST APIs and optimized web app performance.',
                'logo' => 'experiences/techcorp.png',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'company' => 'Digital Studio',
                'position' => 'Fullstack Web Developer',
                'employment_type' => 'Full-time',
                'location' => 'Remote',
                'company_url' => 'https://digitalstudio.io',
                'start_date' => '2023-01-01',
                'end_date' => '2024-06-30',
                'description' => 'Built headless CMS applications and robust REST APIs using Laravel and MySQL. Managed admin dashboard resource configurations using Filament.',
                'logo' => 'experiences/digitalstudio.png',
                'sort_order' => 2,
                'is_active' => true,
            ],
        ];

        foreach ($experiences as $exp) {
            Experience::updateOrCreate(
                ['company' => $exp['company'], 'position' => $exp['position']],
                $exp
            );
        }
    }
}
