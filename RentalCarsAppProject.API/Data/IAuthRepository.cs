using System.Threading.Tasks;

using RentalCarsAppProject.API.Models;

namespace RentalCarsAppProject.API.Data
{
    public interface IAuthRepository
    {
        Task<Users> Register(Users user, string password);

        Task<Users> Login(string username, string password);

        Task<bool> UserExists(string username);


    }
}