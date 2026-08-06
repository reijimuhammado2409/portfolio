<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;

    protected $table = 'educations';

    protected $fillable = [
        'institution',
        'major',
        'degree',
        'gpa',
        'start_date',
        'end_date',
        'description',
        'logo',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'gpa' => 'decimal:2',
        'start_date' => 'date',
        'end_date' => 'date',
        'sort_order' => 'integer',
        'is_active' => 'boolean',
    ];
}
