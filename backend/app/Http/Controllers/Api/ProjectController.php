<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of projects.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Project::where('is_active', true)
            ->with(['category', 'techStacks'])
            ->orderBy('sort_order', 'asc');

        if ($request->has('category') && filled($request->query('category'))) {
            $categorySlug = $request->query('category');
            $query->whereHas('category', function ($q) use ($categorySlug) {
                $q->where('slug', $categorySlug);
            });
        }

        $projects = $query->get();

        return response()->json([
            'success' => true,
            'message' => 'Projects retrieved successfully',
            'data' => ProjectResource::collection($projects),
        ]);
    }

    /**
     * Display the specified project detail.
     */
    public function show(string $slug): JsonResponse
    {
        $project = Project::where('slug', $slug)
            ->where('is_active', true)
            ->with(['category', 'techStacks', 'images', 'links'])
            ->firstOrFail();

        return response()->json([
            'success' => true,
            'message' => 'Project detail retrieved successfully',
            'data' => new ProjectResource($project),
        ]);
    }
}
