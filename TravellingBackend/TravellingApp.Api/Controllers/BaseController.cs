using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace TravellingApp.Api.Controllers;

[ApiController]
[Route("api/")]
public class BaseController(IMapper _mapper) : ControllerBase
{ }