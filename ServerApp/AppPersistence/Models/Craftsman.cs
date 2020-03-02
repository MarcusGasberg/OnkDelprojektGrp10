using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppPersistence.Models
{
    public partial class Craftsman
    {
        public Craftsman()
        {
            Toolboxes = new HashSet<Toolbox>();
        }
        [Key]
        public int Id { get; set; }
        public DateTime EmploymentDate { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string WorkField { get; set; }
        public HashSet<Toolbox> Toolboxes { get; set; }
    }
}
