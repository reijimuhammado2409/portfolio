<?php

namespace Database\Seeders;

use App\Models\SocialLink;
use Illuminate\Database\Seeder;

class SocialLinkSeeder extends Seeder
{
    public function run(): void
    {
        $links = [
            [
                'platform' => 'GitHub',
                'url' => 'https://github.com/username',
                'icon' => 'socials/github.svg',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'platform' => 'LinkedIn',
                'url' => 'https://linkedin.com/in/username',
                'icon' => 'socials/linkedin.svg',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'platform' => 'Instagram',
                'url' => 'https://instagram.com/username',
                'icon' => 'socials/instagram.svg',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'platform' => 'Twitter / X',
                'url' => 'https://x.com/username',
                'icon' => 'socials/twitter.svg',
                'sort_order' => 4,
                'is_active' => true,
            ],
        ];

        foreach ($links as $link) {
            SocialLink::updateOrCreate(
                ['platform' => $link['platform']],
                $link
            );
        }
    }
}
