FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app/backend
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["TravellingApp.Api.csproj", "./"]
COPY ["../TravellingApp.Application/TravellingApp.Application.csproj", "../TravellingApp.Application/"]
COPY ["../TravellingApp.Domain/TravellingApp.Domain.csproj", "../TravellingApp.Domain/"]
COPY ["../TravellingApp.Infrastructure/TravellingApp.Infrastructure.csproj", "../TravellingApp.Infrastructure/"]
RUN dotnet restore "TravellingApp.Api.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "TravellingApp.Api.csproj" -c $BUILD_CONFIGURATION -o /app/backend/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "TravellingApp.Api.csproj" -c $BUILD_CONFIGURATION -o /app/backend/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app/backend
COPY --from=publish /app/backend/publish .
ENTRYPOINT ["dotnet", "TravellingApp.Api.dll"]
