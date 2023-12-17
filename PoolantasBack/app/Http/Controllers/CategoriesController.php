<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CategoriesController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories, 200);
    }

    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $category = new Category();
            $category->name = $request->name;
            $category->description = $request->description;
            $image = $request->file('img');
            if ($image) {
                $file = md5_file($image->getRealPath()) .'.'. $image->getClientOriginalExtension();
                $path = $image->storeAs('public/categorias', $file); 
                $category->img = Storage::url($path);
            }
            $category->save();
            DB::commit();
            return response()->json($category, 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['mensaje' => 'Error al crear la categoría', 'exception' => $e->getMessage()], 400);
        }
    }

    public function show($id)
    {
        $category = Category::find($id);
        if(!$category) {
            return response()->json(['mensaje' => 'No se encontró la categoría'], 404);
        }
        return response()->json($category, 200);
    }
}
