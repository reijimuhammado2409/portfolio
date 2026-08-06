<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Admin User
        User::updateOrCreate(
            ['email' => 'admin@portfolio.com'],
            [
                'name' => 'Administrator',
                'password' => Hash::make('password'),
            ]
        );

        $this->call([
            SiteSettingSeeder::class,
            HeroSeeder::class,
            AboutSeeder::class,
            SkillSeeder::class,
            SocialLinkSeeder::class,
            CertificateSeeder::class,
            EducationSeeder::class,
            ExperienceSeeder::class,
            CategorySeeder::class,
            TechStackSeeder::class,
            ProjectSeeder::class,
        ]);
    }
}
