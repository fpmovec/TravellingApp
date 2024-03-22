using System.ComponentModel.DataAnnotations;

namespace TravellingApp.Domain;

public enum TransportType
{
    [Display(Name = "Bus")]
    Bus = 0,
    
    [Display(Name = "Transfer")]
    Transfer = 1,
    
    [Display(Name = "Airplane")]
    Airplane = 2
}