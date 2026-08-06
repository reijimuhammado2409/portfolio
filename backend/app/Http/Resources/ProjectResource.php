<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
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
            'title' => $this->title,
            'slug' => $this->slug,
            'short_description' => $this->short_description,
            'description' => $this->description,
            'thumbnail' => $this->thumbnail ? (str_starts_with($this->thumbnail, 'http') ? $this->thumbnail : asset('storage/' . $this->thumbnail)) : null,
            'is_featured' => $this->is_featured,
            'sort_order' => $this->sort_order,
            'category' => new CategoryResource($this->whenLoaded('category')),
            'tech_stacks' => TechStackResource::collection($this->whenLoaded('techStacks')),
            'images' => $this->whenLoaded('images', function () {
                return $this->images->map(fn ($img) => [
                    'id' => $img->id,
                    'image' => str_starts_with($img->image, 'http') ? $img->image : asset('storage/' . $img->image),
                    'sort_order' => $img->sort_order,
                ]);
            }),
            'links' => $this->whenLoaded('links', function () {
                return $this->links->map(fn ($link) => [
                    'id' => $link->id,
                    'type' => $link->type,
                    'label' => $link->label,
                    'url' => $link->url,
                    'sort_order' => $link->sort_order,
                ]);
            }),
        ];
    }
}
