using System;
using System.Collections.Generic;
using RentalCarsAppProject.API.Models;

namespace RentalCarsAppProject.API.Dtos
{
    public class UserForDetailedDto
    {
              public int Id { get; set; }

        public string Username { get; set; }


        public string Gender { get; set; }

        public string Email { get; set; }   

        public int Age { get; set; }

        public DateTime Created { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string PhotoUrl { get; set; }

        public ICollection<Photo> Photos { get; set; }
    }
}