using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = builder.Configuration.GetConnectionString("ConnStr");
builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();
using var scope = app.Services.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
try
{
    Console.WriteLine("before...");
    context.Database.Migrate();
    Console.WriteLine("\n upload... \n");
    DbInitializer.Initialize(context);
    Console.WriteLine("after...");
}
catch (Exception ex)
{
    logger.LogError(ex, "Problem migrating data");
    Console.WriteLine("erreur...");
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
});

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
