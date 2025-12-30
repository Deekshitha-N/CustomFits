namespace Application.DTO;

public class LoginResponse
{
    public string Token { get; set; }
    public string Role { get; set; }
    //public string UserName { get; set; }

    public LoginResponse(string token, string role)
    {
        Token = token;
        Role = role;
    }
}
