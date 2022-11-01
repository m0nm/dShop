<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'phone_number',
        'city',
        'state',
        'country',
        'street_address',
        'zip_code',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}