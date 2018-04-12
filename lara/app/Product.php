<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'user_id', 'name', 'price', 'description','image'
    ];

    public function getImageAttribute($image)
    {
        return asset('images/' . $image);
    }
}
