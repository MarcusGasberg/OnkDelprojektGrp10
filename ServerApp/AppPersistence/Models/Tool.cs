using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AppPersistence.Models
{
    public partial class Tool
    {
        [Key]
        public long Id { get; set; }
        public DateTime Acquired { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Serial { get; set; }
        public string Type { get; set; }
        public int? ToolboxId { get; set; }
        public Toolbox Toolbox { get; set; }
    }
}