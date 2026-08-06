<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    use HasFactory;

    protected $table = 'site_settings';

    protected $fillable = [
        'site_name',
        'site_description',
        'logo',
        'favicon',
        'cv_file',
        'email',
        'phone',
        'address',
        'github_url',
        'linkedin_url',
        'instagram_url',
        'whatsapp_url',
        'seo_title',
        'seo_description',
        'seo_keywords',
    ];
}
