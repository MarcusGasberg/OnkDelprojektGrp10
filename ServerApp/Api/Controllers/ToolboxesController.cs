using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AppPersistence;
using AppPersistence.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ServerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToolboxesController : ControllerBase
    {
        private readonly AppDbContext context;

        public ToolboxesController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/Toolboxes
        [HttpGet]
        public async Task<IEnumerable<Toolbox>> GetToolboxes()
        {
            return await context.Toolboxes.ToListAsync();
           
        }

        // GET: api/Toolboxes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Toolbox>> GetToolbox(int id)
        {
            var craftsman = await context.Toolboxes.FindAsync(id);
            if (craftsman == null)
            {
                return NotFound();
            }

            return craftsman;
        }

        // POST: api/Toolboxes
        [HttpPost]
        public async Task<ActionResult<Toolbox>> PostToolbox([FromBody] Toolbox craftsman)
        {
            context.Add(craftsman);
            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostToolbox), new { id = craftsman.Id }, craftsman);
        }

        // PUT: api/Toolboxes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToolbox(int id, [FromBody] Toolbox toolbox)
        {
            var dbToolbox = await context.Toolboxes.FindAsync(id);
            if (dbToolbox == null)
            {
                return NotFound();
            }

            context.Attach(dbToolbox);
            dbToolbox.Acquired = toolbox.Acquired != null ? toolbox.Acquired : dbToolbox.Acquired;
            dbToolbox.Color = toolbox.Color ?? dbToolbox.Color;
            dbToolbox.Make = toolbox.Make ?? dbToolbox.Make;
            dbToolbox.Model = toolbox.Model ?? dbToolbox.Model;
            dbToolbox.OwnerId = toolbox.OwnerId ?? dbToolbox.OwnerId;
            dbToolbox.Serial = toolbox.Serial ?? dbToolbox.Serial;

            await context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult DeleteToolbox(int id)
        {
            var dbToolbox = context.Toolboxes.Find(id);
            if (dbToolbox == null)
            {
                return NotFound();
            }

            context.Toolboxes.Remove(dbToolbox);

            return NoContent();
        }
    }
}
