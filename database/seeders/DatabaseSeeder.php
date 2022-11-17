<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\Product;
use App\Models\ProductReview;
use App\Models\User;
use Database\Factories\AccountFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = User::factory(10)->create();

        foreach ($users as $user) {
            Account::factory()->create(['user_id' => $user->id]);
        }


        foreach (Product::all() as $product) {
            ProductReview::factory()->count(3)->create(['product_id' => $product->id]);
        }
    }
}