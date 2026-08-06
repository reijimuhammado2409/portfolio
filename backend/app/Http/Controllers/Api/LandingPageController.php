<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AboutResource;
use App\Http\Resources\HeroResource;
use App\Http\Resources\SiteSettingResource;
use App\Http\Resources\SocialLinkResource;
use App\Models\About;
use App\Models\Hero;
use App\Models\SiteSetting;
use App\Models\SocialLink;
use Illuminate\Http\JsonResponse;

class LandingPageController extends Controller
{
    /**
     * Get aggregated landing page data.
     */
    public function index(): JsonResponse
    {
        $hero = Hero::first();
        $about = About::first();
        $siteSetting = SiteSetting::first();
        $socialLinks = SocialLink::where('is_active', true)->orderBy('sort_order', 'asc')->get();

        return response()->json([
            'success' => true,
            'message' => 'Landing page data retrieved successfully',
            'data' => [
                'hero' => $hero ? new HeroResource($hero) : null,
                'about' => $about ? new AboutResource($about) : null,
                'site_settings' => $siteSetting ? new SiteSettingResource($siteSetting) : null,
                'social_links' => SocialLinkResource::collection($socialLinks),
            ],
        ]);
    }
}
