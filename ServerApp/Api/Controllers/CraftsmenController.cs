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
    public class CraftsmenController : ControllerBase
    {
        private readonly AppDbContext context;

        public CraftsmenController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/Craftsmen
        [HttpGet]
        public async Task<IEnumerable<Craftsman>> GetCraftsmen()
        {
            return await context.Craftsmen.ToListAsync();
           
        }

        // GET: api/Craftsmen/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Craftsman>> GetCraftsman(int id)
        {
            var craftsman = await context.Craftsmen.FindAsync(id);
            if (craftsman == null)
            {
                return NotFound();
            }

            return craftsman;
        }

        // POST: api/Craftsmen
        [HttpPost]
        public async Task<ActionResult<Craftsman>> PostCraftsman([FromBody] Craftsman craftsman)
        {
            context.Add(craftsman);
            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostCraftsman), new { id = craftsman.Id }, craftsman);
        }

        // PUT: api/Craftsmen/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCraftsman(int id, [FromBody] Craftsman craftsman)
        {
            var dbCraftsman = await context.Craftsmen.FindAsync(id);
            if (dbCraftsman == null)
            {
                return NotFound();
            }

            context.Attach(dbCraftsman);
            dbCraftsman.FirstName = craftsman.FirstName ?? dbCraftsman.FirstName;
            dbCraftsman.LastName = craftsman.LastName ?? dbCraftsman.LastName;
            dbCraftsman.Toolboxes = craftsman.Toolboxes ?? dbCraftsman.Toolboxes;
            dbCraftsman.WorkField = craftsman.WorkField ?? dbCraftsman.WorkField;
            dbCraftsman.EmploymentDate = craftsman.EmploymentDate != null ? craftsman.EmploymentDate : dbCraftsman.EmploymentDate;


            await context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult DeleteCraftsman(int id)
        {
            var dbCraftsman = context.Craftsmen.Find(id);
            if (dbCraftsman == null)
            {
                return NotFound();
            }

            context.Craftsmen.Remove(dbCraftsman);

            return NoContent();
        }
    }
}
