<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    /**
     * Store a new contact message from visitor.
     */
    public function store(StoreContactRequest $request): JsonResponse
    {
        ContactMessage::create($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Your message has been sent successfully!',
        ], 201);
    }
}
