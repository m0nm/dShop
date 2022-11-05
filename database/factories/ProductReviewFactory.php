<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductReview>
 */
class ProductReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'rating' => rand(0, 5),
            'content' => fake()->paragraph(),
            'name' => fake()->firstName() . ' ' . fake()->lastName(),
            'user_id' => 1,
        ];
    }
}