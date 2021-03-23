<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommentStoreRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index()
    {
        // return Comment::all();
        // Working with Resource
        return CommentResource::collection(Comment::paginate(6));
    }

    public function store(CommentStoreRequest $request)
    {
        sleep(3);
        $comment = Comment::create($request->validated());

        return new CommentResource($comment);
    }
}
