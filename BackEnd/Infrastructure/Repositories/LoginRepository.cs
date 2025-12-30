using Application.Interfaces.Repositories;
using Application.DTO;
using Infrastructure.Database;
using Infrastructure.Data;
using Infrastructure.Authentication;
using Application.DTO;
using Domain.Entities;
using Microsoft.Data.Sqlite;
using System.Data;

namespace Infrastructure.Repositories;

public class LoginRepository : IUserRepository
{
    private readonly IDbConnectionFactory _connectionFactory;

    public LoginRepository(IDbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }

    public async Task<bool> IsAccountExists(string email)
    {
        var connection = _connectionFactory.CreateConnection();

        connection.Open();

        var command = connection.CreateCommand();
        command.CommandText = "SELECT COUNT(1) FROM Users WHERE Email = @Email";
        var emailParam = command.CreateParameter();
        emailParam.ParameterName = "@Email";
        emailParam.Value = email;
        command.Parameters.Add(emailParam);

        var exists = Convert.ToInt32(command.ExecuteScalar());

        return exists > 0;
    }

    private static void AddParam(
    IDbCommand cmd,
    string name,
    object? value)
    {
        var param = cmd.CreateParameter();
        param.ParameterName = name;
        param.Value = value ?? DBNull.Value;
        cmd.Parameters.Add(param);
    }

    public async Task<bool> CreateUser(RegisterRequest request)
    {
        var connection = _connectionFactory.CreateConnection();

        connection.Open();

        // Insert user
        var insertCmd = connection.CreateCommand();
        insertCmd.CommandText = @"
            INSERT INTO Users (Id, Name, Email, Password, Role, CreatedOn)
            VALUES (@id, @name, @email, @passwordHash, @role, @createdOn);
        ";

        AddParam(insertCmd, "@id", Guid.NewGuid().ToString());
        AddParam(insertCmd, "@name", request.Name);
        AddParam(insertCmd, "@email", request.Email);
        AddParam(insertCmd, "@passwordHash", PasswordHasher.Hash(request.Password));
        AddParam(insertCmd, "@role", request.Role);
        AddParam(insertCmd, "@createdOn", DateTime.UtcNow.ToString("o"));

        return insertCmd.ExecuteNonQuery() == 1;
    }


    public async Task<User?> GetByEmailAsync(string email)
    {
        using var connection = _connectionFactory.CreateConnection();
        using var command = connection.CreateCommand();

        command.CommandText = @"
            SELECT Id, Name, Email, Password, Role
            FROM Users
            WHERE Email = @Email";

        var p = command.CreateParameter();
        p.ParameterName = "@Email";
        p.Value = email;
        command.Parameters.Add(p);

        connection.Open();

        using var reader = command.ExecuteReader();

        if (!reader.Read())
            return null;

        return new User(
            Guid.Parse(reader.GetString(0)),
            reader.GetString(1),
            reader.GetString(2),
            reader.GetString(3),
            reader.GetString(4)
        );
    }
}