using Domain.Entities;

namespace Application.DTO;

public class LoginResponse
{
    public string Token { get; set; }
    public User User { get; set; }

    public LoginResponse(string token, User user)
    {
        Token = token;
        User = user;
    }
}
