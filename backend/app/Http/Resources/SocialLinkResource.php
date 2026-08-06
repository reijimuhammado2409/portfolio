<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SocialLinkResource extends JsonResource
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
            'platform' => $this->platform,
            'url' => $this->url,
            'icon' => $this->icon ? (str_starts_with($this->icon, 'http') ? $this->icon : asset('storage/' . $this->icon)) : null,
            'sort_order' => $this->sort_order,
        ];
    }
}
