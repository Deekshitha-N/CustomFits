using Application.Interfaces.Services;
using System.Security.Cryptography;
using System.Text;

namespace Infrastructure.Authentication;

public class PasswordHasher : IPasswordHasher
{
    public bool Verify(string password, string hash)
    {
        return Hash(password) == hash;
    }

    public static string Hash(string password)
    {
        using var sha256 = SHA256.Create();
        var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(bytes);
    }
}
