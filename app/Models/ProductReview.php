<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductReview extends Model
{
    use HasFactory;

    protected $fillable = ['rating', 'content', 'name', 'user_id', 'product_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}