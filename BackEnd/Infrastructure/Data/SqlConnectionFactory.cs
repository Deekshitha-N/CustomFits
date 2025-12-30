using System.Data;
using Microsoft.Data.Sqlite;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Data;

public class SqlConnectionFactory : IDbConnectionFactory
{
    private readonly IConfiguration _configuration;

    public SqlConnectionFactory(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public IDbConnection CreateConnection()
    {
        string dbPath = Path.Combine(
  AppContext.BaseDirectory,
  "..", "..", "..", "Database", _configuration.GetConnectionString("SqliteConnection")
);
        return new SqliteConnection($"Data Source={Path.GetFullPath(dbPath)}");
    }
}
