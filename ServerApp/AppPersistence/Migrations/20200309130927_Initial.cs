using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AppPersistence.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Craftsmen",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmploymentDate = table.Column<DateTime>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    WorkField = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Craftsmen", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Toolboxes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Acquired = table.Column<DateTime>(nullable: false),
                    Make = table.Column<string>(nullable: true),
                    OwnerId = table.Column<int>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Serial = table.Column<string>(nullable: true),
                    Color = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Toolboxes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Toolboxes_Craftsmen_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Craftsmen",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Tools",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Acquired = table.Column<DateTime>(nullable: false),
                    Make = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Serial = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    ToolboxId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tools", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tools_Toolboxes_ToolboxId",
                        column: x => x.ToolboxId,
                        principalTable: "Toolboxes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Toolboxes_OwnerId",
                table: "Toolboxes",
                column: "OwnerId");

            migrationBuilder.CreateIndex(
                name: "IX_Tools_ToolboxId",
                table: "Tools",
                column: "ToolboxId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tools");

            migrationBuilder.DropTable(
                name: "Toolboxes");

            migrationBuilder.DropTable(
                name: "Craftsmen");
        }
    }
}
