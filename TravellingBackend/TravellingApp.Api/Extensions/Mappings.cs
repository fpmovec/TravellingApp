namespace TravellingApp.Api.Extensions;

public static class Mappings
{
    public static void AddMappers(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(int));
    }
}