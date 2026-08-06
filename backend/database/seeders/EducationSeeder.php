<?php

namespace Database\Seeders;

use App\Models\Education;
use Illuminate\Database\Seeder;

class EducationSeeder extends Seeder
{
    public function run(): void
    {
        $educations = [
            [
                'institution' => 'State University',
                'major' => 'Computer Science',
                'degree' => 'Bachelor of Science',
                'gpa' => 3.85,
                'start_date' => '2020-09-01',
                'end_date' => '2024-06-30',
                'description' => 'Graduated with honors. Specialized in Software Engineering, Web Technologies, and Relational Databases.',
                'logo' => 'educations/university.png',
                'sort_order' => 1,
                'is_active' => true,
            ],
        ];

        foreach ($educations as $edu) {
            Education::updateOrCreate(
                ['institution' => $edu['institution'], 'major' => $edu['major']],
                $edu
            );
        }
    }
}
