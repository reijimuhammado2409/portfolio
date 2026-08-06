<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class SiteSettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'site_name' => $this->site_name,
            'site_description' => $this->site_description,
            'logo' => $this->logo ? (str_starts_with($this->logo, 'http') ? $this->logo : asset('storage/' . $this->logo)) : null,
            'favicon' => $this->favicon ? (str_starts_with($this->favicon, 'http') ? $this->favicon : asset('storage/' . $this->favicon)) : null,
            'cv_file' => $this->cv_file ? (str_starts_with($this->cv_file, 'http') ? $this->cv_file : asset('storage/' . $this->cv_file)) : null,
            'email' => $this->email,
            'phone' => $this->phone,
            'address' => $this->address,
            'github_url' => $this->github_url,
            'linkedin_url' => $this->linkedin_url,
            'instagram_url' => $this->instagram_url,
            'whatsapp_url' => $this->whatsapp_url,
            'seo_title' => $this->seo_title,
            'seo_description' => $this->seo_description,
            'seo_keywords' => $this->seo_keywords,
        ];
    }
}
