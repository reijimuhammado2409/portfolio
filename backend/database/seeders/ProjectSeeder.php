<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Project;
use App\Models\ProjectImage;
use App\Models\ProjectLink;
use App\Models\TechStack;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $webCategory = Category::where('slug', 'web-development')->first();
        $mobileCategory = Category::where('slug', 'mobile-apps')->first();

        $laravel = TechStack::where('name', 'Laravel')->first();
        $react = TechStack::where('name', 'React.js')->first();
        $tailwind = TechStack::where('name', 'Tailwind CSS')->first();
        $mysql = TechStack::where('name', 'MySQL')->first();
        $filament = TechStack::where('name', 'Filament')->first();

        // Project 1: Portfolio CMS
        $project1 = Project::updateOrCreate(
            ['slug' => 'portfolio-cms'],
            [
                'category_id' => $webCategory?->id,
                'title' => 'Portfolio CMS',
                'slug' => 'portfolio-cms',
                'short_description' => 'Personal website CMS built using React & Laravel 12 Headless CMS architecture.',
                'description' => '<p>Portfolio CMS is a dynamic personal website management system. Built with a decoupled frontend (React + Tailwind CSS) and backend (Laravel 12 + Filament 5), allowing seamless content management without touching codebase.</p>',
                'thumbnail' => 'projects/thumb_portfolio.png',
                'is_featured' => true,
                'sort_order' => 1,
                'is_active' => true,
            ]
        );

        if ($project1) {
            // Attach Tech Stacks
            $techIds = array_filter([$laravel?->id, $react?->id, $tailwind?->id, $mysql?->id, $filament?->id]);
            $project1->techStacks()->sync($techIds);

            // Images
            ProjectImage::updateOrCreate(
                ['project_id' => $project1->id, 'sort_order' => 1],
                ['image' => 'projects/screen1.png']
            );
            ProjectImage::updateOrCreate(
                ['project_id' => $project1->id, 'sort_order' => 2],
                ['image' => 'projects/screen2.png']
            );

            // Links
            ProjectLink::updateOrCreate(
                ['project_id' => $project1->id, 'type' => 'github'],
                [
                    'label' => 'Source Code',
                    'url' => 'https://github.com/username/portfolio-cms',
                    'sort_order' => 1,
                ]
            );
            ProjectLink::updateOrCreate(
                ['project_id' => $project1->id, 'type' => 'demo'],
                [
                    'label' => 'Live Demo',
                    'url' => 'https://portfolio.demo.com',
                    'sort_order' => 2,
                ]
            );
        }

        // Project 2: E-Commerce Mobile App
        $project2 = Project::updateOrCreate(
            ['slug' => 'e-commerce-mobile-app'],
            [
                'category_id' => $mobileCategory?->id,
                'title' => 'E-Commerce Mobile App',
                'slug' => 'e-commerce-mobile-app',
                'short_description' => 'Mobile shopping experience with real-time checkout and payment gateway integration.',
                'description' => '<p>Comprehensive mobile e-commerce platform built with React Native and Laravel API backend featuring real-time inventory management and secure payment processing.</p>',
                'thumbnail' => 'projects/thumb_ecommerce.png',
                'is_featured' => false,
                'sort_order' => 2,
                'is_active' => true,
            ]
        );

        if ($project2) {
            // Attach Tech Stacks
            $techIds2 = array_filter([$react?->id, $laravel?->id]);
            $project2->techStacks()->sync($techIds2);

            // Images
            ProjectImage::updateOrCreate(
                ['project_id' => $project2->id, 'sort_order' => 1],
                ['image' => 'projects/mobile_screen1.png']
            );

            // Links
            ProjectLink::updateOrCreate(
                ['project_id' => $project2->id, 'type' => 'github'],
                [
                    'label' => 'GitHub Repository',
                    'url' => 'https://github.com/username/ecommerce-app',
                    'sort_order' => 1,
                ]
            );
        }
    }
}
