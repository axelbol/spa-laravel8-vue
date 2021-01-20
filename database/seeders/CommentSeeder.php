<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Comment::factory()->count(30)->create();
        // DB::table('comments')->insert([
        //     'title' => 'Comment One',
        //     'comment_text' => 'Comment Text One'
        // ]);
    }
}
