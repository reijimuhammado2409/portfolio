<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    public function run(): void
    {
        SiteSetting::updateOrCreate(
            ['id' => 1],
            [
                'site_name' => 'Developer Portfolio',
                'site_description' => 'Personal Portfolio & Resume website built with Laravel & React.',
                'logo' => 'settings/logo.png',
                'favicon' => 'settings/favicon.ico',
                'cv_file' => 'cv/resume.pdf',
                'email' => 'developer@example.com',
                'phone' => '+628123456789',
                'address' => 'Jakarta, Indonesia',
                'github_url' => 'https://github.com/username',
                'linkedin_url' => 'https://linkedin.com/in/username',
                'instagram_url' => 'https://instagram.com/username',
                'whatsapp_url' => 'https://wa.me/628123456789',
                'seo_title' => 'Developer Portfolio - Fullstack Engineer',
                'seo_description' => 'Personal portfolio of a passionate Fullstack Engineer.',
                'seo_keywords' => 'developer, fullstack, react, laravel, portfolio',
            ]
        );
    }
}
