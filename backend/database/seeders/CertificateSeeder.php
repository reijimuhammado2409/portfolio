<?php

namespace Database\Seeders;

use App\Models\Certificate;
use Illuminate\Database\Seeder;

class CertificateSeeder extends Seeder
{
    public function run(): void
    {
        $certs = [
            [
                'title' => 'Laravel Certified Developer',
                'issuer' => 'Laravel LLC',
                'issue_date' => '2025-01-15',
                'credential_id' => 'CERT-123456',
                'credential_url' => 'https://certificate.laravel.com/123456',
                'image' => 'certificates/cert.png',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'React Developer Certification',
                'issuer' => 'Meta',
                'issue_date' => '2024-08-10',
                'credential_id' => 'META-987654',
                'credential_url' => 'https://coursera.org/verify/react',
                'image' => 'certificates/react_cert.png',
                'sort_order' => 2,
                'is_active' => true,
            ],
        ];

        foreach ($certs as $cert) {
            Certificate::updateOrCreate(
                ['title' => $cert['title']],
                $cert
            );
        }
    }
}
