namespace TravellingApp.Domain.Models;

public class BaseModel<TId>
{
    public TId Id { get; set; }
}