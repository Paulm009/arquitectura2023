<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;

class VideosController extends Controller
{
    public function index()
    {
        $videos = Video::all();
        return response()->json($videos, 200);
    }

    public function store(Request $request)
    {
        $cadena = $request->iframe_code;
        $patron = '/src="(.*?)"/';
        preg_match($patron, $cadena, $coincidencias);
        $coicidencia =  $coincidencias[1];
        $video = new Video();
        $video->iframe_code = $coicidencia;
        $video->save();
        return response()->json($video, 201);
    }
}
