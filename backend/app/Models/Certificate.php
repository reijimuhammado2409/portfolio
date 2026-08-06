<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;

    protected $table = 'certificates';

    protected $fillable = [
        'title',
        'issuer',
        'issue_date',
        'credential_id',
        'credential_url',
        'image',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'issue_date' => 'date',
        'sort_order' => 'integer',
        'is_active' => 'boolean',
    ];
}
