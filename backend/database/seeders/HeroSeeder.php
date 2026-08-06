<?php

namespace Database\Seeders;

use App\Models\Hero;
use Illuminate\Database\Seeder;

class HeroSeeder extends Seeder
{
    public function run(): void
    {
        Hero::updateOrCreate(
            ['id' => 1],
            [
                'headline' => "Hi, I'm John Doe",
                'subheadline' => 'Fullstack Developer & UI/UX Specialist',
                'description' => 'I craft modern, responsive web applications and engaging digital experiences with cutting-edge technologies.',
                'hero_image' => 'heroes/hero.png',
                'primary_button_text' => 'View Projects',
                'primary_button_url' => '#projects',
                'secondary_button_text' => 'Contact Me',
                'secondary_button_url' => '#contact',
            ]
        );
    }
}
