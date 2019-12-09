FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["Org.F1ML.DataIngestion/Org.F1ML.DataIngestion.csproj", "Org.F1ML.DataIngestion/"]
RUN dotnet restore "Org.F1ML.DataIngestion/Org.F1ML.DataIngestion.csproj"
COPY . .
WORKDIR "/src/Org.F1ML.DataIngestion"
RUN dotnet build "Org.F1ML.DataIngestion.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Org.F1ML.DataIngestion.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Org.F1ML.DataIngestion.dll"]