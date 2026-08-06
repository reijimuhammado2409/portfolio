<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EducationResource extends JsonResource
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
            'institution' => $this->institution,
            'major' => $this->major,
            'degree' => $this->degree,
            'gpa' => $this->gpa,
            'start_date' => $this->start_date?->format('Y-m-d'),
            'end_date' => $this->end_date?->format('Y-m-d'),
            'description' => $this->description,
            'logo' => $this->logo ? (str_starts_with($this->logo, 'http') ? $this->logo : asset('storage/' . $this->logo)) : null,
            'sort_order' => $this->sort_order,
        ];
    }
}
