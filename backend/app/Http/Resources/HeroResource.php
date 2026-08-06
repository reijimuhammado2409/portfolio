<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HeroResource extends JsonResource
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
            'headline' => $this->headline,
            'subheadline' => $this->subheadline,
            'description' => $this->description,
            'hero_image' => $this->hero_image ? (str_starts_with($this->hero_image, 'http') ? $this->hero_image : asset('storage/' . $this->hero_image)) : null,
            'primary_button_text' => $this->primary_button_text,
            'primary_button_url' => $this->primary_button_url,
            'secondary_button_text' => $this->secondary_button_text,
            'secondary_button_url' => $this->secondary_button_url,
        ];
    }
}
