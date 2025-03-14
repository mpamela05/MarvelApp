using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MarvelApp.Migrations
{
    /// <inheritdoc />
    public partial class Add_Model_Tables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Heroji",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Heroj_ime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Lokacija = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Moc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Osobnost = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Heroji", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Identiteti",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Godine = table.Column<int>(type: "int", nullable: true),
                    God_rodjenja = table.Column<int>(type: "int", nullable: true),
                    God_smrti = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Identiteti", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Timovi",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Planet = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Timovi", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Heroji");

            migrationBuilder.DropTable(
                name: "Identiteti");

            migrationBuilder.DropTable(
                name: "Timovi");
        }
    }
}
