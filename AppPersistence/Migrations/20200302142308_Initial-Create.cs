using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AppPersistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Craftsman",
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
                    table.PrimaryKey("PK_Craftsman", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Toolbox",
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
                    table.PrimaryKey("PK_Toolbox", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Toolbox_Craftsman_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Craftsman",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Tool",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
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
                    table.PrimaryKey("PK_Tool", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tool_Toolbox_ToolboxId",
                        column: x => x.ToolboxId,
                        principalTable: "Toolbox",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tool_ToolboxId",
                table: "Tool",
                column: "ToolboxId");

            migrationBuilder.CreateIndex(
                name: "IX_Toolbox_OwnerId",
                table: "Toolbox",
                column: "OwnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tool");

            migrationBuilder.DropTable(
                name: "Toolbox");

            migrationBuilder.DropTable(
                name: "Craftsman");
        }
    }
}
