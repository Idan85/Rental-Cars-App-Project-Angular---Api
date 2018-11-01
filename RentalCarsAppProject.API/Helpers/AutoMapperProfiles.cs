using AutoMapper;
using RentalCarsAppProject.API.Dtos;
using RentalCarsAppProject.API.Models;

namespace RentalCarsAppProject.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles ( )
        {
            CreateMap<Users, UserForListDto>();

            CreateMap<Users, UserForDetailedDto>();
        }
    }
}