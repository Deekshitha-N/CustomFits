using Domain.Entities;
using Application.DTO;

namespace Application.Interfaces.Repositories;

public interface IUserRepository
{
    Task<User?> GetByEmailAsync(string email);

    Task<bool> CreateUser(RegisterRequest request);

    Task<bool> IsAccountExists(string email);
}