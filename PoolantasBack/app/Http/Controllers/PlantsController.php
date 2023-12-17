<?php

namespace App\Http\Controllers;

use App\Models\Plant;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PlantsController extends Controller
{
    public function index()
    {
        $plants = Plant::all();
        return response()->json($plants, 200);
    }

    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $plant = new Plant();
            $plant->name = $request->name;
            $plant->description = $request->description;
            $image = $request->file('img');
            if ($image) {
                $file = md5_file($image->getRealPath()) .'.'. $image->getClientOriginalExtension();
                $path = $image->storeAs('public/plantas', $file); 
                $plant->img = Storage::url($path);
            }
            $plant->category_id = $request->category_id; // Asegúrate de tener el campo category_id en tu modelo Plant
            $plant->save();
            DB::commit();
            return response()->json($plant, 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['mensaje' => 'Error al crear la planta', 'exception' => $e->getMessage()], 400);
        }
    }

    public function show($id)
    { 
        $plant = Plant::where('category_id', $id)->get();
        if(!$plant) {
            return response()->json(['mensaje' => 'No se encontró la planta'], 404);
        }
        return response()->json($plant, 200);
    }

    // Otras funciones según sea necesario
}

