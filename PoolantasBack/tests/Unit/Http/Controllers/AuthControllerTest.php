<?php

namespace Tests\Unit\Http\Controllers;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthController;
use App\Models\User;

class AuthControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testLoginWithValidCredentials()
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password123'),
        ]);

        $requestData = [
            'email' => 'test@example.com',
            'password' => 'password123',
        ];

        $request = new Request($requestData);

        $authController = new AuthController();

        $response = $authController->login($request);

        $this->assertArrayHasKey('access_token', $response->getData(true));
        $this->assertArrayHasKey('token_type', $response->getData(true));
        $this->assertArrayHasKey('user', $response->getData(true));
    }

    public function testLoginWithInvalidCredentials()
    {
        $requestData = [
            'email' => 'invalid@example.com',
            'password' => 'invalidpassword',
        ];

        $request = new Request($requestData);

        $authController = new AuthController();

        $response = $authController->login($request);

        $this->assertEquals(401, $response->status());
        $this->assertArrayHasKey('message', $response->getData(true));
        $this->assertEquals('Credenciales inválidas', $response->getData(true)['message']);
    }

}
