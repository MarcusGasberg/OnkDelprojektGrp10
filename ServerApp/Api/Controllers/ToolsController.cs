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
    public class ToolsController : ControllerBase
    {
        private readonly AppDbContext context;

        public ToolsController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/Tools
        [HttpGet]
        public async Task<IEnumerable<Tool>> GetTools()
        {
            return await context.Tools.ToListAsync();
           
        }

        // GET: api/Tools/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tool>> GetTool(int id)
        {
            var tool= await context.Tools.FindAsync(id);
            if (tool == null)
            {
                return NotFound();
            }

            return tool;
        }


        // POST: api/Tools
        [HttpPost]
        public async Task<ActionResult<Tool>> PostTool([FromBody] Tool tool)
        {
            context.Add(tool);

            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostTool), new { id = tool.Id }, tool);
        }

        // PUT: api/Tools/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTool(int id, [FromBody] Tool tool)
        {
            var dbTool = await context.Tools.FindAsync(id);
            if (dbTool == null)
            {
                return NotFound();
            }

            context.Attach(dbTool);
            dbTool.Acquired = tool.Acquired != null ? tool.Acquired : dbTool.Acquired;
            dbTool.Type = tool.Type ?? dbTool.Type;
            dbTool.Make = tool.Make ?? dbTool.Make;
            dbTool.Model = tool.Model ?? dbTool.Model;
            dbTool.Id = tool.Id ?? dbTool.Id;
            dbTool.Serial = tool.Serial ?? dbTool.Serial;

            await context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult DeleteTool(int id)
        {
            var dbTool = context.Tools.Find(id);
            if (dbTool == null)
            {
                return NotFound();
            }

            context.Tools.Remove(dbTool);

            return NoContent();
        }
    }
}
