using Application.Interfaces.Services;
using Application.Interfaces.Repositories;
using Application.UseCases;
using Microsoft.AspNetCore.Mvc;
using Application.DTO;

namespace CustomFits.Controller;

[ApiController]
[Route("api/auth")]
public class LoginApiController : ControllerBase
{
    private readonly LoginUseCase _loginUseCase;

    public LoginApiController(LoginUseCase loginUseCase)
    {
        _loginUseCase = loginUseCase;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var result = await _loginUseCase.Login(request);

        Response.Headers.Add("Authorization", $"Bearer {result.Token}");

        return Ok();
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password) || string.IsNullOrWhiteSpace(request.Name))
            return BadRequest("All fields are required.");

        if (await _loginUseCase.IsAccountExists(request.Email))
            return BadRequest("Email already registered.");

        bool isInserted = await _loginUseCase.CreateUser(request);

        if (isInserted)
            return Ok(new { message = "User registered successfully" });

        return BadRequest("Failed to register user.");

    }
}
