
using Application.DTO;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;

namespace Application.UseCases;

public class LoginUseCase
{
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasher _passwordHasher;
    private readonly ITokenService _tokenService;

    public LoginUseCase(
        IUserRepository userRepository,
        IPasswordHasher passwordHasher,
        ITokenService tokenService)
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
        _tokenService = tokenService;
    }

    public async Task<LoginResponse> Login(LoginRequest request)
    {
        var user = await _userRepository.GetByEmailAsync(request.Email);

        if (user == null || !_passwordHasher.Verify(request.Password, user.PasswordHash))
            throw new UnauthorizedAccessException("Invalid credentials");

        var token = _tokenService.GenerateToken(user);

        return new LoginResponse(token, user.Role);
    }

    public async Task<bool> IsAccountExists(string email)
    {
        return await _userRepository.IsAccountExists(email);
    }

    public async Task<bool> CreateUser(RegisterRequest request)
    {
        bool isInserted = await _userRepository.CreateUser(request);

        return isInserted;
    }
}
