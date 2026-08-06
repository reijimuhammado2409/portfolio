<?php

namespace Database\Seeders;

use App\Models\About;
use Illuminate\Database\Seeder;

class AboutSeeder extends Seeder
{
    public function run(): void
    {
        About::updateOrCreate(
            ['id' => 1],
            [
                'title' => 'About Me',
                'description' => 'I am a Software Engineer with extensive experience in developing high-performance web applications using React, Laravel, and modern cloud ecosystem. Driven by curiosity, I love solving complex technical challenges and delivering clean, efficient solution architectures.',
                'image' => 'abouts/about.png',
            ]
        );
    }
}
