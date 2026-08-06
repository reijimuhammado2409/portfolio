<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\LandingPageController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\ProjectController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - Version 1 (v1)
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    // Landing Page (Aggregated)
    Route::get('/landing-page', [LandingPageController::class, 'index']);

    // Projects API
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/{slug}', [ProjectController::class, 'show']);

    // Portfolio Sections API
    Route::get('/categories', [PortfolioController::class, 'categories']);
    Route::get('/tech-stacks', [PortfolioController::class, 'techStacks']);
    Route::get('/experiences', [PortfolioController::class, 'experiences']);
    Route::get('/educations', [PortfolioController::class, 'educations']);
    Route::get('/certificates', [PortfolioController::class, 'certificates']);

    // Contact Form Submission (throttled)
    Route::post('/contact', [ContactController::class, 'store'])->middleware('throttle:5,1');
});
