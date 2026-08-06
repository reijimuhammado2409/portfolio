<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CertificateResource;
use App\Http\Resources\EducationResource;
use App\Http\Resources\ExperienceResource;
use App\Http\Resources\TechStackResource;
use App\Models\Category;
use App\Models\Certificate;
use App\Models\Education;
use App\Models\Experience;
use App\Models\TechStack;
use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    /**
     * Get experiences list.
     */
    public function experiences(): JsonResponse
    {
        $experiences = Experience::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Experiences retrieved successfully',
            'data' => ExperienceResource::collection($experiences),
        ]);
    }

    /**
     * Get educations list.
     */
    public function educations(): JsonResponse
    {
        $educations = Education::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Educations retrieved successfully',
            'data' => EducationResource::collection($educations),
        ]);
    }

    /**
     * Get certificates list.
     */
    public function certificates(): JsonResponse
    {
        $certificates = Certificate::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Certificates retrieved successfully',
            'data' => CertificateResource::collection($certificates),
        ]);
    }

    /**
     * Get categories list.
     */
    public function categories(): JsonResponse
    {
        $categories = Category::all();

        return response()->json([
            'success' => true,
            'message' => 'Categories retrieved successfully',
            'data' => CategoryResource::collection($categories),
        ]);
    }

    /**
     * Get tech stacks list.
     */
    public function techStacks(): JsonResponse
    {
        $techStacks = TechStack::all();

        return response()->json([
            'success' => true,
            'message' => 'Tech stacks retrieved successfully',
            'data' => TechStackResource::collection($techStacks),
        ]);
    }
}
