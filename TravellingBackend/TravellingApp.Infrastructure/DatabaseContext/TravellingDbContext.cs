using Microsoft.EntityFrameworkCore;

namespace TravellingApp.Infrastructure.DatabaseContext;

public class TravellingDbContext(DbContextOptions<TravellingDbContext> opts) : DbContext(opts);