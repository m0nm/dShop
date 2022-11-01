<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'email',
        'first_name',
        'last_name',
        'phone_number',
        'city',
        'state',
        'country',
        'street_address',
        'zip_code',
        'status',
        'tracking_no',
        'total_price'
    ];

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'order_id', 'id');
    }
}