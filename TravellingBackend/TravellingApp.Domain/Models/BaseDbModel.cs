namespace TravellingApp.Domain.Models;

public class BaseDbModel<TId>
{
    public TId Id { get; set; }
}