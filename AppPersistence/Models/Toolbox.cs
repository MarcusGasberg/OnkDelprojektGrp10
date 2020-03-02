using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppPersistence.Models
{
    public partial class Toolbox
    {
        public Toolbox()
        {
            Tools = new HashSet<Tool>();
        }
        [Key]
        public int Id { get; set; }
        public DateTime Acquired { get; set; }
        public string Make { get; set; }
        public int? OwnerId { get; set; }
        public string Model { get; set; }
        public string Serial { get; set; }
        public string Color { get; set; }
        public Craftsman Owner { get; set; }
        public HashSet<Tool> Tools { get; set; }
    }
}
