<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExperienceResource extends JsonResource
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
            'company' => $this->company,
            'position' => $this->position,
            'employment_type' => $this->employment_type,
            'location' => $this->location,
            'company_url' => $this->company_url,
            'start_date' => $this->start_date?->format('Y-m-d'),
            'end_date' => $this->end_date?->format('Y-m-d'),
            'description' => $this->description,
            'logo' => $this->logo ? (str_starts_with($this->logo, 'http') ? $this->logo : asset('storage/' . $this->logo)) : null,
            'sort_order' => $this->sort_order,
        ];
    }
}
