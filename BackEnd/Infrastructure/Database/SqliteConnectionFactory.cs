using Microsoft.Data.Sqlite;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace Infrastructure.Database;

public class SqliteConnectionFactory
{
    private readonly IConfiguration _configuration;

    public SqliteConnectionFactory(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public IDbConnection CreateConnection()
    {
        var dbPath = Path.Combine(
   AppContext.BaseDirectory,
   "..", "..", "..", "Database", _configuration.GetConnectionString("SqliteConnection")
);
        return new SqliteConnection($"Data Source={Path.GetFullPath(dbPath)}");
    }
}
