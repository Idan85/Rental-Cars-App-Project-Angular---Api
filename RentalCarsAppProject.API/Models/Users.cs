using System;

using System.Collections.Generic;

namespace RentalCarsAppProject.API.Models
{
    public class Users
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

         public int IdCard { get; set; }

         public string Gender { get; set; }

        public string Email { get; set; }   

        public DateTime DateOfBirth { get; set; }

        public DateTime Created { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public ICollection<Photo> Photos { get; set; }
    }
}